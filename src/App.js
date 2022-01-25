import { useEffect, useState } from 'react';
import './App.css';

function App() {
  const [occupations, setOccupations] = useState()
  const [states, setStates] = useState() 

  // GET request to populate select dropdowns in form
  useEffect(() => {
    fetch('https://frontend-take-home.fetchrewards.com/form')
        .then(response => response.json())
        .then(data => setOccupations(data.occupations));

        fetch('https://frontend-take-home.fetchrewards.com/form')
        .then(response => response.json())
        .then(data => setStates(data.states));

  }, []);

  return (
    <div>
      <form>
        <label>Full Name: </label>
        <input name="fullName" type="text" />
        <br />
        <label>Email: </label>
        <input name="email" type="email" />
        <br />
        <label>Password: </label>
        <input name="password" type="password" />
        <br />
        <label>Occupation: </label>
        <select>
          {/* fill in options through GET request */}
          <option value="1">         </option>
          {occupations?.map((occupation, id) => <option key={occupation} value={id+1}>{occupation}</option>)}
        </select>
        <br/>
        <label>State:</label>
        <select>
          {/* fill in options through GET request */}
          <option value="1">         </option>
          {states?.map((state, id) => <option key={state.abbreviation} value={id+1}>{state.name}</option>)}
        </select>
        <br/>
        <input type="submit" />
      </form>


    </div>

  );
}

export default App;
