import React from "react";
// import logo from "./logo.svg";
// import "./App.css";

//   function App(){
//     return (
//     <div className="App">  
//       {/* <h1>aditi</h1> */}
//         <header className="App-header">
//           <img src={logo} className="App-logo"></img>
//           <p>Learn react now</p>
//         </header>
//       </div>
//     ); 
//   }
// export default App;
import logo from "./chat.png";
import "./App.css";

class App extends React.Component{
   constructor(props){
     super(props);
     this.state={
       newItem:"",
       list:[]
     }
   }
   addItem(todovalue){
     if(todovalue!==""){
       const newItem={
         id:Date.now(),
         value:todovalue,
         isDone:false
       };
       const list=[...this.state.list];
       list.push(newItem);

       this.setState({
         list,
         newItems:""
       });
     }
   }
   deleteItem(id){
     const list=[...this.state.list];
     const updateList=list.filter(item=> item.id!==id);
     this.setState({list:updateList})
   }
    updateInput (input){
      this.setState({newItem:input});
    }
  render(){
      return (
        <div>
          <img src={logo} width ="100" height="100" className="logo"></img>
          <h1 className="app-title">MY APP</h1>
          <div className="container">
            add an iten..
            <br/>
            <input type="text"
            className="input-text"
            placeholder="write a todo"
            required
            value={ this.state.newItem}
            onChange={e=>this.updateInput(e.target.value)}
            ></input>
            <button className="add-btn"
            onClick={()=> this.addItem(this.state.newItem)}
            disabled={!this.state.newItem.length}
            >Add todo</button>
            <div className="list">
              <ul>
                {this.state.list.map(item=>{
                  return(
                    <li key={item.id}>
                      <input 
                      type="checkbox"
                      name="idDone"
                      checked={item.isDone}
                      onChange={()=>{}}></input>
                      {item.value}
                      <button
                      className="btn"
                      onClick={()=>this.deleteItem(item.id)}
                      >Delete</button>
                    </li>
                  );
                })}
                <li>
                  <input type="checkbox" name="" id=""/>Record youtube videos
                   <button className="btn">Delete</button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
  
  }
}
export default App;