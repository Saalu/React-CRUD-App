import React,{useState} from 'react'

function CreateItem(props) {
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [position, setPosition] = useState('')

    const AddItem = (e) => {
        e.preventDefault()
        
        if(name === '' || email === '' || position === ''){
            alert('Please all the fields are required')
            return;
        }
        const newInputs = {name, email, position}
        props.addHandler(newInputs)
        props.history.push('/');
    }
    return (
        <div className='container'>
        <form className=""  onSubmit={AddItem}>
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

                <button type="submit" className="btn btn-primary mt-3">Add</button>
            </div>
        </form>
        </div>
    )
}

export default CreateItem
