import React, { useState } from "react";
import ToolManager from "./ToolManager";

export default function ToolsLibSection() {
    const [toolList, setToolList] = useState([]);

    const handleDelete = (indexToDelete) => {
        setToolList((prevList) => prevList.filter((_, index) => index !== indexToDelete));
    };

    return (
        <section>
            <h3>Tools Library</h3>
            <ul>
                {toolList.map((tool, index) => (
                    <li key={index}>
                        <strong>{tool.name}</strong> ({tool.type}):
                        Length: {tool.length} mm, Diameter: {tool.diameter} mm, Vc: {tool.Vc} m/min,
                        {tool.type === "drill" && ` Fob: ${tool.Fob}`}
                        {tool.type === "mill" && ` Fz: ${tool.Fz}`}
                        {tool.type === "tap" && ` Pitch: ${tool.pitch}`}
                        <button onClick={() => handleDelete(index)}>Delete tool</button>
                    </li>
                ))}
            </ul>
            <ToolManager toolList={toolList} setToolList={setToolList} />
        </section>
    );
}
