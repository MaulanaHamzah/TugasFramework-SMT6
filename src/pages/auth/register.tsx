import Link from "next/link";
import { useState, FormEvent } from "react";
import styles from "./register.module.scss";

const halamanRegister = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle registration logic here
    console.log("Form submitted:", formData);
    alert("Registrasi berhasil!");
  };

  return (
    <div className={styles.register}>
      <div className={styles.formContainer}>
        <h1 style={{ marginBottom: "30px", color: "#333" }}>Halaman Register</h1>
        <form onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label className={styles.label}>Username</label>
            <input
              type="text"
              placeholder="Masukkan username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Email</label>
            <input
              type="email"
              placeholder="Masukkan email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Password</label>
            <input
              type="password"
              placeholder="Masukkan password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.formGroup}>
            <label className={styles.label}>Konfirmasi Password</label>
            <input
              type="password"
              placeholder="Konfirmasi password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit" className={styles.button}>
            Register
          </button>
        </form>
        <div className={styles.linkContainer}>
          <p>Sudah punya akun? <Link href="/auth/login" className={styles.link}>Login di sini</Link></p>
        </div>
      </div>
    </div>
  );
};

export default halamanRegister;
