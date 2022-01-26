import React, { useEffect, useState } from 'react'

import UserForm from '../components/UserForm'


const FormContainer = props => {

  // portions of state for dropdown lists
  const [occupationsList, setOccupationsList] = useState()
  const [statesList, setStatesList] = useState()
  const [submissionsList, setSubmissionsList] = useState()

  useEffect(() => {
    // GET request to populate select dropdowns in form
    fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(response => response.json())
      .then(data => setOccupationsList(data.occupations));

      fetch('https://frontend-take-home.fetchrewards.com/form')
      .then(response => response.json())
      .then(data => setStatesList(data.states));
  }, []);

  return (
    <UserForm occupationsList={occupationsList} statesList={statesList} />
  );
}

export default FormContainer