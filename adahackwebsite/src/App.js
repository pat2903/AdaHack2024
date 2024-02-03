import './App.css';


function App() {

  async function handleClick(){
    const res = await fetch('https://api.smartsheet.com/2.0/sheets/5154267455246212', {
      method: 'GET',
      headers: {
        'Authorization':'Bearer 8j4MNyQBnOuB0WWMhUM5dnm9sixNDWCVMhSuP',
        'Content-Type':'application/json',
        'mode':'no-cors'
        // 'Access-Control-Allow-Origin':'*',
        // 'Access-Control-Allow-Methods':'GET, POST,PATCH,OPTIONS'
      },
    })
    const data = await res.json()
    console.log(data)
  }

  return (
    <div>
      <header className="App-header">
        <button onClick={handleClick}>BUY</button>
      </header>
      <div>

      </div>
    </div>
  );
}

export default App;
