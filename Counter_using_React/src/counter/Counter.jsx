import './Counter.css';
import { useState } from 'react';
function Counter(){
    const [state,setState] = useState(0);
    function Increase(){
        setState(state+1);
    }
    function Decrease(){
        if(state>0){
            setState(state-1);
        }
    }
    return (
        <div className='container'>
            <div id='counter'>
                <h2>Count Value : {state}</h2><br />
                <button onClick={Increase}>Increase</button>
                <button onClick={Decrease}>Decrease</button>
            </div>
        </div>
    )
}
export default Counter;