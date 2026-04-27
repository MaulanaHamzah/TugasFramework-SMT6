import { render, screen } from "@testing-library/react"
import AppShell from "@/pages/components/layout/Appshell"

// Mock next/router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/",
      pathname: "/",
      query: {},
      asPath: "",
      push: jest.fn(),
      isReady: true,
    }
  },
}))

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

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Roboto: () => ({ className: "roboto" }),
}))

describe("AppShell Component", () => {
  it("renders children correctly", () => {
    const page = render(
      <AppShell>
        <div data-testid="child">Hello</div>
      </AppShell>
    )
    expect(screen.getByTestId("child")).toBeTruthy()
    expect(page).toMatchSnapshot()
  })

  it("hides navbar on auth pages", () => {
    const page = render(
      <AppShell showNavbar={false}>
        <div>Content</div>
      </AppShell>
    )
    expect(page).toMatchSnapshot()
  })
})