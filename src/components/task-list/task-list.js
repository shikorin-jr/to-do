import TaskListItem from "../task-list-item/task-list-item";

const TaskList = ({todos, removeTask, handleToggle}) => {


    return (
        <ul className="task-list p-8 bg-orange-100	mb-8">
            {todos.map((todo) => {
                return (
                <TaskListItem
                    todo={todo}
                    key={todo.id}
                    handleToggle={handleToggle}
                    removeTask={removeTask}
                />
                );
            })}

        </ul>
    )
}

export default TaskList;