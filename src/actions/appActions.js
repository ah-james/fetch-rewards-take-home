import { toast } from 'react-toastify';

export const fetchData = () => {
    return async dispatch => {
        try {
            let response = await fetch('https://frontend-take-home.fetchrewards.com/form')

            if (!response.ok) {
                throw new Error('Something Went Wrong!')
            }

            let json = await response.json()
            dispatch({type: "GET_DATA", payload: json})

        } catch (error) {
            throw error
        }
    }
}

export const addData = (name, email, password, occupation, state) => {
    return async dispatch => {
        try {
            let response = await fetch('https://frontend-take-home.fetchrewards.com/form', {
                method: 'POST',
                body: JSON.stringify({name, email, password, occupation, state}),
                headers: {'Content-Type': 'application/json'},
            })

            if (response.ok) {
                // give alert on page that the form was submitted successfully
                toast.success('Your form submitted correctly!')
            } else {
                throw new Error('Something Went Wrong!')
            }

        } catch (error) {
            throw error
        }
    }
}