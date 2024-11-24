import { render, screen, fireEvent } from "@testing-library/react";
import TodoList from "./TodoList";

// Setup the test with a few initial todos
beforeEach(() => {
  render(<TodoList />);
});

describe("TodoList component", () => {
  // Test: Renders TodoList component with initial todos
  test("renders TodoList with initial todos", () => {
    // Check that the initial todos are displayed
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Learn JavaScript")).toBeInTheDocument();
  });

  // Test: Adding a new Todo
  test("adds a new todo item", () => {
    // Simulate user input
    fireEvent.change(screen.getByPlaceholderText(/Enter todo/i), {
      target: { value: "New Todo" },
    });

    // Simulate form submission (clicking the "Add Todo" button)
    fireEvent.click(screen.getByText(/Add Todo/i));

    // Check if the new todo appears in the list
    expect(screen.getByText("New Todo")).toBeInTheDocument();
  });

  // Test: Toggling a todo item
  test("toggles a todo item completion", () => {
    const todoItem = screen.getByText("Learn React");

    // Initially, the todo should not have the completed class
    expect(todoItem).not.toHaveClass("completed");

    // Simulate clicking the todo item to toggle completion
    fireEvent.click(todoItem);

    // Verify that the todo now has the 'completed' class (or similar indication)
    expect(todoItem).toHaveClass("completed");

    // Simulate clicking again to toggle back
    fireEvent.click(todoItem);

    // Verify that the todo is no longer marked as completed
    expect(todoItem).not.toHaveClass("completed");
  });

  // Test: Deleting a todo item
  test("deletes a todo item", () => {
    const todoItem = screen.getByText("Learn React");

    // Check that the todo item exists before deletion
    expect(todoItem).toBeInTheDocument();

    // Simulate clicking the delete button for "Learn React"
    fireEvent.click(screen.getByLabelText("Delete Learn React"));

    // Verify that the todo item no longer exists
    expect(todoItem).not.toBeInTheDocument();
  });
});
