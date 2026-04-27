import { render, screen } from "@testing-library/react"
import TampilanProduk from "@/views/produk"

// Mock next/router
jest.mock("next/router", () => ({
  useRouter() {
    return {
      route: "/produk",
      pathname: "",
      query: {},
      asPath: "",
      push: jest.fn(),
      isReady: true,
    }
  },
}))

// Mock next/image
jest.mock("next/image", () => ({
  __esModule: true,
  default: ({ src, alt }: { src: string; alt: string }) => (
    <img src={src} alt={alt} />
  ),
}))

describe("TampilanProduk Component", () => {
  // Test 1 - render dengan data kosong
  it("renders skeleton when products is empty", () => {
    const page = render(<TampilanProduk products={[]} />)
    expect(page).toMatchSnapshot()
  })

  // Test 2 - render dengan data produk
  it("renders products correctly", () => {
    const mockProducts = [
      {
        id: "1",
        name: "Produk Test",
        price: 100000,
        image: "/test.jpg",
        category: "Kategori Test",
      },
    ]
    const page = render(<TampilanProduk products={mockProducts} />)
    expect(screen.getByText("Produk Test")).toBeTruthy()
    expect(page).toMatchSnapshot()
  })
})