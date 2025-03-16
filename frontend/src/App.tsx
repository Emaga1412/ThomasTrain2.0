import { JSX, useState } from 'react';
import './App.scss';
import InputText from './controls/input-text/InputText';
import * as React from 'react';

function App(): JSX.Element {
  const [inputValue, setInputValue] = useState({ name: '' });
  const { name } = inputValue;

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setInputValue((prev) => ({
      ...prev,
      [name]: value,
    }));
    console.log(value);
  };

  return (
    <>
      <InputText type="text" value={name} placeholder="Product Name" label="Name" name="name" onChange={handleChange} />
    </>
  );
}

export default App;
