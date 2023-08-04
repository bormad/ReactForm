import React from 'react';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';


function App() {
  const [fields, setFields] = React.useState({
    firstname: '',
    lastname: '',
    email: '',
    password: ''
  });

  const handleClickClear = () => {
    setFields({
      firstname: '',
      lastname: '',
      email: '',
      password: ''
    })
  };

  const handleClickRegster = () => {

    if(!fields.email.includes('@')) {
      alert('Почта неверная')
      return;
    }

    if(fields.firstname.length < 3 || fields.lastname.length < 2) {
      alert('Имя или фамилия неверная')
      return;
    }

    if(fields.password.length < 5) {
      alert('Пароль слишком простой')
      return;
    }

    console.log(fields)
    handleClickClear()
  };

  const handleChangeInput = (event) => {
    const { name, value } = event.target;
    setFields({
      ...fields,
      [name] : value
    }) 
  }

  const isValid = !!fields.firstname && !!fields.lastname && !!fields.email && !!fields.password;

  return (
      <div className="App">
          <div className="row">
            <TextField 
              name='firstname'
              onChange={handleChangeInput} 
              value={fields.firstname} 
              label="Имя"
              fullWidth />
            <TextField 
              name='lastname'
              onChange={handleChangeInput}
              value={fields.lastname} 
              label="Фамилия" 
              fullWidth />
          </div>
          <div className="row">
            <TextField
              name='email'
              onChange={handleChangeInput}
              value={fields.email} 
              label="E-Mail" 
              fullWidth />
            <TextField
              name='password'
              onChange={handleChangeInput}
              value={fields.password} 
              type='password' 
              label="Пароль" 
              fullWidth />
          </div>
          <br/>
          <Button disabled={!isValid} onClick={handleClickRegster} variant="contained" color='primary'>Зарегистрироваться</Button>
          <Button
            onClick={handleClickClear} 
            variant="contained" 
            color='secondary'>Очистить</Button>
      </div>
  );
}

export default App;