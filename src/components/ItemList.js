import React from 'react'
import {Link} from 'react-router-dom'
import user from '../image/avatar.png'
function ItemList({item, deleteHandler}) {
    const {id, name, email, position} = item;

    return (
        <div className="container ">

        <li className="list-group-item d-flex justify-content-between my-2">
             <div className="first d-flex justify-content-between">
                 
                 <img src={user} className="mr-3 img-thumbnail rounded" 
                 height='50' width='50' alt="user" />
                 <div className="">            
                 <h5 className="on-"><span>{name}</span> -- <span>{position}</span></h5>
                 <div className='text-primary on-hover'>{email}</div>
                 </div>
 
             </div>
            <div className="second">
            <div className="todo-icon mt-3">
               
                <span className="mx-2 text-primary">
                <Link to={{pathname:`edit/${id}`, state:{item}}} style={{color:'inherit', textDecoration:'none'}} >
                    <i className="fas fa-pen"></i>
                </Link>
                </span>
                <span className="mx-2 text-danger">
                    <i onClick={() => deleteHandler(id)}  className="fas fa-trash"></i>
                </span>
            </div>
            </div>
        </li>
     </div>
    )
}

// to={{pathname: `/edit/${id}`, item}}

export default ItemList
