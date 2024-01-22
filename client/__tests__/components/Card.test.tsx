import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Card from "@/components/Card";

it("displays the restaurant's details", () => {
    const restaurant = {
        name: "Test Restaurant",
        address: "Test Address",
        time: { open: "10:00", close: "22:00" },
        date: "01/01/2021",
        tags: ["Tag1", "Tag2"],
    };

    render(<Card restaurant={restaurant} />);
    expect(screen.getByText(restaurant.name)).toBeInTheDocument();
    expect(screen.getByText(restaurant.address)).toBeInTheDocument();
    expect(
        screen.getByText(`${restaurant.time.open} - ${restaurant.time.close}`)
    ).toBeInTheDocument();
    expect(screen.getByText("Tag1, Tag2")).toBeInTheDocument();
});
