import { useEffect, useState } from "react";
import DropDown from "./DropDown";
import './dropDown.scss'

function DropDownMenu () {
    
    const [items, setItems] = useState([])

    useEffect(() => {
        fetch(`https://gateway.marvel.com:443/v1/public/characters?limit=9&offset=210&apikey=2237c04bac4b813ebf6c1cb1ee2c41d9`)
        .then((res) => res.json())
        .then((json) => setItems(json.data.results.map(transformItems)))
        .catch((e) => {
            console.log(e);
        })
    }, [])

    const transformItems = (char) => {
        return {
            name: char.name,   
            thumbnail: char.thumbnail.path + '.' + char.thumbnail.extension,
            id: char.id  
        }
    }

    return(   
            <DropDown title="DropDown menu" items={items} multiSelect/>  
    )
}

export default DropDownMenu;