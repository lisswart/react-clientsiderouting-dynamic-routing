import "./DefinitionList.css";
import Stems from "./Stems";
import ShortDef from "./ShortDef";

function DefinitionList({ wordObject }) {
    const shortdef = wordObject.shortdef;
    return (
        <div>
            {shortdef.length !== 0 ?
                <div className="definition-div" >
                    <strong>id: </strong>{wordObject.meta.id}<br></br>
                    <strong>headword: </strong>{wordObject.hwi.hw}<br></br>
                    <strong>functional label: </strong>{wordObject.fl}<br></br>
                    <strong>stems: </strong><Stems wordObject={wordObject} />
                    <i><strong>short definition: </strong></i><ShortDef wordObject={wordObject} />
                </div> :
                <div className="not-available definition-div">
                    id: {wordObject.meta.id}<br></br>
                    headword: {wordObject.hwi.hw}<br></br>
                    stems: <Stems wordObject={wordObject} />
                    short definition not available
                </div>
            }
        </div>
    );
}

export default DefinitionList;
