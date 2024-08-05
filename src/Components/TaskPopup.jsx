import { useState, useEffect } from 'react';

function TaskPopup({ title, desc, index, saveTask, deleteTask }) {
    const [isEditing, setIsEditing] = useState(false);
    const [taskTitle, setTaskTitle] = useState(title);
    const [taskDesc, setTaskDesc] = useState(desc);

    useEffect(() => {
        setTaskTitle(title);
        setTaskDesc(desc);
    }, [title, desc]);

    const handleEdit = () => {
        setIsEditing(true);
    }

    const handleSave = () => {
        saveTask(index, taskTitle, taskDesc);
        setIsEditing(false);
    }

    const handleDelete = () => {
        deleteTask(index);
    };

    return (
        <div className="flex flex-col items-center bg-white p-2 rounded-xl">
            <div className="flex space-x-2 items-center justify-center py-3 px-2 bg-[#f5f5f5] rounded-2xl">
                <input
                    type="text"
                    placeholder="Create a new task"
                    className="bg-[#f5f5f5] p-2 rounded-lg focus:outline-none focus:border-none w-[21rem]"
                    value={taskTitle}
                    onChange={(e) => setTaskTitle(e.target.value)}
                    readOnly={!isEditing}
                />
            </div>
            <textarea
                name="desc"
                cols="30"
                rows="5"
                placeholder="Notes"
                className="w-[21rem] h-auto bg-white resize-none rounded-xl focus:outline-none focus:border-none px-2 py-3"
                value={taskDesc}
                onChange={(e) => setTaskDesc(e.target.value)}
                readOnly={!isEditing}
            ></textarea>
            <div className="space-y-2 w-full">
                {!isEditing ? (
                    <button
                        onClick={handleEdit}
                        className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full w-full active:scale-90"
                    >
                        Edit
                    </button>
                ) : (
                    <button
                        onClick={handleSave}
                        className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full w-full active:scale-90"
                    >
                        Save
                    </button>
                )}
                <button
                    onClick={handleDelete}
                    className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none w-full active:scale-90 flex items-center justify-center rounded-full duration-200 bg-gray-900"
                >
                    Delete
                </button>
            </div>
        </div>
    );
}

export default TaskPopup;
