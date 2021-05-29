import "./ShortDef.css";

function ShortDef({ wordObject }) {
    const shortDef = wordObject.shortdef;

    return (
        <ol>
            {shortDef.map(item => (
                <li key={item}>
                    {item}
                </li>
            ))}
        </ol>
    );
}

export default ShortDef;
