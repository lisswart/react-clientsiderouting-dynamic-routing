import "./Dictionary.css";
import Turtle from "./turtle.png";
import { useState, useEffect } from "react";
import WordSearchForm from "./WordSearchForm";
import DefinitionCard from "./DefinitionCard";

function Dictionary() {
    const [searchResults, setSearchResults] = useState([]);
    const [query, setQuery] = useState("");

    const LEARNER_DICTIONARY_API_KEY = "3248df3e-261a-4346-bf3d-e4d8e4480e1e";
    const LEARNER_DICTIONARY_BASE_URL = "https://www.dictionaryapi.com/api/v3/references/learners/json/";

    useEffect(() => {
        fetch(`${LEARNER_DICTIONARY_BASE_URL}${query || "droll"}?key=${LEARNER_DICTIONARY_API_KEY}`)
            .then(r => r.json())
            .then(wordData => setSearchResults(wordData))
            .catch(err => console.error(err));
    }, [query]);

    return (
        <div>
            <div className="homepage">
                <h1 className="dictionary-heading">Learner's Dictionary</h1>
                <img className="dictionary-image" alt="dictionary" src={Turtle} />
                <WordSearchForm onSubmitQuery={setQuery} />
            </div>            
            <div className="definition-container">
                <DefinitionCard searchResults={searchResults} />
            </div>           
        </div>
    );
}

export default Dictionary;