import {useState} from 'react';

function Todo(props) {

            //current state     //function change the value
    const [modalIsOpen, setModalIsOpen] = useState(false)


    function deleteHandler() {
        
    }

    return  <div className="card" >
    <h2>{props.text}</h2>
    <div className="actions">
    <button className="btn" onClick={deleteHandler} > Delete</button>
    </div>
  </div>
}

export default Todo;