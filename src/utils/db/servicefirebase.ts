import {
  getFirestore,
  collection,
  getDocs,
  getDoc,
  doc,
  query,
  where,
  addDoc,
  updateDoc,
} from "firebase/firestore";
import app from "./firebase";
import bcrypt from "bcrypt";

const db = getFirestore(app);

// Fungsi reusable untuk query user by email
export async function getUserByEmail(email: string) {
  const q = query(
    collection(db, "users"),
    where("email", "==", email)
  );
  const querySnapshot = await getDocs(q);
  const data = querySnapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data.length > 0 ? data[0] : null;
}

export async function retrieveProducts(collectionName: string) {
  const snapshot = await getDocs(collection(db, collectionName));
  const data = snapshot.docs.map((doc) => ({
    id: doc.id,
    ...doc.data(),
  }));
  return data;
}

export async function retrieveDataByID(collectionName: string, id: string) {
  const snapshot = await getDoc(doc(db, collectionName, id));
  const data = snapshot.data();
  return data;
}

// Refactor signIn menggunakan getUserByEmail
export async function signIn(email: string) {
  const user = await getUserByEmail(email);
  return user ? user : null;
}

// Refactor signUp menggunakan getUserByEmail
export async function signUp(
  userData: {
    email: string;
    fullname: string;
    password: string;
    role?: string;
  },
  callback: Function
) {
  const existingUser = await getUserByEmail(userData.email);

  if (existingUser) {
    callback({ status: "error", message: "Email already exists" });
  } else {
    userData.password = await bcrypt.hash(userData.password, 10);
    userData.role = "member";
    await addDoc(collection(db, "users"), userData)
      .then(() => {
        callback({
          status: "success",
          message: "User registered successfully",
        });
      })
      .catch((error) => {
        callback({ status: "error", message: error.message });
      });
  }
}

// Refactor signInWithGoogle menggunakan getUserByEmail
export async function signInWithGoogle(userData: any, callback: any) {
  try {
    const existingUser: any = await getUserByEmail(userData.email);

    if (existingUser) {
      // User sudah ada, update data
      userData.role = existingUser.role;
      await updateDoc(doc(db, "users", existingUser.id), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    } else {
      // User baru, tambah data
      userData.role = "member";
      await addDoc(collection(db, "users"), userData);
      callback({
        status: true,
        message: "User registered and logged in with Google",
        data: userData,
      });
    }
  } catch (error: any) {
    callback({
      status: false,
      message: "Failed to register user with Google",
    });
  }
}