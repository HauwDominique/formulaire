import React, { useState, useEffect, useContext } from 'react';
import '../css/formulaire.css';



function Formulaire(props) {

    let [name, setName] = useState('');
    let [id, setId] = useState(0);
    let [idFinishedTask, setIdFinishedTask] = useState(0);
    let [list, setList] = useState([]);
    let [endTask, setEndTask] = useState([]);

    function handleChange(event){
        setName(event.target.value)
    }

    function addTask(event){
        event.preventDefault();
        list.push({"id": id, "name": name});
        setId(id + 1);
        setName('');
    }

    function deleteTasksList(){
        setList([]);
    }

    function deleteTask(id){
        // console.log(id);
        setList(list.filter(Task => Task.id !==id));
        list.splice(id,1)
    }

    function sendToFinishedTasks(id){
        let array= list.filter(Task=>Task.id === id);
        array.map((objet)=>endTask.push(objet));
        setList(list.filter(Task => Task.id !==id));
     }

     function deletedFinishedTask(endTaskid){
        setEndTask(endTask.filter(endTask => endTask.id !== endTaskid));
        endTask.splice(endTaskid,1);
    }

     function deleteFinishedTaskList(){
        setEndTask([]);
     }


   return (
       <div className="container">

           <form  onSubmit={addTask}>
               <input type="text" value={name} onChange={handleChange} placeholder="Nom"/>
               <br></br>
               
               <button type="submit" className="btn btn-primary">Ajouter</button>
           </form>

        <div className="container bg-dark">
           <p className="text-white bg-grey">Liste des tâches à effectuer : </p>
           
            <ul className="">
                {list.map((task)=> 
                <li key={task.id} className="toDoTask"> {task.name}
                    <button type="button" className="btn btn-danger" onClick={()=>deleteTask(task.id)}>
                        <span className="glyphicon glyphicon-trash"></span>
                    </button>

                    <button type="button" className="btn btn-success" onClick={()=>sendToFinishedTasks(task.id)}>
                        <span className="glyphicon glyphicon-ok"></span>
                    </button>

                </li>)}

                <button type="button" className="btn btn-warning" onClick={deleteTasksList}>Vider la liste</button>
            </ul>
        </div>


        <div className="container bg-green">

           <p className="subtitleTask">Liste des tâches effectuées :</p>
           
           <ul className="">
               {endTask.map((endTask)=>
               <li key={endTask.id} className="finishedTasks"> {endTask.name} 
               
               <button type="button" className="btn btn-danger" onClick={()=>deletedFinishedTask(endTask.id)}>
                    <span className="glyphicon glyphicon-trash"></span>
               </button>
               </li>)}
           </ul>

           <button className="btn btn-warning" onClick={()=>deleteFinishedTaskList()}>Vider la liste</button>
        </div>


       </div>
   );
}

export default Formulaire;
