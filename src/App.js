import React from 'react';
import { Route, Routes, useNavigate} from 'react-router-dom'

import PersonalInfoForm from './forms/PersonalInfoForm';
import AddressForm from './forms/AddressForm';
import {Result} from './forms/Result';


function App() {
  const [formValues, setFormValues] = React.useState({});
  const navigate = useNavigate();

  const nextStep = (name) => {
    navigate(name)
  }

  console.log('Главная форма', formValues);

  return (
      <div className="App">
        <Routes>
          <Route path="/" element={<PersonalInfoForm setFormValues={setFormValues} nextStep={nextStep}/>} exact/>
          <Route path="/address" element={<AddressForm setFormValues={setFormValues} nextStep={nextStep} />} />
          <Route path="/result" element={<Result formValues={formValues} />} />
        </Routes>
      </div>
  );
}

export default App;