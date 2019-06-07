import React, { useState, useEffect, useContext } from 'react';
import '../css/formulaire.css';

function Formulaire(props) {

    let [name, setName] = useState('');
    let [id, setId] = useState(0);
    let [list, setList] = useState([
      ]);
    let [endTask, setendTask] = useState([]);

    function moveItem(id){
       // event.preventDefault();
        endTask.push({"id":tache.id, "name":tache.name)};
        setId(id + 1);
        setName('');
        deleteItem();
    }


    function handleChange(event){
        setName(event.target.value)
    }

    function addItem(event){
        event.preventDefault();
        list.push({"id": id, "name": name});
        setId(id + 1);
        setName('');
    }

    function deleteList(){
      // console.log('hello');
        setList([]);
        setName('');
    }

    function deleteItem(id){
        console.log(id);
        setList(list.filter(Tache => Tache.id !=id));
        list.splice(id,1)
    }


    console.log(list);

   return (
       <div className="">

           <form  onSubmit={addItem}>
               <input type="text" value={name} onChange={handleChange} placeholder="Nom"/>
               <br></br>
               
               <button type="submit" className="btn btn-primary">Ajouter</button>
           </form>

           <button type="button" className="btn btn-warning" onClick={deleteList}>Vider la liste</button>


           <p>Liste :</p>
           
            <ul className="">
                {list.map((tache)=> 
                <li key={tache.id}> {tache.name}
                    <button type="button" className="btn btn-danger" onClick={()=>deleteItem(tache.id)}>X</button>
                    <button type="button" className="btn btn-primary" onClick={(()=>moveItem(tache.id))}>Move</button>

                </li>)}
            </ul>

            <p>Tâche effectuée :</p>
           
           <ul className="">
           </ul>


       </div>
   );
}

export default Formulaire;