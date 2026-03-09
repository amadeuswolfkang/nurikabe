import "./Instructions.css";

const Instructions = () => {
    return (
        <div>
            <h1 className="title">Finish the puzzle by painting squares black to make white islands.</h1>
            <ol>
                <li>Each numbered squared is an island square, the number is how many squares the island should have.</li>
                <li>Each island must contain exactly one numbered square.</li>
                <li>No pools of 2×2 black squares.</li>
            </ol>
        </div>
    );
}

export default Instructions;