import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { useEffect } from 'react';

function App() {
  const heros = ['Razzak','King', 'Alomgir', 'Bappy', 'Salman_Sha', 'Riyaz', 'Manna']
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          to be Edit <code>src/App.js</code> and save to reload.
        </p>

      <Constant></Constant>
      <Users></Users>
        <ul>
          {
            heros.map( heros => <li>{heros} </li> )
          }
        </ul>

          
        <h1 style={{ backgroundColor: 'red' }}>Okay done</h1>
        <Mystyle name='Adnan Pranto' frm='it bari'> </Mystyle>
        <Mystyle name='Tahsan Hosain' frm='Jahnakr'> </Mystyle>

        <Mystyle name='Pagla Babu' frm='Soft tech'> </Mystyle>
      
      
      </header>
    </div>
  );
}

function Mystyle(props) {
  var newStyle = {
    border: '3px solid yellow',
    margin: '15px',
    padding: '5px',
    width: '600px',
    backgroundColor: 'green'
  }

  return (
    <div style={newStyle}>
      <h1>Name: {props.name} </h1>
      <h4>New developer from {props.frm} </h4>
    </div>
  )
}

function Constant(){
  var [digit, setDigit] = useState (10);
  const handleIn = () => setDigit(digit + 1);
  const handleDic = () => setDigit(digit - 1);
  return(
    <div>
      <h1>count:  {digit}</h1>
      <button onClick={handleIn}> Increase</button>
    <button onMouseMove={handleDic}> Dicrease </button>
    </div>
  )
}



function Users (){
  const [users, setUsers] = useState([]);
  useEffect (()=>{ 
    fetch ('https://jsonplaceholder.typicode.com/users')
    .then (res => res.json())
    .then(data => setUsers(data));
  },[])
  return (
    <div>
     
      <h2> Dynamic user: {users.length}  </h2>
      <ol>
        {
          // users.map (user => <li> {user.name} </li>)
          users.map (user => <li> {user.email} </li>)
        }
       
      </ol>

    </div>
  )
  
}



export default App;
