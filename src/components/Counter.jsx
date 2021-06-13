import './Counter.css'

function Counter({count, handleCount}) {
    return (
        <div className="counter" onClick={handleCount}>
            <h2>{count}</h2>
        </div>
    )
}

export default Counter
