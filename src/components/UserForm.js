import React, { useState } from 'react'
import { useDispatch } from 'react-redux'

import * as appActions from '../actions/appActions'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

const UserForm = props => {
    // useState hooks to save user input in form to send via POST request
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [occupation, setOccupation] = useState('')
    const [state, setState] = useState('')
    const [errors, setErrors] = useState('')

    const dispatch = useDispatch()

    const validateForm = () => {
        // set variable to true to return at end, if any dropdown items aren't selected then
        // reset to false, causing the if statement in handleSubmit to not fire
        let formIsValid = true

        if (occupation === '') {
            formIsValid = false
            // error: occupation not filled out
            setErrors('*Please enter an occupation')
        }

        if (state === '') {
            formIsValid = false
            // error: state not filled out
            setErrors('*Please enter a state')
        }

        if (state === '' && occupation === '') {
            formIsValid = false
            // error: neither select filled out
            setErrors('*Please enter a state and an occupation')
        }
        
        return formIsValid
    }

    // finish building handleSubmit after form is completely functional
    const handleSubmit = (e) => {
        e.preventDefault()
        // if validateForm function returns true, dispatch POST HTTP request
        if (validateForm()) {
            dispatch(appActions.addData(name, email, password, occupation, state))

            // reset form
            setName('')
            setEmail('')
            setPassword('')
            setOccupation('')
            setState('')
            setErrors('')
        }
    }
    
    return(
        <div>
            <p class="text-warning">{errors}</p>
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
                        <select id="occupationDropdown" onChange={(e) => setOccupation(e.target.value)} >
                            {/* fill in options through GET request */}
                            <option>Select an Occupation</option>
                            {props.occupationsList?.map((occupation, id) => <option key={id} value={occupation}>{occupation}</option>)}
                        </select>
                    </div>
                </div>
                <div class="row g-3 align-items-center">
                    <div class="col-auto">
                        <label for="stateDropdown" class="col-form-label">State</label>
                    </div>
                    <div class="col-auto">
                        <select id="stateDropdown" onChange={(e) => setState(e.target.value)} >
                            {/* fill in options through GET request */}
                            <option>Select a State</option>
                            {props.statesList?.map((state, id) => <option key={id} value={state.abbreviation}>{state.name}</option>)}
                        </select>
                    </div>
                </div>
                <input type="submit" class="btn btn-primary"/>
                <ToastContainer position="top-center" autoClose={5000} hideProgressBar={false} newestOnTop={false} closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover/>
            </form>
        </div>
    )
}

export default UserForm