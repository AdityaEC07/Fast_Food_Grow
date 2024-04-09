// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }


// import React from 'react'
// import LAPTOP from './Laptop.JS';
// import ReactDOM from'react-dom'

// function Navbar () {     // component 
//  return (<>
//  <h1> Hello </h1>
//  <h2>  About </h2>
//  </>)
// }
// let a =(<>
// <h1>hello </h1>
// <h2>  Hoiii </h2>

// <Navbar/>
// </>)


// let rootEl = document.getElementById('root');
// ReactDOM.render (a,rootEl);
// console.log(a);

// export default App;


// import React from 'react'

// function About() {
//   return (
//     <div>About</div>
//   )
// }

// export default About

// import React from 'react'
// // import Home from './Home'
// const App = () => { 
//   let count=0
//   const fun1=()=>{
//     // console.log('ehehehehe');
//     count++
//     console.log(count,"rrrr");
//   }
//   return (
//     <div>  
//     <p>  {count} </p>
//       <button  onClick={fun1}> click me</button>
      
//   {/* <Home  data='hello' /> */}
//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Home from './Home'
// import CounterWithLogin from './Couter'
// import Clock from './Clock'

// const App = () => {
//   return (
//     <div>
//       {/* <Home/> */}
//       {/* <CounterWithLogin/> */}
//       <Home/>
//       {/* <Clock/> */}

//     </div>
//   )
// }

// export default App



// import React from 'react'
// import Navbar from './Navbar'
// import './App.css'
// import {Route,Routes}  from 'react-router-dom'
// import Home from './Home'
// import About from './About'
// import Contact from './Contact'


// const App = () => {
//   return (
//     <>
    
//       <Navbar/>

//       <Routes>

//         <Route   path='/Home' element={<Home/>}  />
//         <Route   path='/about' element={<About/>}  />
//         <Route   path='/contact' element={<Contact/>}  />


//       </Routes>

//     </>
//   )
// }

// export default App
//                                       //user effect
//                                   import React, { useEffect, useState } from 'react'
//                                   import { json } from 'react-router-dom'
                                  
//                                   const Home = () => {
                                  
                                  
                                  
                                  
//                                     const [count,SetCount]=useState(10)
//                                     const [city,SetCity]=useState('bhopal')
                                  
//                                     const [data,SetData]=useState()
                                  
                                  
                                  
                                  
                                  
                                  
                                  
                                  
//                                     const fun1=()=>{
//                                       SetCount(count+10)
//                                     }
                                  
//                                     const fun2=()=>{
//                                       SetCity('delhi')
                                  
//                                     }
                                  
//                                     useEffect(()=>{
//                                        fetch('https://jsonplaceholder.typicode.com/todos/1')
//                                     .then(response => response.json())
//                                     .then(json => SetData(json))
//                                     },[ ])
                                  
                                  
//                                     return (
//                                       <div>
                                  
//                                         <p> {count}</p>
//                                         <button onClick={fun1}> add count</button>
//                                         <h4> {city}</h4>
//                                         <button  onClick={fun2}>  city option change</button>
//                                         <h4> 
//                                           {
//                                           data?.title
//                                           }
//                                         </h4>
//                                       </div>
//                                     )
//                                   }
                                  
// export default Home



// input


// import React, { useState } from 'react'             // data input and delete

// const App = () => {
// const [input,setInput]=useState()
// const [data,setData]=useState([])
// const fun1=(e)=>
// {
//   setInput(e.target.value)
// }
// const add =()=>{
//   setData([...data,input])
//   setInput('')
// }

// function Delete (id){
//   // console.log(id);
    
//   let newAA = data.filter((val,index)=>
//   {

//     return index!=id
//   })
// setData(newAA)

// }

//   return (
//     <div    style={{  marginLeft: '50%',marginTop: '68px'}}  >
//    <input   name='input'  value={input} onChange={fun1}  type='tex'placeholder='Enter your todo' />
//    <button onClick={add} > Add</button>    
  
//    {
//     data.map((a,b,c)=>{
    
//     return(<>
//     <ol>
//     <li>{a}</li>
   
//      </ol>
     
//     <button   style={{color:'green'}}  onClick={()=>Delete(b)} >Delete</button>
//       </>

//       )
//     })
//    }
//     </div>
//   )
// }

// export default App


// import React, { useEffect, useState } from 'react'
// import './App.css';         //create form   and summit
// const App = () => {

//   let [input,setInput]= useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     passward:"",
 
//   })
//   function fun1(e){
//     const {name,value}=e.target;
//     setInput({...input,[name]:value})
//     console.log(e.target. value,e.target);
    
//     console.log(input,"input");
//   }
  
//   let [data,SetData]=useState(null)
//   useEffect(()=>{
//     let val=   localStorage.getItem('data')
//     let newData=   JSON.parse(val)
//  console.log(newData,"rrr");
// SetData(newData)


