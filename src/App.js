import "./App.css";
import ToDoList from "./components/toDo/ToDoList";

function App() {
  const todos = [
    { id: 1, comleted: false, title: "Купити хліб" },
    { id: 2, comleted: false, title: "Купити масло" },
    { id: 3, comleted: false, title: "Купити молоко" },
  ];

  return (
    <div className="wrapper">
      <h1>React tutorial</h1>
      <ToDoList todos={todos} />
    </div>
  );
}

export default App;
