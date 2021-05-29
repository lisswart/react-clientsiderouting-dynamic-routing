import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "./PoemTitles.css";

function PoemLines() {
    const [poemLines, setPoemLines] = useState([]);
    const params = useParams();
    console.log(params);
    //const title = params.title;

    return (
        <div>
            
        </div>
    );
}

export default PoemLines;
