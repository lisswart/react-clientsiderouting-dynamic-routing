import "./PoetryCollection.css";
import { useState, useEffect } from "react";
import PoemSearchForm from "./PoemSearchForm";
import PoemTitles from "./PoemTitles";

function PoetryCollection() {
    const [wordLineQuery, setWordLineQuery] = useState("");
    const [poemCountQuery, setPoemCountQuery] = useState("");
    const [poemSearchResults, setPoemSearchResults] = useState([]);

    const POETRY_DB_BASE_URL = "https://poetrydb.org/";
    const inputField = "lines,poemcount/";

    useEffect(() => {
        fetch(`${POETRY_DB_BASE_URL}${inputField}${wordLineQuery};${poemCountQuery}/title,author,linecount`)
            .then(r => r.json())
            .then(titleObjects => setPoemSearchResults(titleObjects))
            .catch(err => console.error(err));
    }, [POETRY_DB_BASE_URL, inputField, wordLineQuery, poemCountQuery]);

    return (
        <div>
            <h1 className="poetry-collection-heading">Poetry Collection</h1>
            <PoemSearchForm wordLineQuery={setWordLineQuery} poemCountQuery={setPoemCountQuery} />
            <PoemTitles titles={poemSearchResults} />
        </div>
    );
}

export default PoetryCollection;