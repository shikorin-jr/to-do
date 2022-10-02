import React, { useState } from "react";


const TaskAddForm = ({ addTask }) => {

    const [userInput, setUserInput] = useState("");

    const handleChange = (e) => {
        setUserInput(e.currentTarget.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        addTask(userInput);
        setUserInput("");
    };

    return (
        <div className="task-add-form p-8 bg-orange-100">
            <h3 className="text-2xl mb-8">Добавьте задачу:</h3>
            <form
                onSubmit={handleSubmit}
                className="flex flex-col">
                <input type="text"
                    value={userInput}
                    onChange={handleChange}
                    className="p-4 mb-8 bg-white rounded-md w-full"
                    placeholder="Введите задачу" />
                <button type="submit"
                    className="py-3 px-10 text-white bg-sky-600 rounded-md">Добавить</button>
            </form>
        </div>
    )
}

export default TaskAddForm;