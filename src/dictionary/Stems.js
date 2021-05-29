import "./Stems.css";

function Stems({ wordObject }) {
    const stems = wordObject.meta.stems;
    return (
        <ul>
            {stems.map(item => (
                <li className="stems" key={item}>
                    {item}
                </li>
            ))}
        </ul>
    );
}

export default Stems;
