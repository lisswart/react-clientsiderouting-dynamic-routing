import "./PoemSearchForm.css";
import { useState } from "react";

function PoemSearchForm({ wordLineQuery, poemCountQuery }) {
    const [wordLineInput, setWordLineInput] = useState("");
    const [poemCountInput, setPoemCountInput] = useState("");

    function handleSubmit(event) {
        event.preventDefault();
        wordLineQuery(wordLineInput);
        poemCountQuery(poemCountInput);
    }

    function handleWordLineInputChange(event) {
        setWordLineInput(event.target.value);
    }

    function handlePoemCountInputChange(event) {
        setPoemCountInput(event.target.value);
    }

    return (
        <div className="poem-search-form">
            <form onSubmit={handleSubmit}>
                <div><label className="wordline-poem-search-label">Enter word: </label></div>
                <input type="text" onChange={handleWordLineInputChange} value={wordLineInput} required />
                <div><label className="poemcount-label">Enter # of poem titles to display: </label></div>
                <input type="text" onChange={handlePoemCountInputChange} value={poemCountInput} required />
                <input type="submit" />
            </form>            
        </div>
    );
}

export default PoemSearchForm;
