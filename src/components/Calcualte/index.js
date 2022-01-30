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

  var firstCount = 2;
  var secondCount = 2;
  var thirdCount = 2;

  return (
    <React.Fragment>
      <Stack className="calcualteBtn" direction="row" spacing={2}>
        <Button variant="contained" color="success" onClick={() => selectUser()}>
          Создать
        </Button>
      </Stack>
      <div className="info_block">
        {concluison && <h3>Информация</h3>}

        {concluison && <div>Расчёт индекса массы тела: {concluison} </div>}
        {recomendedCalories && (
          <div>Суточная норма калорий: {recomendedCalories.toFixed(0)} ккал</div>
        )}
      </div>
      {concluison && <h3>Тренировка №1</h3>}
      {concluison && (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Название упражнения</th>
              <th>Подходы</th>
              <th>Повторения</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Разминка</td>
              <td>5-10 мин</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Работа на кардиотренажёре</td>
              <td>5 мин</td>
              <td></td>
            </tr>
            {reciveExercises &&
              reciveExercises.map((item) =>
                item.body === 'Спина, бицепс' ? (
                  <tr key={item.id}>
                    <td>{firstCount++}</td>
                    <td>{item.name}</td>
                    <td>{item.approaches}</td>
                    <td>{item.repetitions}</td>
                    <td>{/* <img src={`Assets/images/${item.image}.gif`} /> */}</td>
                  </tr>
                ) : null,
              )}
            <tr>
              <td></td>
              <td>Заминка</td>
              <td>2-5 мин</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}

      {concluison && <h3>Тренировка №2</h3>}
      {concluison && (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Название упражнения</th>
              <th>Подходы</th>
              <th>Повторения</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Разминка</td>
              <td>5-10 мин</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Работа на кардиотренажёре</td>
              <td>5 мин</td>
              <td></td>
            </tr>
            {reciveExercises &&
              reciveExercises.map((item) =>
                item.body === 'Грудь, трицепс' ? (
                  <tr key={item.id}>
                    <td>{secondCount++}</td>
                    <td>{item.name}</td>
                    <td>{item.approaches}</td>
                    <td>{item.repetitions}</td>
                  </tr>
                ) : null,
              )}
            <tr>
              <td></td>
              <td>Заминка</td>
              <td>2-5 мин</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
      {concluison && <h3>Тренировка №3</h3>}
      {concluison && (
        <table>
          <thead>
            <tr>
              <th>№</th>
              <th>Название упражнения</th>
              <th>Подходы</th>
              <th>Повторения</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td></td>
              <td>Разминка</td>
              <td>5-10 мин</td>
              <td></td>
            </tr>
            <tr>
              <td>1</td>
              <td>Работа на кардиотренажёре</td>
              <td>5 мин</td>
              <td></td>
            </tr>
            {reciveExercises &&
              reciveExercises.map((item) =>
                item.body === 'Ноги, плечи' ? (
                  <tr key={item.id}>
                    <td>{thirdCount++}</td>
                    <td>{item.name}</td>
                    <td>{item.approaches}</td>
                    <td>{item.repetitions}</td>
                  </tr>
                ) : null,
              )}
            <tr>
              <td></td>
              <td>Заминка</td>
              <td>2-5 мин</td>
              <td></td>
            </tr>
          </tbody>
        </table>
      )}
    </React.Fragment>
  );
}
