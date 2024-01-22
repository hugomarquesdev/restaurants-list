import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Grid from "@/components/Grid";

it("renders the correct number of Card components", () => {
    const restaurants = [
        {
            name: "Restaurant 1",
            address: "Address 1",
            time: { open: "10:00", close: "22:00" },
            date: "01/01/2021",
            tags: ["Tag1", "Tag2"],
        },
        {
            name: "Restaurant 2",
            address: "Address 2",
            time: { open: "11:00", close: "23:00" },
            date: "02/02/2022",
            tags: ["Tag3", "Tag4"],
        },
    ];

    render(<Grid restaurants={restaurants} />);

    const cards = screen.getAllByText(/Open|Closed/);
    expect(cards.length).toBe(restaurants.length);
});

it("displays a message when there are no restaurants", () => {
    render(<Grid restaurants={[]} />);

    const headingElement = screen.getByRole("heading", { level: 2 });
    expect(headingElement).toBeInTheDocument();
});
