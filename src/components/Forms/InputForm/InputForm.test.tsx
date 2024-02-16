import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import { toast } from "@/components/ui/use-toast";
import { InputForm } from "./index";

// Mock API response
const mockApiResponse = {
  // ... mock response data
};

// Mock server for API requests
const server = setupServer(
  rest.post("/api/completion", (req, res, ctx) => {
    return res(ctx.json(mockApiResponse));
  }),
);

beforeAll(() => server.listen());
afterEach(() => server.resetHandlers());
afterAll(() => server.close());

test("renders InputForm component", async () => {
  render(<InputForm />);

  // Verify that the form fields are rendered
  expect(screen.getByLabelText("Species")).toBeInTheDocument();
  expect(screen.getByLabelText("Height")).toBeInTheDocument();
  expect(screen.getByLabelText("Diameter")).toBeInTheDocument();
  expect(screen.getByLabelText("Age")).toBeInTheDocument();
  expect(screen.getByLabelText("Coordinates")).toBeInTheDocument();
  expect(screen.getByLabelText("Health")).toBeInTheDocument();
  expect(screen.getByLabelText("Notes")).toBeInTheDocument();
  expect(screen.getByLabelText("Illegal Activities")).toBeInTheDocument();
  expect(screen.getByLabelText("Future Plans")).toBeInTheDocument();
});

test("submits form successfully", async () => {
  render(<InputForm />);

  // Fill in the form fields
  userEvent.type(screen.getByLabelText("Species"), "Oak");
  userEvent.type(screen.getByLabelText("Height"), "10");
  userEvent.type(screen.getByLabelText("Diameter"), "30");
  userEvent.type(screen.getByLabelText("Age"), "50");
  userEvent.type(screen.getByLabelText("Coordinates"), "123,456");
  userEvent.type(screen.getByLabelText("Health"), "Healthy");
  userEvent.type(screen.getByLabelText("Notes"), "Some initial notes");
  userEvent.type(screen.getByLabelText("Illegal Activities"), "None");
  userEvent.type(screen.getByLabelText("Future Plans"), "Plant more trees");

  // Submit the form
  userEvent.click(screen.getByRole("button", { name: "Submit" }));

  // Wait for the API response
  await waitFor(() => screen.getByText("Success"));

  // Verify that the success toast is displayed
  expect(toast).toHaveBeenCalledWith({
    title: "Success",
    description: "Tree added successfully",
  });

  // Verify that the form fields are reset
  expect(screen.getByLabelText("Species")).toHaveValue("");
  expect(screen.getByLabelText("Height")).toHaveValue("");
  expect(screen.getByLabelText("Diameter")).toHaveValue("");
  expect(screen.getByLabelText("Age")).toHaveValue("");
  expect(screen.getByLabelText("Coordinates")).toHaveValue("");
  expect(screen.getByLabelText("Health")).toHaveValue("");
  expect(screen.getByLabelText("Notes")).toHaveValue("");
  expect(screen.getByLabelText("Illegal Activities")).toHaveValue("");
  expect(screen.getByLabelText("Future Plans")).toHaveValue("");
});

test("handles form submission error", async () => {
  render(<InputForm />);

  // Mock an error response from the API
  server.use(
    rest.post("/api/completion", (req, res, ctx) => {
      return res(ctx.status(500));
    }),
  );

  // Fill in the form fields
  userEvent.type(screen.getByLabelText("Species"), "Oak");
  userEvent.type(screen.getByLabelText("Height"), "10");
  userEvent.type(screen.getByLabelText("Diameter"), "30");
  userEvent.type(screen.getByLabelText("Age"), "50");
  userEvent.type(screen.getByLabelText("Coordinates"), "123,456");
  userEvent.type(screen.getByLabelText("Health"), "Healthy");
  userEvent.type(screen.getByLabelText("Notes"), "Some initial notes");
  userEvent.type(screen.getByLabelText("Illegal Activities"), "None");
  userEvent.type(screen.getByLabelText("Future Plans"), "Plant more trees");

  // Submit the form
  userEvent.click(screen.getByRole("button", { name: "Submit" }));

  // Wait for the API response
  await waitFor(() => screen.getByText("Error"));

  // Verify that the error toast is displayed
  expect(toast).toHaveBeenCalledWith({
    title: "Error",
    description: "Failed to add tree. Please try again.",
  });
});
