import { render, screen } from "@testing-library/react"
import Navbar from "@/pages/components/layout/navbar"

// Mock next-auth
jest.mock("next-auth/react", () => ({
  useSession: jest.fn(() => ({ data: null })),
  signIn: jest.fn(),
  signOut: jest.fn(),
}))

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}))

describe("Navbar Component", () => {
  it("renders navbar with sign in button when not logged in", () => {
    const page = render(<Navbar />)
    expect(screen.getByText("Sign In")).toBeTruthy()
    expect(page).toMatchSnapshot()
  })
})