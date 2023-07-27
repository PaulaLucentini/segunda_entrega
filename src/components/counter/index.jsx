/* eslint-disable react/prop-types */

const Counter = ({counter, onDecrementCounter, onIncrementCounter, isValidCounter}) => {
    return (
        <div>
            <h1>Counter</h1>
            <div className="buttonContainer">
                <button type="button" className="counterButton" onClick={onDecrementCounter} disabled={!isValidCounter}>-</button>
                <p className="counterText">{counter}</p>
                <button type="button" className="counterButton" onClick={onIncrementCounter}>+</button>
            </div>
        </div>
    )
}

export default Counter;





