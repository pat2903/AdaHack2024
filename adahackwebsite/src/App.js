import React from 'react';
import './App.css';

function App() {
  React.useEffect(() => {
    fetch("/buy")
      .then((res) => res.json())
      .then((data) => console.log(data));
  }, []);

  const items = [
    {
      name: "Large Flat screen Television",
      description: "Large large large flat screen television"
    },
    {
      name: "Large Rounded Table",
      description: "Rounded table with minor scratches courtesy of my cat"
    },
    {
      name: "Green Northface Jacket",
      description: "Green puffer"
    }
  ]

  async function handleClick() {
    // const res = await fetch('https:localhost:8080/buy', {
    //   method: 'GET',
    //   headers: {
    //     'Authorization':'Bearer 8j4MNyQBnOuB0WWMhUM5dnm9sixNDWCVMhSuP',
    //     'Content-Type':'application/json',
    //     'mode':'no-cors',
    //     'Access-Control-Allow-Origin':'*',
    //     'Access-Control-Allow-Methods':'GET, POST,PATCH,OPTIONS'
    //   },
    // })
    // const data = await res.json()
    // console.log(data)
    const res = await fetch('https:localhost:8080/buy')
    console.log(res)
  }

  return (
    <main className="flex min-h-screen flex-col items-center bg-gray-200">
      <div className="text-black font-semibold py-10 text-center">
        <h1 className="text-6xl">TITLE</h1>
        <h2 className="text-2xl">FILLER TEXT</h2>
      </div>
      <div className="flex flex-col items-center justify-center gap-y-4">
        {items.map((feature) => (
          <div className="flex justify-between bg-gray-300 rounded-lg mx-auto max-w-2xl w-full items-center">
            <span className="px-4 font-semibold">{feature.name}</span>
            <button onClick={handleClick} className="text-white font-semibold rounded-lg bg-green-400 px-4 py-2">BUY</button>
          </div>
        ))}
      </div>
    </main>

  );
}

export default App;
