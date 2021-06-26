import ToDoItem from "./ToDoItem.js";
const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0,
  },
};

function ToDoList(props) {
  return (
    <ul style={styles.ul}>
      {props.todos.map((todo, index) => {
        return <ToDoItem todo={todo} key={todo.id} index={index} />;
      })}
    </ul>
  );
}

export default ToDoList;
