import { render, screen } from "@testing-library/react"
import Kategori from "@/pages/produk" 

// Mock next/router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      event: {
        on: jest.fn(),
        off: jest.fn(),
      },
      isReady: true,
    }
  },
}))

// Mock useSWR
jest.mock("swr", () => ({
  __esModule: true,
  default: jest.fn(() => ({
    data: { data: [] },
    error: null,
    isLoading: false,
  })),
}))

describe("Product Page", () => {
  it("renders product page correctly", () => {
    const page = render(<Kategori />)  // ← huruf K kapital
    expect(page).toMatchSnapshot()
  })
})