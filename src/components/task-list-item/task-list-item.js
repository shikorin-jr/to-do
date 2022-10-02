const TaskListItem = ({ todo, handleToggle, removeTask }) => {
    return (
        <li  key={todo.id + todo.key} className={todo.complete ? "flex justify-between bg-lime-500 p-4 mb-1 items-center" : "flex justify-between bg-white p-4 mb-1 items-center"} >
            <span className="w-10/12">{todo.task}</span>
            <div className='w-2/12 flex items-center justify-end'>
                <button type="button"
                    onClick={() => handleToggle(todo.id)}
                    className=" p-3">
                    <i className={todo.complete ? "fas fa-minus text-white" : "fas fa-plus text-lime-600"}></i>
                </button>
                <button type="button"
                        className="p-3"
                        onClick={() => removeTask(todo.id)}>
                    <i className="fas fa-trash text-orange-600	"></i>
                </button>
            </div>
        </li>
    )
}

export default TaskListItem;