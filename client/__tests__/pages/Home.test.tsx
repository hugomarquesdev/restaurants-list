import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import "@testing-library/jest-dom";
import Home from "@/pages";

// Fetch
beforeEach(() => {
    global.fetch = jest.fn(() =>
        Promise.resolve({
            json: () => Promise.resolve({ restaurants: [] }),
        })
    ) as jest.Mock;
});

afterEach(() => {
    jest.restoreAllMocks();
});
// ---

it("displays an error message on fetch failure", async () => {
    global.fetch = jest.fn(() => Promise.reject("Network error")) as jest.Mock;

    render(<Home />);

    await waitFor(() => {
        const errorMessage = screen.getByTestId("network-error");
        expect(errorMessage).toBeInTheDocument();
    });
});

it("allows typing into the search input", async () => {
    render(<Home />);

    await waitFor(() => {
        const input = screen.getByTestId("input") as HTMLInputElement;
        fireEvent.change(input, { target: { value: "test" } });
        expect(input.value).toBe("test");
    });
});
