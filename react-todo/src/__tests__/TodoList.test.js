// src/__tests__/TodoList.test.js
import { render, screen } from "@testing-library/react";
import TodoList from "../components/TodoList";

// Mock local storage if you are using it to persist todos
beforeEach(() => {
  localStorage.clear();
});

describe("TodoList", () => {
  // Test: Renders TodoList component with initial todos
  test("renders TodoList component with initial todos", () => {
    render(<TodoList />);

    // Ensure that the TodoList header is rendered
    expect(screen.getByText(/Todo List/i)).toBeInTheDocument();

    // Check if initial todo items are displayed
    expect(screen.getByText("Learn React")).toBeInTheDocument();
    expect(screen.getByText("Build a Todo App")).toBeInTheDocument();
    expect(screen.getByText("Learn JavaScript")).toBeInTheDocument();
  });
});
