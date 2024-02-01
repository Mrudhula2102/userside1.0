import { Button, TextField } from '@mui/material';
import './grievance.css'
import React from 'react';
import Topbare from '../Topbare';

const GrievanceForm = (props) => {
  
  return (
  
    
    <div className='media'>
    <div className='body'>
    <form className='form'>
    <label className='label' htmlFor="grievance"> Your Grievance:</label> &nbsp;
    <TextField className='textarea' id="grievance" name="grievance" rows="4"/><br/><br/>
    <Button className='button' type="submit" variant='contained'>Submit</Button>
  </form>

  </div>
  </div>
  );
};

export default GrievanceForm;
