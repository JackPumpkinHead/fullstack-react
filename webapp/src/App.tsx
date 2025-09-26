export const App = () => {

    return (
        <div>
            <h1>Ideas</h1>
            {ideas.map((el, key) => {
                return (
                    <div key={key}>
                        <h2>{el.name}</h2>
                        <p>{el.description}</p>
                    </div>
                );
            })}
        </div>
    );
};
