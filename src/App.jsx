import React, { useState } from "react";

const App = () => {
    const [count, addCount] = useState(0);
    const plus = () => {
        addCount(count + 1);
    }
    
    return (
        <div className="bg-gray-300 p-3 m-3 rounded">
            <h1 className='font-bold text-2xl mb-3'>Click the Button below to see how much you've clicked!</h1>
            <button onClick={plus} className='rounded bg-transparent border border-black p-1 active:bg-gray-100'>You have clicked {count} times.</button>
        </div>
    )
}
export default App;