import React, { useState } from 'react'

const UserForm = props => {
    // useState hooks to save user input in form to send via POST request
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [occupation, setOccupation] = useState('')
    const [homeState, setHomeState] = useState('')

    // finish building handleSubmit after form is completely functional
    const handleSubmit = (e) => {
        e.preventDefault()
        const post = { name, email, password, occupation, homeState }

        fetch('https://frontend-take-home.fetchrewards.com/form', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(post)
        })
        .then(response => response.json())
        .then(data => console.log(data))
    }
    
    return(
        <div>
            <form onSubmit={handleSubmit} >
                <br />
                    <label>Full Name: </label>
                    <input type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                    <label>Email: </label>
                    <input name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                    <label>Password: </label>
                    <input name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                <br />
                    <label>Occupation: </label>
                    <select onChange={(e) => setOccupation(e.target.value)} >
                        {/* fill in options through GET request */}
                        <option value="1">         </option>
                        {props.occupationsList?.map((occupation, id) => <option key={occupation} value={id+1} >{occupation}</option>)}
                    </select>
                <br/>
                    <label>State: </label>
                    <select onChange={(e) => setHomeState(e.target.value)} >
                        {/* fill in options through GET request */}
                        <option value="1">         </option>
                        {props.statesList?.map((state, id) => <option key={state.abbreviation} value={id+1} >{state.name}</option>)}
                    </select>
                <br/>
                <input type="submit" />
            </form>
        </div>
    )
}

export default UserForm