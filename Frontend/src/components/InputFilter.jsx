import React from 'react';

const isValidName = (fileName) => {
  const regex = /^[a-zA-Z0-9_-]+\.csv$/;

  if(!fileName) return true
  else return fileName && regex.test(fileName)
} 

const InputFilter = ({ fileName, setFileName }) => {
  return (
    <input
      type="text"
      placeholder="Filter by File Name"
 
      onChange={(e) => {
        const value = e.target.value
        if( isValidName(value)){
          setFileName(e.target.value)
        }
      }}
    />
  );
};

export default InputFilter;
