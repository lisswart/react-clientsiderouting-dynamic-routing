import DefinitionList from "./DefinitionList";
import "./DefinitionCard.css";

function DefinitionCard({ searchResults }) {
    return (
        <ol className="definition-card">
            {searchResults.map(wordObject => (
                <li className="definition-list"
                    key={wordObject.meta.uuid}>
                        <DefinitionList
                            className="definition-list"
                            key={wordObject.meta.id}
                            wordObject={wordObject}
                        />
                </li>
            ))}
        </ol>
    );
}

export default DefinitionCard;
