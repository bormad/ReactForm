import React from 'react';
import { Paper } from '@mui/material';

export const Result = ({ formValues }) => {
  return (
    <Paper style={{padding: 30}}>
        <h2>Итоговая информация</h2>
        <ul>
            <li>Имя: {formValues.firstName}</li>
            <li>Фамилия: {formValues.lastName}</li>
            <li>Email: {formValues.email}</li>
            <li>Пароль: {formValues.password}</li>
            <li>Город: {formValues.city}</li>
            <li>Улица: {formValues.street}</li>
            <li>Номер квартиры: {formValues.appartment}</li>
        </ul>
    </Paper>
  )
}
