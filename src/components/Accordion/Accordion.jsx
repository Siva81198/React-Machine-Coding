import React, { useState } from "react";
import { accordionData } from "./data.js";
import "./styles.css"

const AccordionItem = ({ id, title, content, ActiveElement, mutliSelect, handleSingleSelect, handleMultiSelect, selectedElem }) => {

    return (
        <div className="accord-sub-cont">
            <div className="title" onClick={mutliSelect ? () => handleMultiSelect(id) : () => handleSingleSelect(id)}>
                {title}
            </div>
            {mutliSelect ? selectedElem.indexOf(id) != -1 && <div className="content">{content}</div> : ActiveElement == id && <div className="content">{content}</div>}
        </div>
    )
};

const Accordion = () => {
    const [activeElem, setActiveElem] = useState(null);
    const [mutliSelect, setMultiSelect] = useState(false);
    const [selectedElem, setSelectedElem] = useState([]);
    console.log(mutliSelect);

    const handleSingleSelect = (id) => {
        setActiveElem(activeElem == id ? null : id);
    }

    const handleMultiSelect = (id) => {
        let cpySelectedElem = [...selectedElem];

        if (cpySelectedElem.indexOf(id) === -1) {
            cpySelectedElem.push(id);
        } else {
            cpySelectedElem.splice(cpySelectedElem.indexOf(id), 1);
        }

        setSelectedElem(cpySelectedElem);
    }

    return (
        <>
            <button onClick={() => setMultiSelect(prev => !prev)}>Enable Multiple Accordion</button>
            <div className="accord-cont">
                {accordionData.map((item) => (
                    <AccordionItem
                        key={item.id}
                        id={item.id}
                        title={item.title}
                        content={item.content}
                        handleSingleSelect={handleSingleSelect}
                        handleMultiSelect={handleMultiSelect}
                        ActiveElement={activeElem}
                        mutliSelect={mutliSelect}
                        selectedElem={selectedElem} />
                ))}
            </div>
        </>
    );
};

export default Accordion;
