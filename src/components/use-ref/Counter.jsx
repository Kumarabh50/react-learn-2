import { useRef, useState } from "react"

export default function Counter() {

    let [counter, setCounter] = useState(0);
    const refElement = useRef('');
    
    const handleCounter = (counter) => {
        setCounter(counter);

        refElement.current.style.color = counter < 5 ? 'blue' : 'red'
    }
    return (
        <>
            <div className="container-fluid">
                <div className="counter">
                <h3 ref={refElement} className="text-center">{counter}</h3>
                <button onClick={() => {handleCounter(counter+1)}}>Increment</button><br /><br />
                <button onClick={() => {handleCounter(counter-1)}}>Decrement</button>
                </div>
            </div>
        </>
    )
}