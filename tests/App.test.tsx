import React from "react";
import { render, screen } from "@testing-library/react";
import App from "../src/app/index";

test("renders movies link", () => {
    render(<App />);
    const linkElement = screen.getByText(/movies/i);
    expect(linkElement).toBeInTheDocument();
});
