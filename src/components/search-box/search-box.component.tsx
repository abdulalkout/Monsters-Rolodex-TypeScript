import "./search-box.style.css";
import { ChangeEventHandler } from "react";

interface ISearchBoxProps extends onChangeHandlerProps {
    className : string;
    placeholder? :string; 
}

interface onChangeHandlerProps {
    onEventHandler : ChangeEventHandler<HTMLInputElement>;
}

const SearchBox = ({className, placeholder, onEventHandler}: ISearchBoxProps) => {
    return (
        <input 
        className= {`search-box ${className}`} 
        type='search' 
        placeholder= {placeholder}
        onChange={onEventHandler} />
    )
}

export default SearchBox;