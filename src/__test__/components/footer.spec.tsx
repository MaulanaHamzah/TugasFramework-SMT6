import { render, screen } from "@testing-library/react"
import Footer from "@/pages/components/layout/footer"

describe("Footer Component", () => {
  it("renders footer correctly", () => {
    const page = render(<Footer />)
    expect(screen.getByText("2026 My App.")).toBeTruthy()
    expect(page).toMatchSnapshot()
  })
})