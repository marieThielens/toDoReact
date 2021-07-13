const ToDoItem = ({todo}) => {
    return (
        <div>
            {todo.nomTache} {todo.description}
        </div>
    );
 };
  
 export default ToDoItem;