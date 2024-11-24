import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "../components/TodoList";

beforeEach(() => {
  localStorage.clear();
});

describe("TodoList", () => {
  // Test: Renders TodoList component with initial todos
  test("renders TodoList component with initial todos", () => {
    render(<TodoList />);

    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Learn JavaScript")).toBeInTheDocument();
  });

  // Test: Adding a new Todo
  test("adds a new todo item", () => {
    render(<TodoList />);

    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText(/Enter todo/i), {
      target: { value: "New Todo" },
    });

    // Simulate form submission
    fireEvent.click(screen.getByText(/Add Todo/i));

    // Verify the new todo appears in the list
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });
});

// Test: Toggling a todo item
test("toggles a todo item", () => {
  render(<TodoList />);

  // Get the todo item to toggle
  const todoItem = screen.getByText("Learn React");

  // Simulate click to toggle completed status
  fireEvent.click(todoItem);

  // Verify that the todo is toggled (it should have a completed class or similar indication)
  expect(todoItem).toHaveClass("completed");

  // Simulate another click to toggle back
  fireEvent.click(todoItem);

  // Verify that the todo is no longer completed
  expect(todoItem).not.toHaveClass("completed");
});


// Test: Deleting a todo item
test("deletes a todo item", () => {
  render(<TodoList />);

  // Verify that the todo exists before deletion
  const todoItem = screen.getByText("Learn React");
  expect(todoItem).toBeInTheDocument();

  // Simulate click on delete button (assuming you have a delete button or icon for each todo)
  fireEvent.click(screen.getByLabelText("Delete Learn React"));

  // Verify that the todo is no longer in the document
  expect(todoItem).not.toBeInTheDocument();
});
