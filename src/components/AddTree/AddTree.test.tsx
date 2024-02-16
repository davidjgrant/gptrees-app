import { render, screen, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { rest } from "msw";
import { setupServer } from "msw/node";
import AddTree from "./index";

// Mock API response
const mockApiResponse = {
  tree_species: "Oak",
  tree_height: 10,
  tree_diameter: 30,
  tree_health: "Healthy",
  initial_notes: "Some initial notes",
  tree_age: 50,
  tree_coordinates: "123,456",
  illegal_activities: "None",
  future_plans: "Plant more trees",
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

test("renders AddTree component", async () => {
  render(<AddTree />);

  // Wait for the API response
  await waitFor(() => screen.getByText("Loading data..."));

  // Verify that the input form is rendered with the received data
  expect(screen.getByLabelText("Tree Species")).toHaveValue(
    mockApiResponse.tree_species,
  );
  expect(screen.getByLabelText("Tree Height")).toHaveValue(
    mockApiResponse.tree_height.toString(),
  );
  expect(screen.getByLabelText("Tree Diameter")).toHaveValue(
    mockApiResponse.tree_diameter.toString(),
  );
  expect(screen.getByLabelText("Tree Health")).toHaveValue(
    mockApiResponse.tree_health,
  );
  expect(screen.getByLabelText("Initial Notes")).toHaveValue(
    mockApiResponse.initial_notes,
  );
  expect(screen.getByLabelText("Tree Age")).toHaveValue(
    mockApiResponse.tree_age.toString(),
  );
  expect(screen.getByLabelText("Tree Coordinates")).toHaveValue(
    mockApiResponse.tree_coordinates,
  );
  expect(screen.getByLabelText("Illegal Activities")).toHaveValue(
    mockApiResponse.illegal_activities,
  );
  expect(screen.getByLabelText("Future Plans")).toHaveValue(
    mockApiResponse.future_plans,
  );
});

test("handles successful image upload", async () => {
  render(<AddTree />);

  // Wait for the API response
  await waitFor(() => screen.getByText("Loading data..."));

  // Simulate successful image upload
  const imageUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
  ];
  userEvent.upload(screen.getByLabelText("Upload Images"), imageUrls);

  // Verify that the image URLs are set and the query is enabled
  expect(screen.getByLabelText("Upload Images")).toHaveValue("");
  expect(screen.getByLabelText("Upload Images")).toHaveAttribute("disabled");
  expect(screen.getByLabelText("Query Enabled")).toBeChecked();

  // Verify that the image preview is updated
  expect(screen.getAllByRole("img")).toHaveLength(imageUrls.length);

  // Verify that the image URLs are sent in the API request
  await waitFor(() => expect(server.handlers[0].body).toContain(imageUrls[0]));
  await waitFor(() => expect(server.handlers[0].body).toContain(imageUrls[1]));
});

test("handles image deletion", async () => {
  render(<AddTree />);

  // Wait for the API response
  await waitFor(() => screen.getByText("Loading data..."));

  // Simulate image deletion
  const imageUrls = [
    "https://example.com/image1.jpg",
    "https://example.com/image2.jpg",
  ];
  userEvent.upload(screen.getByLabelText("Upload Images"), imageUrls);
  userEvent.click(screen.getAllByRole("button", { name: "Delete Image" })[0]);

  // Verify that the image is removed from the preview
  expect(screen.getAllByRole("img")).toHaveLength(imageUrls.length - 1);

  // Verify that the image URL is removed from the state
  await waitFor(() =>
    expect(screen.getByLabelText("Query Enabled")).not.toBeChecked(),
  );
});