//   },[])



//   const done = (e)=>{
//     e.preventDefault();    
//     // console.log('hiiiii');
//     console.log(input);
//     let a = JSON.stringify(input)
//     localStorage.setItem('data',a)
    
//   }

//   return (
//     <div>
     
//       <form className='fom'  onSubmit={done} >
//       <h1  style={{marginLeft:'50%'}} > STUDENT FORM</h1>
//         <input  type='tex'  required     onChange={fun1} name='firstName'  value={input.firstName} placeholder='enter first name ' />
//         <input  type='tex'  required    onChange={fun1} name='lastName' value={input.lastName}   placeholder='enter lasr name ' />
//         <input  type='tex' required   onChange={fun1}   name='email'  value={input.email} placeholder='enter email  ' />
//         <input  type='tex' required   onChange={fun1}   name='passward'   value={input.passward} placeholder='enter type passwaed' />
//         <button   type='submit'> add</button>
//       </form>


// {
//   data?(
//     <>
// <h1>{data.firstName}</h1>
// <h1>{data.lastNametName}</h1>
// <h1>{data.email}</h1>

//     </>
//   ):(<><h2>kuch nhi mila</h2></>)
// }

//     </div>
//   )
// }

// export default App











// import React, { useEffect, useState } from 'react'
// import './App.css'; 
// const App = () => {
//   let [input,SetInput]=useState({
//     firstName:"",
//     lastName:"",
//     email:"",
//     password:""

//   })
//   let [data,SetData]=useState(null)
//     useEffect(()=>{
//       let val=   localStorage.getItem('data')
//       let newData=   JSON.parse(val)
//    console.log(newData,"rrr");
//   SetData(newData)


//     },[])

//   function fun1(e){
//     // console.log(e.target.value);   
//     let {name,value}=e.target
//     SetInput({...input, [name]:value})
//     // console.log(input,"r");

//   }

// function Delete(){
//   localStorage.clear('data')
//   SetData(null)
// }

// function chalaja(e){
//   e.preventDefault();
//   console.log(input);
//      let a=  JSON.stringify(input)
//   localStorage.setItem('data',a)


 
// }
//   return (
//     <div>
//       <form onSubmit={chalaja}  style={{marginLeft:'50%'}}>
//         <h1 id='one' >STUDENT LOGIN </h1>
//         <label for="fname">First name</label><br></br>
//         <input type='text'  onChange={fun1}  name='firstName'  value={input.firstName} placeholder='Enter your firstName'/>
//         <br/>
//         <br/>
//         <label for="fname"> LastName</label><br></br>
//         <input type='text'  onChange={fun1} name='lastName'  value={input.lastName}  placeholder='Enter your lastName'/>
//         <br/>
//         <br/>
//         <label for="fname">Email</label><br></br>
//         <input type='email'  onChange={fun1} name='email'  value={input.email} placeholder='Enter your email'/>
//         <br/>
//         <br/>
//         <label for="fname">Passward</label><br></br>
//         <input type='password'    onChange={fun1} name='password' value={input.password} placeholder='Enter your PassWord'/>
//         <br/>
//         <br/>
// <button   type='submit'> Add</button>
// <button onClick={Delete} >Delete</button>

//       </form>



     
//       {
//         data?(<>
//         <h1> {data.firstName}</h1>
//         <h4>   {data.lastName}</h4>
//         <h4>  {data.email}</h4>
//         </>):(<>    <h2>  </h2></>)
//       }

      
//     </div>
//   )
// }

// export default App













// import React from 'React';
// import PHONE from '../PHONE';

// const App =()=>{
//   return(

// <div>
//   <PHONE/>
// </div>
//   )
// }
// export default App


// import Laptop from './Laptop';
// import Laptop from './Laptop';

// const App =()=>{
//   return(

// <div>
//   <Laptop/>
// </div>
//   )
// }
// export default App




// import React from 'react'
// import CommA from './CommA'
// import './App.css'; 

// const App = () => {
//   let data='hello'
//   return (
//     <div>
//       <CommA a={data}/>
//     </div>
//   )
// }

// export default App




// import React from 'react';
// import Sound from './Sound';

// const App =()=>{
//   return(

// <div>
//   <Sound/>
// </div>
//   )
// }
// export default App





import React from 'react'


import './Card.css'; 
import Cart from './Cart'
// import { Route,Routes } from 'react-router-dom'
// import ViewCart from './ViewCart'
const App = () => {
 
  return (
    <div>
      {/* <CompA /> */}
      <Cart/>
      {/* <Routes>
        <Route   path='/'  element={<Cart/>}  />
        <Route  path='/view'  element={<ViewCart/>}/>
      </Routes> */}
    </div>
  )
}

export default App