import React, { useState, useEffect } from "react";

const ToolManager = ({ toolList, setToolList }) => {
    const [newTool, setNewTool] = useState({
        type: "drill",
        name: "",
        length: "",
        diameter: "",
        Vc: "",
        Fob: "",
        Fz: "",
        pitch: ""
    });

    useEffect(() => {
        const savedTools = JSON.parse(localStorage.getItem("tools"));
        if (savedTools) {
            setToolList(savedTools); // Оновлюємо стан у ToolsLibSection
        }
    }, []);

    useEffect(() => {
        localStorage.setItem("tools", JSON.stringify(toolList));
    }, [toolList]);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setNewTool((prevTool) => ({ ...prevTool, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();

        const toolToAdd = { ...newTool };
        if (newTool.type === "drill") {
            delete toolToAdd.Fz;
            delete toolToAdd.pitch;
        } else if (newTool.type === "mill") {
            delete toolToAdd.Fob;
            delete toolToAdd.pitch;
        } else if (newTool.type === "tap") {
            delete toolToAdd.Fob;
            delete toolToAdd.Fz;
        }

        setToolList((prevList) => [...prevList, toolToAdd]);

        setNewTool({
            type: "drill",
            name: "",
            length: "",
            diameter: "",
            Vc: "",
            Fob: "",
            Fz: "",
            pitch: ""
        });
    };

    return (
        <div>
            <h2>Add New Tool</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tool Type:
                    <select name="type" value={newTool.type} onChange={handleChange}>
                        <option value="drill">Drill</option>
                        <option value="mill">Mill</option>
                        <option value="tap">Tap</option>
                    </select>
                </label>
                <br />
                <label>
                    Name:
                    <input
                        type="text"
                        name="name"
                        value={newTool.name}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Length (mm):
                    <input
                        type="number"
                        name="length"
                        value={newTool.length}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Diameter (mm):
                    <input
                        type="number"
                        name="diameter"
                        value={newTool.diameter}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                <label>
                    Vc (m/min):
                    <input
                        type="number"
                        name="Vc"
                        value={newTool.Vc}
                        onChange={handleChange}
                        required
                    />
                </label>
                <br />
                {newTool.type === "drill" && (
                    <label>
                        Fob:
                        <input
                            type="number"
                            name="Fob"
                            value={newTool.Fob}
                            onChange={handleChange}
                        />
                    </label>
                )}
                {newTool.type === "mill" && (
                    <label>
                        Fz:
                        <input
                            type="number"
                            name="Fz"
                            value={newTool.Fz}
                            onChange={handleChange}
                        />
                    </label>
                )}
                {newTool.type === "tap" && (
                    <label>
                        Pitch:
                        <input
                            type="number"
                            name="pitch"
                            value={newTool.pitch}
                            onChange={handleChange}
                        />
                    </label>
                )}
                <br />
                <button type="submit">Add Tool</button>
            </form>
        </div>
    );
};

export default ToolManager;
