import React from 'react';
import { Link } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import './Menu.scss';

export default function Menu() {
  return (
    <div className="menu">
      <div className="nav">
        <Box sx={{ '& button': { m: 1 } }}>
          <div>
            <Button size="medium" variant="outlined">
              <Link className="page_link" to="/info">
                Внести данные
              </Link>
            </Button>
            <Button size="medium" variant="outlined">
              <Link className="page_link" to="/calculate">
                Создание тренировки
              </Link>
            </Button>
          </div>
        </Box>
      </div>
    </div>
  );
}
