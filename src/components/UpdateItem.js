import React,{useState} from 'react'

function CreateItem(props) {
    const {item} = props.location
    const [id, setId] = useState(item.id)
    const [name, setName] = useState(item.name)
    const [email, setEmail] = useState(item.email)
    const [position, setPosition] = useState(item.position)
    
    const update = (e) => {
        e.preventDefault()
        
        if(name === '' || email === '' || position === ''){
            alert('Please all the fields are required')
            return;
        }
        const newInputs = {id,name, email, position}
        props.updateHandler(newInputs)
        props.history.push('/');
    }
    return (
        <div className='container'>
        <form className=""  onSubmit={update}>
            <div className="">
                <label className="">Name</label>
                <input type="text" 
                className="form-control" 
                name='name' 
                placeholder="name" value={name} 
                onChange={(e) => setName(e.target.value)} />
            </div>
            <div className="">
                <label className="">Email</label>
                <input type="text" 
                className="form-control" 
                name='email' 
                placeholder="email@example.com" value={email} 
                onChange={(e) => setEmail( e.target.value)}/>
            </div>
            <div className="">
                <label className="">Position</label>
                <input type="text" 
                className="form-control"
                 name='position' 
                 placeholder="engineer" value={position} 
                 onChange={(e) => setPosition(e.target.value)}/>
            </div>

            <div className="">

                <button type="submit" className="btn btn-success btn-block mt-3">Update Item</button>
            </div>
        </form>
        </div>
    )
}

export default CreateItem
