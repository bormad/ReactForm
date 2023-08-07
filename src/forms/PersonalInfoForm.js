import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const schema = yup.object({
    firstName: yup.string().required('Это обязательно поле!'),
    lastName: yup.string().required('Это обязательно поле!'),
    email: yup.string().email('Email введен неправильно').required('Это обязательно поле!'),
    password: yup.string().min(2, 'Пароль должен быть длиннее 5 символов!'),
  }).required();
  

const PersonalInfoForm = ( { nextStep, setFormValues } ) => {
    const  { register, handleSubmit, formState: { errors }, reset } = useForm({
        resolver: yupResolver(schema),
      });
    
      const onSubmit = data => {
        setFormValues(data);
        nextStep('/address')
      };

  return (
    <div>
        <div className="row">
            <TextField {...register("firstName")} 
                name='firstName' 
                label="Имя" 
                helperText={errors.firstName && errors.firstName.message} 
                error={!!errors.firstName} 
                fullWidth />
            <TextField {...register("lastName")} 
                helperText={errors.lastName && errors.lastName.message} 
                error={!!errors.lastName} 
                name='lastName' 
                label="Фамилия" 
                fullWidth />
        </div>
        <div className="row">
        <TextField 
                {...register("email")} 
                helperText={errors.email && errors.email.message} 
                error={!!errors.password}
                name='email' 
                label="E-Mail" 
                fullWidth />
        <TextField 
                {...register("password")} 
                helperText={errors.password && errors.password.message} 
                error={!!errors.password}
                name='password' 
                type='password' 
                label="Пароль" 
                fullWidth />
        </div>
        <br/>
        <div className="row buttons">
            <Button onClick={() => {
                reset(formValues => ({
                ...formValues,
                lastName: '',
                firstName: '',
                email: '',
                password: ''
                }))
            }} variant="contained" color='secondary'>Очистить</Button>
            <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">Далее</Button>
        </div>
    </div>
  )
}

export default PersonalInfoForm