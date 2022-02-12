import React from 'react';
import * as Mui from '@material-ui/core';
import Button from '@mui/material/Button';
import Stack from '@mui/material/Stack';
import axios from 'axios';

import './Builder.scss';

export default function Builder() {
  const [name, setName] = React.useState('');
  const [sex, setSex] = React.useState('');
  const [goal, setGoal] = React.useState('');
  const [days, setDays] = React.useState('');
  const [opportunity, setOpportunity] = React.useState('');
  const [age, setAge] = React.useState('');
  const [height, setHeight] = React.useState('');
  const [weight, setWeight] = React.useState('');
  const [physicalActivity, setPhysicalActivity] = React.useState('');

  const handleChangeName = (event) => {
    setName(event.target.value);
  };
  const handleChangeSex = (event) => {
    setSex(event.target.value);
  };
  const handleChangeGoal = (event) => {
    setGoal(event.target.value);
  };
  const handleChangeAge = (event) => {
    setAge(event.target.value);
  };
  const handleChangeHeight = (event) => {
    setHeight(event.target.value);
  };
  const handleChangeWeight = (event) => {
    setWeight(event.target.value);
  };
  const handleChangeActivity = (event) => {
    setPhysicalActivity(event.target.value);
  };
  const handleChangeDays = (event) => {
    setDays(event.target.value);
  };
  const handleChangeOpportunity = (event) => {
    setOpportunity(event.target.value);
  };

  function save() {
    if (name && age && goal && days && height && weight && sex && physicalActivity) {
      axios
        .post('https://618101ae8bfae60017adfd5e.mockapi.io/users', {
          name: name,
          sex: sex,
          goal: goal,
          days: days,
          age: age,
          height: height,
          weight: weight,
          opportunity: opportunity,
          physicalActivity: physicalActivity,
        })
        .then(function (response) {
          console.log(response);
          alert('Данные сохранились');
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      alert('Не все поля заполнены!');
    }
  }

  return (
    <React.Fragment>
      <h2 className="header_wrapper">Введите данные</h2>
      <div className="builder_wrapper">
        <Mui.Box component="form" noValidate autoComplete="off" className="name_field">
          <Mui.TextField
            id="standard-basic"
            label="Название тренировки"
            variant="standard"
            value={name}
            onChange={handleChangeName}
          />
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="sex">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">Пол</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={sex}
              label="Пол"
              onChange={handleChangeSex}>
              <Mui.MenuItem value={'m'}>М</Mui.MenuItem>
              <Mui.MenuItem value={'w'}>Ж</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="goal">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">Цель</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={goal}
              label="Цель"
              onChange={handleChangeGoal}>
              <Mui.MenuItem value={'loseWeight'}>Похудеть</Mui.MenuItem>
              <Mui.MenuItem value={'gainWeight'}>Набор мышечной массы</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="numberOfDays">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">
              Желаемое количество тренировок
            </Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={days}
              label="Цель"
              onChange={handleChangeDays}>
              <Mui.MenuItem value={'twoDays'}>2 дня в неделю</Mui.MenuItem>
              <Mui.MenuItem value={'threeDays'}>3 дня в неделю</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="opportunity">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">Способ проведения занятий</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={opportunity}
              label="Способ проведения занятий"
              onChange={handleChangeOpportunity}>
              <Mui.MenuItem value={'home'}>В домашних условиях</Mui.MenuItem>
              <Mui.MenuItem value={'gym'}>В спортивном зале (с тренажёрами)</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="age">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">Возраст</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={age}
              label="Возраст"
              onChange={handleChangeAge}>
              <Mui.MenuItem value={18}>18</Mui.MenuItem>
              <Mui.MenuItem value={19}>19</Mui.MenuItem>
              <Mui.MenuItem value={20}>20</Mui.MenuItem>
              <Mui.MenuItem value={21}>21</Mui.MenuItem>
              <Mui.MenuItem value={22}>22</Mui.MenuItem>
              <Mui.MenuItem value={23}>23</Mui.MenuItem>
              <Mui.MenuItem value={24}>24</Mui.MenuItem>
              <Mui.MenuItem value={25}>25</Mui.MenuItem>
              <Mui.MenuItem value={26}>26</Mui.MenuItem>
              <Mui.MenuItem value={27}>27</Mui.MenuItem>
              <Mui.MenuItem value={28}>28</Mui.MenuItem>
              <Mui.MenuItem value={29}>29</Mui.MenuItem>
              <Mui.MenuItem value={30}>30</Mui.MenuItem>
              <Mui.MenuItem value={31}>31</Mui.MenuItem>
              <Mui.MenuItem value={32}>32</Mui.MenuItem>
              <Mui.MenuItem value={33}>33</Mui.MenuItem>
              <Mui.MenuItem value={34}>34</Mui.MenuItem>
              <Mui.MenuItem value={35}>35</Mui.MenuItem>
              <Mui.MenuItem value={36}>36</Mui.MenuItem>
              <Mui.MenuItem value={37}>37</Mui.MenuItem>
              <Mui.MenuItem value={38}>38</Mui.MenuItem>
              <Mui.MenuItem value={39}>39</Mui.MenuItem>
              <Mui.MenuItem value={40}>40</Mui.MenuItem>
              <Mui.MenuItem value={41}>41</Mui.MenuItem>
              <Mui.MenuItem value={42}>42</Mui.MenuItem>
              <Mui.MenuItem value={43}>43</Mui.MenuItem>
              <Mui.MenuItem value={44}>44</Mui.MenuItem>
              <Mui.MenuItem value={45}>45</Mui.MenuItem>
              <Mui.MenuItem value={46}>46</Mui.MenuItem>
              <Mui.MenuItem value={47}>47</Mui.MenuItem>
              <Mui.MenuItem value={48}>48</Mui.MenuItem>
              <Mui.MenuItem value={49}>49</Mui.MenuItem>
              <Mui.MenuItem value={50}>50</Mui.MenuItem>
              <Mui.MenuItem value={51}>51</Mui.MenuItem>
              <Mui.MenuItem value={52}>52</Mui.MenuItem>
              <Mui.MenuItem value={53}>53</Mui.MenuItem>
              <Mui.MenuItem value={54}>54</Mui.MenuItem>
              <Mui.MenuItem value={55}>55</Mui.MenuItem>
              <Mui.MenuItem value={56}>56</Mui.MenuItem>
              <Mui.MenuItem value={57}>57</Mui.MenuItem>
              <Mui.MenuItem value={58}>58</Mui.MenuItem>
              <Mui.MenuItem value={59}>59</Mui.MenuItem>
              <Mui.MenuItem value={60}>60</Mui.MenuItem>
              <Mui.MenuItem value={51}>61</Mui.MenuItem>
              <Mui.MenuItem value={52}>62</Mui.MenuItem>
              <Mui.MenuItem value={53}>63</Mui.MenuItem>
              <Mui.MenuItem value={54}>64</Mui.MenuItem>
              <Mui.MenuItem value={55}>65</Mui.MenuItem>
              <Mui.MenuItem value={56}>66</Mui.MenuItem>
              <Mui.MenuItem value={57}>67</Mui.MenuItem>
              <Mui.MenuItem value={58}>68</Mui.MenuItem>
              <Mui.MenuItem value={59}>69</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 200 }} className="physical">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">Физическая активность</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={physicalActivity}
              label="Физическая активность"
              onChange={handleChangeActivity}>
              <Mui.MenuItem value={'noActivity'}>Нет физических нагрузок</Mui.MenuItem>
              <Mui.MenuItem value={'lowActivity'}>
                Небольшие пробежки или делаете легкую гимнастику 1–3 раза в неделю
              </Mui.MenuItem>
              <Mui.MenuItem value={'mediumActivity'}>
                Занимаетесь спортом со средними нагрузками 3–5 раз в неделю
              </Mui.MenuItem>
              <Mui.MenuItem value={'highActivity'}>
                Полноценно тренируетесь 6–7 раз в неделю
              </Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="height">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">Рост</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={height}
              label="Рост"
              onChange={handleChangeHeight}>
              <Mui.MenuItem value={130}>130см</Mui.MenuItem>
              <Mui.MenuItem value={131}>131см</Mui.MenuItem>
              <Mui.MenuItem value={132}>132см</Mui.MenuItem>
              <Mui.MenuItem value={133}>133см</Mui.MenuItem>
              <Mui.MenuItem value={134}>134см</Mui.MenuItem>
              <Mui.MenuItem value={135}>135см</Mui.MenuItem>
              <Mui.MenuItem value={136}>136см</Mui.MenuItem>
              <Mui.MenuItem value={137}>137см</Mui.MenuItem>
              <Mui.MenuItem value={138}>138см</Mui.MenuItem>
              <Mui.MenuItem value={139}>139см</Mui.MenuItem>
              <Mui.MenuItem value={140}>140см</Mui.MenuItem>
              <Mui.MenuItem value={141}>141см</Mui.MenuItem>
              <Mui.MenuItem value={142}>142см</Mui.MenuItem>
              <Mui.MenuItem value={143}>143см</Mui.MenuItem>
              <Mui.MenuItem value={144}>144см</Mui.MenuItem>
              <Mui.MenuItem value={145}>145см</Mui.MenuItem>
              <Mui.MenuItem value={146}>146см</Mui.MenuItem>
              <Mui.MenuItem value={147}>147см</Mui.MenuItem>
              <Mui.MenuItem value={148}>148см</Mui.MenuItem>
              <Mui.MenuItem value={149}>149см</Mui.MenuItem>
              <Mui.MenuItem value={150}>150см</Mui.MenuItem>
              <Mui.MenuItem value={151}>151см</Mui.MenuItem>
              <Mui.MenuItem value={152}>152см</Mui.MenuItem>
              <Mui.MenuItem value={153}>153см</Mui.MenuItem>
              <Mui.MenuItem value={154}>154см</Mui.MenuItem>
              <Mui.MenuItem value={155}>155см</Mui.MenuItem>
              <Mui.MenuItem value={156}>156см</Mui.MenuItem>
              <Mui.MenuItem value={157}>157см</Mui.MenuItem>
              <Mui.MenuItem value={158}>158см</Mui.MenuItem>
              <Mui.MenuItem value={159}>159см</Mui.MenuItem>
              <Mui.MenuItem value={160}>160см</Mui.MenuItem>
              <Mui.MenuItem value={161}>161см</Mui.MenuItem>
              <Mui.MenuItem value={162}>162см</Mui.MenuItem>
              <Mui.MenuItem value={163}>163см</Mui.MenuItem>
              <Mui.MenuItem value={164}>164см</Mui.MenuItem>
              <Mui.MenuItem value={165}>165см</Mui.MenuItem>
              <Mui.MenuItem value={166}>166см</Mui.MenuItem>
              <Mui.MenuItem value={167}>167см</Mui.MenuItem>
              <Mui.MenuItem value={168}>168см</Mui.MenuItem>
              <Mui.MenuItem value={169}>169см</Mui.MenuItem>
              <Mui.MenuItem value={170}>170см</Mui.MenuItem>
              <Mui.MenuItem value={171}>171см</Mui.MenuItem>
              <Mui.MenuItem value={172}>172см</Mui.MenuItem>
              <Mui.MenuItem value={173}>173см</Mui.MenuItem>
              <Mui.MenuItem value={174}>174см</Mui.MenuItem>
              <Mui.MenuItem value={175}>175см</Mui.MenuItem>
              <Mui.MenuItem value={176}>176см</Mui.MenuItem>
              <Mui.MenuItem value={177}>177см</Mui.MenuItem>
              <Mui.MenuItem value={178}>178см</Mui.MenuItem>
              <Mui.MenuItem value={179}>179см</Mui.MenuItem>
              <Mui.MenuItem value={180}>180см</Mui.MenuItem>
              <Mui.MenuItem value={181}>181см</Mui.MenuItem>
              <Mui.MenuItem value={182}>182см</Mui.MenuItem>
              <Mui.MenuItem value={183}>183см</Mui.MenuItem>
              <Mui.MenuItem value={184}>184см</Mui.MenuItem>
              <Mui.MenuItem value={185}>185см</Mui.MenuItem>
              <Mui.MenuItem value={186}>186см</Mui.MenuItem>
              <Mui.MenuItem value={187}>187см</Mui.MenuItem>
              <Mui.MenuItem value={188}>188см</Mui.MenuItem>
              <Mui.MenuItem value={189}>189см</Mui.MenuItem>
              <Mui.MenuItem value={190}>190см</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
        <Mui.Box sx={{ minWidth: 120 }} className="weight">
          <Mui.FormControl fullWidth>
            <Mui.InputLabel id="demo-simple-select-label">Вес</Mui.InputLabel>
            <Mui.Select
              labelId="demo-simple-select-label"
              id="demo-simple-select"
              value={weight}
              label="Вес"
              onChange={handleChangeWeight}>
              <Mui.MenuItem value={40}>40кг</Mui.MenuItem>
              <Mui.MenuItem value={41}>41кг</Mui.MenuItem>
              <Mui.MenuItem value={42}>42кг</Mui.MenuItem>
              <Mui.MenuItem value={43}>43кг</Mui.MenuItem>
              <Mui.MenuItem value={44}>44кг</Mui.MenuItem>
              <Mui.MenuItem value={45}>45кг</Mui.MenuItem>
              <Mui.MenuItem value={46}>46кг</Mui.MenuItem>
              <Mui.MenuItem value={47}>47кг</Mui.MenuItem>
              <Mui.MenuItem value={48}>48кг</Mui.MenuItem>
              <Mui.MenuItem value={49}>49кг</Mui.MenuItem>
              <Mui.MenuItem value={50}>50кг</Mui.MenuItem>
              <Mui.MenuItem value={51}>51кг</Mui.MenuItem>
              <Mui.MenuItem value={52}>52кг</Mui.MenuItem>
              <Mui.MenuItem value={53}>53кг</Mui.MenuItem>
              <Mui.MenuItem value={54}>54кг</Mui.MenuItem>
              <Mui.MenuItem value={55}>55кг</Mui.MenuItem>
              <Mui.MenuItem value={56}>56кг</Mui.MenuItem>
              <Mui.MenuItem value={57}>57кг</Mui.MenuItem>
              <Mui.MenuItem value={58}>58кг</Mui.MenuItem>
              <Mui.MenuItem value={59}>59кг</Mui.MenuItem>
              <Mui.MenuItem value={60}>60кг</Mui.MenuItem>
              <Mui.MenuItem value={61}>61кг</Mui.MenuItem>
              <Mui.MenuItem value={62}>62кг</Mui.MenuItem>
              <Mui.MenuItem value={63}>63кг</Mui.MenuItem>
              <Mui.MenuItem value={64}>64кг</Mui.MenuItem>
              <Mui.MenuItem value={65}>65кг</Mui.MenuItem>
              <Mui.MenuItem value={66}>66кг</Mui.MenuItem>
              <Mui.MenuItem value={67}>67кг</Mui.MenuItem>
              <Mui.MenuItem value={68}>68кг</Mui.MenuItem>
              <Mui.MenuItem value={69}>69кг</Mui.MenuItem>
              <Mui.MenuItem value={70}>70кг</Mui.MenuItem>
              <Mui.MenuItem value={71}>71кг</Mui.MenuItem>
              <Mui.MenuItem value={72}>72кг</Mui.MenuItem>
              <Mui.MenuItem value={73}>73кг</Mui.MenuItem>
              <Mui.MenuItem value={74}>74кг</Mui.MenuItem>
              <Mui.MenuItem value={75}>75кг</Mui.MenuItem>
              <Mui.MenuItem value={76}>76кг</Mui.MenuItem>
              <Mui.MenuItem value={77}>77кг</Mui.MenuItem>
              <Mui.MenuItem value={78}>78кг</Mui.MenuItem>
              <Mui.MenuItem value={79}>79кг</Mui.MenuItem>
              <Mui.MenuItem value={80}>80кг</Mui.MenuItem>
              <Mui.MenuItem value={81}>81кг</Mui.MenuItem>
              <Mui.MenuItem value={82}>82кг</Mui.MenuItem>
              <Mui.MenuItem value={83}>83кг</Mui.MenuItem>
              <Mui.MenuItem value={84}>84кг</Mui.MenuItem>
              <Mui.MenuItem value={85}>85кг</Mui.MenuItem>
              <Mui.MenuItem value={86}>86кг</Mui.MenuItem>
              <Mui.MenuItem value={87}>87кг</Mui.MenuItem>
              <Mui.MenuItem value={88}>88кг</Mui.MenuItem>
              <Mui.MenuItem value={89}>89кг</Mui.MenuItem>
              <Mui.MenuItem value={90}>90кг</Mui.MenuItem>
              <Mui.MenuItem value={91}>91кг</Mui.MenuItem>
              <Mui.MenuItem value={92}>92кг</Mui.MenuItem>
              <Mui.MenuItem value={93}>93кг</Mui.MenuItem>
              <Mui.MenuItem value={94}>94кг</Mui.MenuItem>
              <Mui.MenuItem value={95}>95кг</Mui.MenuItem>
              <Mui.MenuItem value={96}>96кг</Mui.MenuItem>
              <Mui.MenuItem value={97}>97кг</Mui.MenuItem>
              <Mui.MenuItem value={98}>98кг</Mui.MenuItem>
              <Mui.MenuItem value={99}>99кг</Mui.MenuItem>
              <Mui.MenuItem value={100}>100кг</Mui.MenuItem>
              <Mui.MenuItem value={101}>101кг</Mui.MenuItem>
              <Mui.MenuItem value={102}>102кг</Mui.MenuItem>
              <Mui.MenuItem value={103}>103кг</Mui.MenuItem>
              <Mui.MenuItem value={104}>104кг</Mui.MenuItem>
              <Mui.MenuItem value={105}>105кг</Mui.MenuItem>
              <Mui.MenuItem value={106}>106кг</Mui.MenuItem>
              <Mui.MenuItem value={107}>107кг</Mui.MenuItem>
              <Mui.MenuItem value={108}>108кг</Mui.MenuItem>
              <Mui.MenuItem value={109}>109кг</Mui.MenuItem>
              <Mui.MenuItem value={110}>110кг</Mui.MenuItem>
              <Mui.MenuItem value={111}>111кг</Mui.MenuItem>
              <Mui.MenuItem value={112}>112кг</Mui.MenuItem>
              <Mui.MenuItem value={113}>113кг</Mui.MenuItem>
              <Mui.MenuItem value={114}>114кг</Mui.MenuItem>
              <Mui.MenuItem value={115}>115кг</Mui.MenuItem>
              <Mui.MenuItem value={116}>116кг</Mui.MenuItem>
              <Mui.MenuItem value={117}>117кг</Mui.MenuItem>
              <Mui.MenuItem value={118}>118кг</Mui.MenuItem>
              <Mui.MenuItem value={119}>119кг</Mui.MenuItem>
              <Mui.MenuItem value={120}>120кг</Mui.MenuItem>
            </Mui.Select>
          </Mui.FormControl>
        </Mui.Box>
      </div>
      <Stack className="saveBtn" direction="row" spacing={2}>
        <Button variant="contained" onClick={() => save()}>
          Сохранить
        </Button>
      </Stack>
    </React.Fragment>
  );
}
