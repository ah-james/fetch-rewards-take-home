import logo from './logo.svg';
import './App.css';

function App() {
  return (
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
        <option value="Option 1">Option 1</option>
      </select>
      <br/>
      <label>State:</label>
      <select>
        {/* fill in options through GET request */}
        <option value="Option 1">Option 1</option>
      </select>
      <br/>
      <input type="submit" />
    </form>
  );
}

export default App;
