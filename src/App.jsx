import Navigation from "./Components/Navigation.jsx";
import Popup from "./Components/Popup.jsx";
import { IoAddOutline } from "react-icons/io5";
import { useRef, useState } from "react";
import { useOnClickOutside } from "./useOnClickOutside.js";
import TaskPopup from "./Components/TaskPopup.jsx";
import Switcher11 from "./Components/ToggleBtn.jsx";

function App() {
    const [visible, setVisible] = useState(false);
    const [TaskVisible, setTaskVisible] = useState(false);
    const [tasks, setTasks] = useState([]);
    const [currentIndex, setCurrentIndex] = useState(null);
    const [checkedStates, setCheckedStates] = useState([]);

    const openPopup = () => {
        setVisible(true);
    };

    const closePopup = () => {
        setVisible(false);
        setTaskVisible(false);
        setCurrentIndex(null);
    };

    const addTask = (task) => {
        setTasks([...tasks, task]);
        setCheckedStates([...checkedStates, false]); // Initialize checked state for new task
    };

    const saveTask = (index, title, desc) => {
        const newTasks = [...tasks];
        newTasks[index] = { ...newTasks[index], title, desc };
        setTasks(newTasks);
        closePopup();
    };

    const deleteTask = (index) => {
        const newTasks = tasks.filter((_, i) => i !== index);
        setTasks(newTasks);
        const newCheckedStates = [...checkedStates];
        newCheckedStates.splice(index, 1);
        setCheckedStates(newCheckedStates);
        closePopup();
    };

    const popupRef = useRef(null);
    useOnClickOutside(popupRef, () => {
        closePopup();
    });

    const TaskPopupref = useRef(null);
    useOnClickOutside(TaskPopupref, () => {
        closePopup();
    });

    const [gettitle, setGettitle] = useState("");
    const [getDecs, setGetDecs] = useState("");

    const handleopen = (index) => {
        setGettitle(tasks[index].title);
        setGetDecs(tasks[index].desc);
        setCurrentIndex(index);
        setTaskVisible(true);
    };

    const handlestrike = (index) => {
        const newCheckedStates = [...checkedStates];
        newCheckedStates[index] = !newCheckedStates[index]; // Toggle the checked state
        setCheckedStates(newCheckedStates);
    };

    return (
        <div className={"font-Poppins"}>
            <Navigation/>
            <Switcher11/>
            <div className={"mt-6 mx-6 relative z-0"}>
                {tasks.map((task, index) => (
                    <div key={index} className={"flex items-center justify-center"}>
                        <input
                            type="checkbox"
                            className="h-10 w-10 mr-4 rounded-md border"
                            checked={checkedStates[index]}
                            onChange={() => handlestrike(index)}
                        />
                        <div onClick={() => handleopen(index)}
                             className={`p-4 mt-1 mb-4 bg-white shadow-xl rounded-lg w-full ${checkedStates[index] ? 'line-through' : ''}`}>
                            <h2 className={"text-xl font-bold"}>{task.title}</h2>
                        </div>
                    </div>
                ))}
            </div>

            {TaskVisible && (
                <div className={"inset-0 flex items-center justify-center absolute backdrop-blur-sm"}>
                    <div className={"p-4 rounded-xl bg-white shadow-2xl"} ref={TaskPopupref}>
                        <TaskPopup title={gettitle} desc={getDecs} index={currentIndex} saveTask={saveTask} deleteTask={deleteTask} />
                    </div>
                </div>
            )}

            {visible && (
                <div className={"inset-0 flex items-center justify-center absolute backdrop-blur-sm"}>
                    <div className={"p-4 rounded-xl bg-white shadow-2xl border-2"} ref={popupRef}>
                        <Popup addTask={addTask} closePopup={closePopup} />
                    </div>
                </div>
            )}

            <div className={"fixed bottom-10 right-4 z-40"}>
                <button
                    onClick={openPopup}
                    className={
                        "bg-black w-20 h-20 flex items-center justify-center rounded-full active:scale-90 duration-200 active:bg-gradient-to-b from-red-500 to-blue-500"
                    }
                >
                    <p className={"text-white text-4xl"}>
                        <IoAddOutline/>
                    </p>
                </button>
            </div>
        </div>
    );
}

export default App;
