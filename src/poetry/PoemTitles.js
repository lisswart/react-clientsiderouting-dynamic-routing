import "./PoemTitles.css";
import { Link } from "react-router-dom";

function PoemTitles({ titles }) {
    return (
        <div>
            <ol className="poem-titles">
                {Array.from(titles).map((title, index) => (
                    <li>
                        <Link to={`/poetry-collection/${title.title}`} 
                            key={index}
                            className="title-link">
                                <h2 className="poem-title">
                                    <i>{title.title}</i>
                                </h2>
                        </Link>
                        <h3 className="author">{title.author}</h3>
                        <p className="linecount">linecount: {title.linecount}</p>
                    </li>                    
                ))}
            </ol>
        </div>
    );
}

export default PoemTitles;
