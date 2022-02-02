import React, { useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserForm from '../components/UserForm'
import * as appActions from '../actions/appActions'


const FormContainer = props => {
    const statesList = useSelector(state => state.states)
    const occupationsList = useSelector(state => state.occupations)

    const dispatch = useDispatch()

    const loadPage = useCallback(async () => {
        try {
            await dispatch(appActions.fetchData())
        } catch (error) {
            console.log(error)
        }
    }, [dispatch])

    useEffect(() => {
        loadPage()
    }, [loadPage])

    return (
        <div>
            <h1>Fetch Rewards</h1>
            <UserForm occupationsList={occupationsList} statesList={statesList} />
        </div>
    );
}

export default FormContainer