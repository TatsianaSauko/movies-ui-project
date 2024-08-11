import { render, screen } from "@testing-library/react";
import Footer from "../Footer";

describe("Footer Component", () => {
    it("renders the component", () => {
        render(<Footer />);

        const allLinks = screen.getAllByRole("link");
        const link = allLinks[0];

        expect(link).toHaveAttribute("href", "https://github.com/TatsianaSauko");
    });
});
