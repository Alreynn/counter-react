import React, { useState } from "react";

export const App = () => {
    const [count, addCount] = useState(0);
    const plus = () => { addCount(count + 1) };
    const minus = () => { addCount(count - 1) };
    const multiply = () => { addCount(count * count) };
    const multiply2 = () => { addCount(count * 2) };
    
    return (
        <main className="md:w-1/2 xl:w-1/3 bg-gray-800 text-white p-5 m-8 border-2 border-indigo-300 rounded-xl">
            <h1 className='font-bold text-2xl text-center mb-1'>Click the Button below to see how much you've clicked!</h1>
            <p className="text-center">You've clicked {count} times.</p>
            <div className="flex justify-evenly align-middle flex-wrap m-1 gap-y-2">
                <button onClick={plus} className='w-1/5 rounded bg-transparent border border-white p-1 active:bg-gray-700'>Add</button>
                <button onClick={minus} className='w-1/5 rounded bg-transparent border border-white p-1 active:bg-gray-700'>Minus</button>
                <button onClick={multiply} className='w-1/2 rounded bg-transparent border border-white p-1 active:bg-gray-700'>Multiply by Itself</button>
                <button onClick={multiply2} className='w-1/2 rounded bg-transparent border border-white p-1 active:bg-gray-700'>Multiply by 2</button>
            </div>
            <p className="text-center">You can reset by refreshing the page.</p>
        </main>
    )
}