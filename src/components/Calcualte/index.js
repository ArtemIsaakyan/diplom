import React from 'react';
import axios from 'axios';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import './Calculate.scss';

export default function Calcualte({ userId }) {
  const [concluison, setConcluison] = React.useState('');
  const [recomendedCalories, setRecomendedCalories] = React.useState('');
  const [reciveExercises, setReciveExercises] = React.useState('');
  const [exercises, setExercises] = React.useState('');

  React.useEffect(() => {
    async function fetchData() {
      try {
        const [exercisesResponse] = await Promise.all([
          axios.get('https://618101ae8bfae60017adfd5e.mockapi.io/exercises'),
        ]);
        setExercises(exercisesResponse.data);
      } catch (error) {
        alert('Ошибка при запросе данных ;(');
        console.error(error);
      }
    }
    fetchData();
  }, []);

  function selectUser() {
    if (userId === 'default') {
      alert('Ошибка: вы не выбрали пользователя');
    } else {
      let requestUsers = axios.get(
        `https://618101ae8bfae60017adfd5e.mockapi.io/users?id=${userId}`,
      );
      requestUsers
        .then(function (response) {
          calculateIMT(response.data);
        })
        .catch(function (error) {
          console.log(error);
        });
    }
  }

  function calculateIMT(data) {
    // формула по расчету СТЕПЕНИ ОЖИРЕНИЯ
    let valueIMT = data[0].weight / Math.pow(data[0].height / 100, 2);
    for (let i = 0; i < exercises.length; i++) {
      console.log(exercises[i].IMT['Выраженный дефицит массы тела']);
    }

    // формула по расчету ПОТРЕБЛЕНИЯ КАЛОРИЙ
    if (data[0].sex === 'm') {
      let BMR = 88.36 + 13.4 * data[0].weight + 4.8 * data[0].height - 5.7 * data[0].age;
      if (data[0].physicalActivity === 'noActivity') {
        setRecomendedCalories(BMR * 1.2);
      } else if (data[0].physicalActivity === 'lowActivity') {
        setRecomendedCalories(BMR * 1.375);
      } else if (data[0].physicalActivity === 'mediumActivity') {
        setRecomendedCalories(BMR * 1.55);
      } else if (data[0].physicalActivity === 'highActivity') {
        setRecomendedCalories(BMR * 1.725);
      }
    } else {
      let BMR = 447.6 + 9.2 * data[0].weight + 3.1 * data[0].height - 4.3 * data[0].age;
      if (data[0].physicalActivity === 'noActivity') {
        setRecomendedCalories(BMR * 1.2);
      } else if (data[0].physicalActivity === 'lowActivity') {
        setRecomendedCalories(BMR * 1.375);
      } else if (data[0].physicalActivity === 'mediumActivity') {
        setRecomendedCalories(BMR * 1.55);
      } else if (data[0].physicalActivity === 'highActivity') {
        setRecomendedCalories(BMR * 1.725);
      }
    }

    if (valueIMT <= 16) {
      setConcluison('Выраженный дефицит массы тела');
      setReciveExercises(exercises.filter((item) => item.IMT['Выраженный дефицит массы тела']));
    } else if (valueIMT > 18.5 && valueIMT <= 25) {
      setConcluison('Норма');
      setReciveExercises(exercises.filter((item) => item.IMT['Норма']));
    } else if (valueIMT > 25 && valueIMT <= 30) {
      setConcluison('Избыточная масса тела (предожирение)');
      setReciveExercises(
        exercises.filter((item) => item.IMT === item.IMT['Избыточная масса тела (предожирение)']),
      );
    } else if (valueIMT > 30 && valueIMT <= 35) {
      setConcluison('Ожирение первой степени');
      setReciveExercises(exercises.filter((item) => item.IMT['Ожирение первой степени']));
    } else if (valueIMT > 35 && valueIMT <= 40) {
      setConcluison('Ожирение второй степени');
      setReciveExercises(exercises.filter((item) => item.IMT['Ожирение второй степени']));
    } else if (valueIMT > 40) {
      setConcluison('Ожирение третьей степени (морбидное)');
      setReciveExercises(
        exercises.filter((item) => item.IMT === item.IMT['Ожирение третьей степени (морбидное)']),
      );
    }
  }
  return (
    <React.Fragment>
      {concluison && <div>Расчёт индекса массы тела: {concluison} </div>}
      {recomendedCalories && (
        <div>Суточная норма калорий: {recomendedCalories.toFixed(0)} ккал</div>
      )}
      <Stack className="calcualteBtn" direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={() => selectUser()}>
          Создать
        </Button>
      </Stack>
      <h3>Тренировка №1</h3>
      {reciveExercises &&
        reciveExercises.map((item) =>
          item.body === 'Спина, бицепс' ? (
            <div key={item.id} className="exerciseBlock">
              <div className="nameOfExercise">{item.name}</div>
              <div>
                <div className="labelApproach">Подходы/повторения:</div> {item.approaches} подхода
                по {item.repetitions} повторений
              </div>
              <div>
                <img src={`Assets/images/${item.image}.gif`} />
              </div>
            </div>
          ) : null,
        )}
      <h3>Тренировка №2</h3>
      {reciveExercises &&
        reciveExercises.map((item) =>
          item.body === 'Грудь, трицепс' ? (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>
                Подходы/повторения: {item.approaches} подхода по {item.repetitions} повторений
              </div>
              <div>
                <img src={`Assets/images/${item.image}.gif`} />
              </div>
            </div>
          ) : null,
        )}
      <h3>Тренировка №3</h3>
      {reciveExercises &&
        reciveExercises.map((item) =>
          item.body === 'Ноги, плечи' ? (
            <div key={item.id}>
              <div>{item.name}</div>
              <div>
                Подходы/повторения: {item.approaches} подхода по {item.repetitions} повторений
              </div>
              <div>
                <img src={`Assets/images/${item.image}.gif`} />
              </div>
            </div>
          ) : null,
        )}
    </React.Fragment>
  );
}
