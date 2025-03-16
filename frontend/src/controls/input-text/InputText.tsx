import './InputText.scss';
import * as React from 'react';

interface InputTextProps<T> {
  value: T;
  label: string;
  name: string;
  placeholder: string;
  type: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

function InputText<T extends string | number | undefined>({ value, label, name, placeholder, type, onChange }: InputTextProps<T>) {
  return (
    <div className="input-control">
      {label && <label htmlFor="input-field">{label}</label>}
      <input type={type} value={value} name={name} className="form-control" placeholder={placeholder} onChange={onChange} />
    </div>
  );
}

export default InputText;
