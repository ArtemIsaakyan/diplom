import * as React from 'react';
import axios from 'axios';
import classNames from 'classnames';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import './Creator.scss';
import Calculate from '../Calcualte';

export default function Creator({ users, exercises }) {
  const [user, selectUser] = React.useState('default');

  const handleChange = (event) => {
    selectUser(event.target.value);
  };

  function deleteUser(id) {
    axios
      .delete(`https://618101ae8bfae60017adfd5e.mockapi.io/users/${id}`)
      .then(function (response) {
        alert('Пользователь удален');
      })
      .catch(function (error) {
        console.log(error);
      });
  }

  return (
    <React.Fragment>
      <h2 className="header-creator">Программа тренировок</h2>
      <div className="select_block">
        <Box sx={{ maxWidth: 240 }}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Выбрать пользователя</InputLabel>
            <Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={user}
              label="Выбрать пользователя"
              onChange={handleChange}>
              <MenuItem value="default" selected>
                Выбрать пользователя
              </MenuItem>
              {users.map((val) => (
                <MenuItem className="user_name" key={val.id} value={val.id}>
                  {val.name}
                  <button
                    className={classNames('buttonDelete', val.id)}
                    onClick={() => deleteUser(val.id)}>
                    <img src={`Assets/icons/delete.svg`} alt="" />
                  </button>
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        </Box>
      </div>
      <Calculate userId={user} exercises={exercises} />
    </React.Fragment>
  );
}
