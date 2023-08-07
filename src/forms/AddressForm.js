import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const schema = yup.object({
    city: yup.string().required('Это обязательно поле!'),
    street: yup.string().required('Это обязательно поле!'),
    appartment: yup.number().positive().integer().required('Это обязательно поле!'),
  }).required();
  

const AddressForm = ({ nextStep, setFormValues }) => {
    const  { register, handleSubmit, formState: { errors }, reset } = useForm({
        defaultValues: {
            city: '',
            street: '',
            appartment: null
        },
        resolver: yupResolver(schema),
      });
    
      const onSubmit = data => {
        setFormValues(prev => ({
            ...prev,
            ...data
        }));
        nextStep('/result')
      };

  return (
    <div>
        <TextField {...register("city")} 
            name='city' 
            label="Город" 
            helperText={errors.city && errors.city.message} 
            error={!!errors.city} 
            fullWidth />
        <TextField {...register("street")} 
                name='street' 
                label="Улица" 
                helperText={errors.street && errors.street.message} 
                error={!!errors.street} 
                fullWidth />
        <TextField {...register("appartment")} 
                name='appartment' 
                label="Номер квартиры" 
                helperText={errors.appartment && errors.appartment.message} 
                error={!!errors.appartment} 
                fullWidth />
        
        <br/>
        <br/>
        <div className="row buttons">
            <Button onClick={() => {
                reset(formValues => ({
                ...formValues,
                city: '',
                street: '',
                appartment: null
                }))
            }} variant="contained" color='secondary'>Очистить</Button>
            <Button onClick={handleSubmit(onSubmit)} variant="contained" color="primary">Далее</Button>
        </div>
    </div>
  )
}

export default AddressForm