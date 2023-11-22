import logo from './logo.svg';
import './App.css';
import React, { createContext, useState } from 'react'
import Component1 from './Component1';
import Component2 from './Component2';







export const UserContext = createContext()



function App() {
  const [user, setUser] = useState("Hind hassouni");
  const [text, setText] = React.useState("");
  const [text2, setText2] = React.useState("");
  const [idedit, setIdedit] = React.useState(null);
  const [active, setActive] = React.useState(true);

  const [tasks, setTasks] = React.useState([{id:1,description:"learn react js"},

  {id:2,description:"learn Spring boot"}]);

  const [helparray2, sethelparray]=React.useState([{id:1,description:"learn react js"},

  {id:2,description:"learn Spring boot"}])






  const ajouter=()=>{



var id=Math.floor(Math.random()*1000)
     
setText(prev=>{
if(text.length>0){

         setTasks([...tasks,{id:id,description:text}])
         sethelparray([...helparray2,{id:id,description:text}])
        }
 return prev})
 setText("")

 setText2("")

 setTasks([...helparray2,{id:id,description:text}])
  
 search("")




}














  const supprimer=(id)=>{
    var helparray=tasks.filter((x)=> { return x.id != id})

    console.log(helparray)

    setTasks(helparray)
    sethelparray(helparray)
  }

  const editer=(id)=>{
    setActive(false)
    var texta=tasks.filter((x)=> { return x.id == id})
    console.log(texta)
    setText(texta[0].description)
    setIdedit(texta[0].id)
    //console.log(text)
  }




  
  const update=()=>{

    var helparray=tasks.map((x)=>{
           if(x.id==idedit){
            return {...x,description:text}
           } 

  return x
    })

setTasks(helparray)
sethelparray(helparray)
setText("")
setActive(true)
  }




  

const search=(input)=>{

  
 

const inputString = input;

setText2(input)

 
if(input.length==0){
  
alert("yupppppp")
setTasks(helparray2)
}


else{

var texta=helparray2.filter((x)=> {
  var pattern=x.description
  const result= pattern.search(inputString);
  return result !== -1

})
setTasks(texta)
}


setTimeout(()=>{

  console.log(helparray2)
  console.log(tasks)
},1500)







}










  return (
    <UserContext.Provider value={user}>
    <div className="container">




      
      <div className="d-flex flex-row mt-5">
             
              <input  
              value={text}
              placeholder='entrez votre mission'
              onChange={(e) => setText(e.target.value)} 
          type="text" class="form-control" />
              
              

{active ? 
              <button 
              onClick={()=>{ajouter()}}
              className="btn btn-primary ml-2">ajouter</button>
          :     
               <button 
               onClick={()=>{update()}}
              className="btn btn-warning ml-2">update</button>

}
      </div>

      <input  
              
              value={text2}
              placeholder='Search'
              onChange={(e) => search(e.target.value)} 
          type="text" class="form-control mt-5 w-75" />






      <table class="table table-hover mt-5">
    <thead>
      <tr>
        <th>id</th>
        <th>description</th>
        <th>option</th>
      </tr>
    </thead>
    <tbody>


{tasks.length>0 && tasks.map((x)=>{
return(

  <tr>
  <td>{x.id}</td>
  <td>{x.description}</td>
  <td>
    <button className="btn btn-danger ml-2"  onClick={()=>{supprimer(x.id)}} >supprimer</button>
    <button className="btn btn-success ml-2"onClick={()=>{editer(x.id)}}>editer</button>
  </td>
</tr>




)


})

   
    

}




    </tbody>
  </table>








    </div>
    </UserContext.Provider>
  );
}

export default App;
