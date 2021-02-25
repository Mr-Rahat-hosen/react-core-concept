import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const nayoks =["Razzak", "rubel", "Alamgir", "Salman Sha", "jasim", 'bappi']
  const products =[
    {name: 'Photoshop', price:'$90.00'},
    {name:'illusstrator', price:'$60.99'},
    {name:'pdf reader', price:'$6.99'}
  ]
  // const productNames = products.map(product =>product);
  // console.log(productNames)
  // const nayokNames = nayoks.map(nayok => nayok);
  // console.log(nayokNames);

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <p>I am a react person</p>
       <Counter></Counter>
        <Users></Users>
       <ul>
         {/* <li>{nayoks[0]}</li>
         <li>{nayoks[1]}</li>
         <li>{nayoks[2]}</li> */}
         {
           nayoks.map(nayok => <li>{nayok}</li>)
         }
         {
           products.map(product => <li>{product.name}</li>)
         }
         {
           products.map(pd=><Product product={pd}></Product>)
         }
       </ul>
       {/* <Product name={products[0].name} price={products[0].name}></Product> */}
       {/* <Product product={products[0]}></Product> */}
       
       
      </header>
    </div>
  );
}
function Counter(){
  const [count, setCount] = useState(0);
  const handleIncrease = () => setCount(count + 1);
  return (
    <div>
      <h1>Count: {count}</h1>
      <button onClick={() => setCount(count - 1)}>Decrease</button>
      <button onClick={() => setCount(count + 1)}>Increase</button>
    </div>
  )
}
function Users(){
  const [users, setUsers] = useState([]);
  useEffect(()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then(data => setUsers(data));
  },[])
  return(
    <div>
      <h3>Dynamic User:{users.length}</h3>
     <ul>
       {
         users.map(user => <li>{user.phone}</li>)
       }
     </ul>
    </div>
  )
}

function Product(props){
  const productStyle={
    border:'1px solid gray',
    borderRadius:"5px",
    backgroundColor:"lightGray",
    height:'200px',
    width:'200px',
    float:'left',
    margin: '5px'
  }
   const {name,} = props.product;
  console.log(props);
  return (
    <div style= {productStyle}>
      <h2>{props.product.name}</h2>
      <h3>{props.product.price}</h3>
      <button>Buy Now</button>
    </div>
  )
}


export default App;
