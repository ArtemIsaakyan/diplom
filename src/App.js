import React from 'react';
import axios from 'axios';
import Builder from './components/Builder';
import Creator from './components/Creator';
import Menu from './components/Menu';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import './App.scss';
export * from 'react-router';

function App() {
  const [users, setUsers] = React.useState([]);
  const [exercises, setExercises] = React.useState([]);

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [usersResponse, exerciseResponse] = await Promise.all([
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/users'),
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/newExercises'),
        ]);
        setUsers(usersResponse.data);
        setExercises(exerciseResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }

    fetchData();
  }, []);

  return (
    <Router>
      <div className="App">
        <Menu />
        <Switch>
          <Route exact path="/info" component={Builder} />
          <Route exact path="/calculate">
            <Creator users={users} exercises={exercises} />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
