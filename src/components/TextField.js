import React from 'react';
import { ErrorMessage, useField } from 'formik';

//individual text field start here
//import textfield to many components
export const TextField = ({ label, value, setValue, ...props }) => {
  const [field, meta] = useField(props);
  return (
    <div className="mb-2 ">
      <label htmlFor={field.name}>{label}</label>
      <input
        className={`form-control shadow  ${meta.touched && meta.error && 'is-invalid'}` }
        {...field} {...props}
        autoComplete="off" 
        // value={value}
        // onChange={e => setValue(e.target.value)}
      />
      <ErrorMessage component="div" name={field.name} className="error" />
    </div>
  )
}
