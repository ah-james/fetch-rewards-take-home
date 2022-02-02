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
    const handleSubmit = e => {
        e.preventDefault()
        // if validateForm function returns true, dispatch POST HTTP request
        if (validateForm()) {
            dispatch(appActions.addData(name, email, password, occupation, state),
        )

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
        <div class="py-5 container">
            <div class="row py-lg-5">
                <div class="col-lg-6 col-md-8 mx-auto">
                    <h2 class="text-center h2 mb-3 font-weight-normal">Fetch Rewards Form</h2>
                    {errors ? <p class="text-center p-3 mb-2 bg-danger text-white">{errors}</p> : null}
                    <form onSubmit={handleSubmit}>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="nameField" class="col-form-label">Full Name</label>
                                <input 
                                    id="nameField" 
                                    class="form-control" 
                                    type="text" 
                                    required 
                                    value={name} 
                                    onChange={(e) => setName(e.target.value)}
                                    placeholder="Full Name" 
                                />
                            </div>
                            <div class="col-md-6">
                                <label for="emailField" class="col-form-label">Email</label>
                                <input 
                                    name="email" 
                                    class="form-control" 
                                    type="email" 
                                    required 
                                    value={email} 
                                    onChange={(e) => setEmail(e.target.value)} 
                                    placeholder="Email" 
                                />
                            </div>                 
                        </div>
                        <div class="form-group col-md-12">
                                <label for="passwordField" class="col-form-label">Password</label>
                                <input 
                                    id="passwordField" 
                                    class="form-control" 
                                    name="password" 
                                    type="password" 
                                    required 
                                    value={password} 
                                    onChange={e => setPassword(e.target.value)} 
                                    placeholder="Password" 
                                />
                        </div>
                        <div class="row">
                            <div class="form-group col-md-6">
                                <label for="occupationDropdown" class="col-form-label">Occupation</label>
                                <select id="occupationDropdown" class="form-control" onChange={(e) => setOccupation(e.target.value)} >
                                    {/* fill in options through GET request */}
                                    <option>Select an Occupation</option>
                                    {props.occupationsList?.map((occupation, id) => <option key={id} value={occupation}>{occupation}</option>)}
                                </select>
                            </div>
                            <div class="form-group col-md-6">
                                <label for="stateDropdown" class="col-form-label">State</label>
                                <select id="stateDropdown" class="form-control" onChange={(e) => setState(e.target.value)} >
                                    {/* fill in options through GET request */}
                                    <option>Select a State</option>
                                    {props.statesList?.map((state, id) => <option key={id} value={state.abbreviation}>{state.name}</option>)}
                                </select>
                            </div>
                        </div>
                        <br/>
                        <div class='text-center' >
                            <input type="submit" class="btn btn-primary"/>
                        </div>
                        {/* ToastContainer for valid submission alert */}
                        <ToastContainer 
                            position="top-center" 
                            autoClose={5000} 
                            hideProgressBar={false} 
                            newestOnTop={false} 
                            closeOnClick 
                            rtl={false} 
                            pauseOnFocusLoss 
                            draggable 
                            pauseOnHover 
                        />
                    </form>
                </div>
            </div>
        </div>
    )
}

export default UserForm