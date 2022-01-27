import React, { useState, useCallback, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import UserForm from '../components/UserForm'
import * as appActions from '../actions/appActions'


const FormContainer = props => {
    // portions of state for dropdown lists
    const [submissionsList, setSubmissionsList] = useState()

    const statesList = useSelector(state => state.states)
    const occupationsList = useSelector(state => state.occupations)

    const dispatch = useDispatch()

    const loadPage = useCallback(async () => {
        try {
            await dispatch(appActions.fetchData())
        } catch (error) {
            console.log(error.message)
        }
    }, [dispatch])

    useEffect(() => {
        loadPage()
    }, [loadPage])

  return (
    <UserForm occupationsList={occupationsList} statesList={statesList} />
  );
}

export default FormContainer