import React from "react";


const Todo = ({text,setTodos,todos,todo}) => {

    const DeleteTodoHandler = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
    }
    const CompleteTodoHandler = () => {
        setTodos(
            todos.map((item) => {
                if(item.id === todo.id) {
                    return {
                        ...item,
                        Completed: !item.Completed,
                    };
                }
                return item;
            }
            )
        )
    }
    return (
        <div className="todo">
            <li className={`todo-item ${todo.Completed ? "completed" :""}`}>{text}</li>
            <button onClick={CompleteTodoHandler} className="complete-btn"><i className="fas fa-check"></i></button>
            <button onClick={DeleteTodoHandler} className="trash-btn"><i className="fas fa-trash"></i></button>
        </div>
    );
};

export default Todo;