import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as appActions from '../actions/appActions'

const UserForm = props => {
    // useState hooks to save user input in form to send via POST request
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [occupation, setOccupation] = useState('')
    const [state, setState] = useState('')
    const [formErrors, setFormErrors] = useState('')

    const dispatch = useDispatch()

    const validateForm = () => {
        // let formErrors = {}
        let formIsValid = true

        if (state === '0' && occupation === '0') {
            formIsValid = false
            // formErrors['image'] = '*Please enter an image'
            setFormErrors('*Please enter a state and an occupation')
        }

        if (occupation === '0') {
            formIsValid = false
            // formErrors['name'] = '*Please enter a name'
            setFormErrors('*Please enter an occupation')
        }

        if (state === '0') {
            formIsValid = false
            // formErrors['image'] = '*Please enter an image'
            setFormErrors('*Please enter a state')
        }
        
        // setErrors(formErrors)
        return formIsValid
    }

    // finish building handleSubmit after form is completely functional
    const handleSubmit = (e) => {
        e.preventDefault()
        if (validateForm()) {
            console.log(name, email, password, occupation, state)
            dispatch(appActions.addData(name, email, password, occupation, state))
        }

        setName('')
        setEmail('')
        setPassword('')
        setOccupation('')
        setState('')
    }
    
    return(
        <div>
            <div>{formErrors}</div>
            <form onSubmit={handleSubmit}>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="nameField" class="col-form-label">Full Name</label>
                    </div>
                    <div class="col-auto">
                        <input id="nameField" type="text" required value={name} onChange={(e) => setName(e.target.value)} />
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="emailField" class="col-form-label">Email</label>
                    </div>   
                    <div class="col-auto">
                        <input name="email" type="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
                    </div>                
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="passwordField" class="col-form-label">Password</label>
                    </div>
                    <div class="col-auto">
                        <input id="passwordField" name="password" type="password" required value={password} onChange={(e) => setPassword(e.target.value)} />
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="occupationDropdown" class="col-form-label">Occupation</label>
                    </div>
                    <div class="col-auto">
                        <select id="occupationDropdown" required onChange={(e) => setOccupation(e.target.value)} >
                            {/* fill in options through GET request */}
                            <option></option>
                            {props.occupationsList?.map((occupation, id) => <option key={id} value={occupation}>{occupation}</option>)}
                        </select>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="stateDropdown" class="col-form-label">State</label>
                    </div>
                    <div class="col-auto">
                        <select id="stateDropdown" required onChange={(e) => setState(e.target.value)} >
                            {/* fill in options through GET request */}
                            <option></option>
                            {props.statesList?.map((state, id) => <option key={id} value={state.abbreviation}>{state.name}</option>)}
                        </select>
                    </div>
                </div>
                <input type="submit" class="btn btn-primary"/>
            </form>
        </div>
    )
}

export default UserForm