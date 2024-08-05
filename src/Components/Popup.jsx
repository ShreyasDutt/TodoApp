import { useState } from "react";

function Popup({ addTask, closePopup }) {
    const [form, setForm] = useState({ title: "", desc: "" });

    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    const handleAdd = () => {
        if (form.title === "") {
            alert("Please fill all the values");
        } else {
            addTask({ ...form });
            setForm({ title: "", desc: "" });
            closePopup();
        }
    };

    return (
        <div className="flex flex-col items-center bg-white p-2 rounded-xl">
            <div className="flex space-x-2 items-center justify-center py-3 px-2 bg-[#f5f5f5] rounded-2xl">
                <input
                    type="text"
                    placeholder="Create a new task"
                    className="bg-[#f5f5f5] p-2 rounded-lg focus:outline-none focus:border-none w-[21rem]"
                    value={form.title}
                    onChange={handleChange}
                    name="title"
                />
            </div>
            <textarea
                name="desc"
                cols="30"
                rows="5"
                placeholder="Notes"
                className="w-[21rem] h-auto bg-white resize-none rounded-xl focus:outline-none focus:border-none px-2 py-3"
                value={form.desc}
                onChange={handleChange}
            ></textarea>
            <button
                onClick={handleAdd}
                className="align-middle select-none font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-3 px-6 bg-gray-900 text-white shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none rounded-full w-full active:scale-90"
            >
                Add Task
            </button>
        </div>
    );
}

export default Popup;
