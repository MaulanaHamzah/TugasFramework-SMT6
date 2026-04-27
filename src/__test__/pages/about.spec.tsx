import { render, screen } from "@testing-library/react"
import Home from "@/pages/about"

describe("About Page", () => {
  it("renders about page correctly", () => {
    const page = render(<Home />)
    expect(screen.getByTestId("title").textContent).toBe("Nama: Achmad Maulana Hamzah")
    expect(page).toMatchSnapshot()
  })
})