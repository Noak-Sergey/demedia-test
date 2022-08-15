import React, { useState } from "react";
import onClickOutside from 'react-onclickoutside';
import IconDropdown from "../iconDropdown/IconDropdown";
import TextDropdown from "../textDropdown/TextDropdown";

function DropDown({title, items = [], multiSelect = false}) {

    const [open, setOpen] = useState(false);
    const [selection, setSelection] = useState([]);
    const toggle = () => setOpen(!open);
    DropDown.handleClickOutside = () => setOpen(false)

    function handleOnClick(item) {
        if(!selection.some(current => current.id === item.id)) {
            if(!multiSelect) {
                setSelection([item]);
            } else if (multiSelect) {
                setSelection([...selection, item]);
            }
        } else {
            let selectionAfterRemoval = selection;
            selectionAfterRemoval = selectionAfterRemoval.filter(current => current.id !== item.id);
            setSelection([...selectionAfterRemoval])
        }
    }

    function isItemSelection(item) {
        if(selection.find(current => current.id === item.id)) {
            return true;
        }
        return false
    }

    return (
        <div className="dd-wrapper ">
            <div 
                tabIndex={0} 
                className="dd-header" 
                role="button" 
                onKeyPress={() => toggle(!open)} 
                onClick={() => toggle(!open)}
                >
                    <div className="dd-header__title">
                        <p className="dd-header__title--bold">{title}</p>
                    </div>
                    <div className="dd-header__action">
                        <p>{open ? "Close" : "Open"}</p>
                    </div>
            </div>
            {open && (
                <ul className="dd-list">
                    {items.map(item => (
                        <li className="dd-list-item" key={item.id}>
                            <button type="button" onClick={() => handleOnClick(item)}>
                                <TextDropdown name={item.name}/>
                                <span>{isItemSelection(item) && 'Selected'}</span>
                                <IconDropdown src={item.thumbnail} alt={item.name}/>
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
}

const clickOutsideConfig = {
    handleClickOutside: () => DropDown.handleClickOutside,
};

export default onClickOutside(DropDown, clickOutsideConfig);