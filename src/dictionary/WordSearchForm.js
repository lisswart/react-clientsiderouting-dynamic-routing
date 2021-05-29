import "./WordSearchForm.css";
import { useState } from "react";

function WordSearchForm({ onSubmitQuery }) {
    const [input, setInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        onSubmitQuery(input);
    }

    function handleInputChange(event) {
        setInput(event.target.value);
    }

    return (
        <div className="word-search-container">
            <form onSubmit={handleSubmit}>
                <div className="enter-word-label-div">
                    <label className="enter-word-label">Enter search word: </label>
                </div>
                <input type="text" onChange={handleInputChange} value={input} />
                <input type="submit" />
            </form>
        </div>
    );
}

export default WordSearchForm;
