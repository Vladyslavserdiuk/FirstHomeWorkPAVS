import React, {useState} from 'react';

import './App.css';

function App() {
    let counter = 0;
    const [count, setCount] = useState(0);

    const Add = () => {
        console.log('ADD ONE', counter)
        counter++
        setCount(count + 1)
    }
    const Minus = () => {
        console.log('MINUS ONE', counter)
        counter--
        setCount(count - 1)
    }
    const AddTen = () => {
        console.log('ADD TEN', counter)
        counter--
        setCount(count + 10)
    }
    const MinusTen = () => {
        console.log('MINUS TEN', counter)
        counter--
        setCount(count - 10)
    }

    const AddRandom = () => {
        setCount(count + Math.trunc((Math.random()) * 10));
    }
    const MinusRandom = () => {
        setCount(count - Math.trunc((Math.random()) * 10));
    }

    return (
        <div className="App">
            <h1>{count}</h1>
            <div className="btn">
                <button onClick={Add}>Plus 1</button>
                <button onClick={Minus}>Minus 1</button>
            </div>
            <hr/>
            <div>
                <button onClick={AddTen}>Plus 10</button>
                <button onClick={MinusTen}>Minus 10</button>
            </div>
            <hr/>
            <div>
                <button onClick={AddRandom}>Plus Random</button>
                <button onClick={MinusRandom}>Plus Random</button>
            </div>

        </div>
    );
}

export default App;
