
const TaskHeader = ({completed, nocompleted}) => {
    return (
        <div className="task-header p-8 bg-orange-100	mb-8">
            <h1 className="text-center text-3xl font-bold mb-8">To Do List</h1>
            <h2 className="text-2xl">Активные задачи: {nocompleted}</h2>
            <h2 className="text-2xl">Выполненные задачи: {completed}</h2>
        </div>
    )
}

export default TaskHeader;