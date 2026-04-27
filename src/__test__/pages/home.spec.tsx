import { render, screen } from "@testing-library/react"
import Home from "@/pages/index"

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

// Mock next/font/google
jest.mock("next/font/google", () => ({
  Inter: () => ({ subsets: [] }),
}))

describe("Home Page", () => {
  it("renders home page correctly", () => {
    const page = render(<Home />)
    expect(screen.getByText("Praktikum Next.js Pages Router")).toBeTruthy()
    expect(page).toMatchSnapshot()
  })
})