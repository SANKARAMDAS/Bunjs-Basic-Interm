// import fetchUser from "./githubAPI";

// (async () => {
//     const userData = await fetchUser('SANKARAMDAS');
//     document.querySelector('h1').innerHTML = JSON.stringify(userData);
// })();

import React from 'react'
import { createRoot } from 'react-dom'
const root = createRoot(document.getElementById('root'));


const App =() => {
    const [count, setCount] = React.useState(0)
    return(
        <div>
        <h1>Hello World!</h1>
        <h2>Count: {count}</h2>
        <button onclick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
};

root.render(<App />);