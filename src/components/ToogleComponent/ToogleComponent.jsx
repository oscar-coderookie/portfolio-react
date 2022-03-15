import React from 'react';
import Switch from "react-switch";

const ToogleComponent = ({onChange, value}) => {
  return (
    <Switch 
    onColor="#939393"
    offColor='#F1F1F1'
    checkedIcon={true} 
    uncheckedIcon={false} 
    checked={value} 
    className='toogle-component' 
    onChange={onChange}/>
  )
}

export default ToogleComponent