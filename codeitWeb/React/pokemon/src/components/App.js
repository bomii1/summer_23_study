function App({ items = []}) {
    return (
        <ul>
            {items.map((item) => (
                <li>
                    <div>{item.name}</div>
                    <div>{item.types.join(', ')}</div>
                </li>
            ))}
        </ul>
    );
}

export default App;