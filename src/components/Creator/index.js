import * as React from 'react';
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

import Calculate from '../Calcualte';

export default function Creator({ users,exercises }) {
  const [user, selectUser] = React.useState('default');

  const handleChange = (event) => {
    selectUser(event.target.value);
  };

  return (
    <React.Fragment>
      <h2>Создание программы тренеровок</h2>
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
              <MenuItem key={val.id} value={val.id}>
                {val.name}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </Box>
      <Calculate userId={user} exercises={exercises}/>
    </React.Fragment>
  );
}
