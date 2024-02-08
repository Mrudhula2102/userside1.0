import { TextField, Radio, RadioGroup, FormControlLabel, Button, Box } from '@mui/material';
import React, { useState } from 'react';
import './reg.css';
import axios from 'axios';

const Registerform = () => {
  const [newuser, setnewuser] = useState({
    "ename": '',
    "idd": '',
    "enumber": '',
    "equalification": '',
    "egender": '',
    "eexperience": '',
    "edob": '',
    "enationality": '',
    "eaddress": '',
    "pass" : '',
    "reenter" : ''
  });

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setnewuser((newuser) => ({ ...newuser, [name]: value }));
    console.log(newuser);
  };

  const handleGenderChange = (event) => {
    setnewuser((newuser) => ({ ...newuser, 'egender': event.target.value }));
  };
  const savedata =(event) =>{
    event.preventDefault();
    axios.post("http://localhost:4005/newuserreg",newuser)
    .then((response) =>{
    alert("Submitted")
    
    })
    .catch(err=>console.log(err))
    }
  return (
    <div className='container' align="center">
        <Box className='form-box'>
         <h1>New User Login</h1>

      Name:   <TextField label="Name" variant="filled" name="ename" value={newuser.ename} onChange={inputhandler} /><br /><br />
      Email ID: &nbsp;<TextField label="EmailID" variant="filled" name="idd" value={newuser.idd} onChange={inputhandler} /><br /><br />
      Contact Number:<TextField label="Contact Number" variant="filled" name="enumber" value={newuser.enumber} onChange={inputhandler} /><br /><br />
      Qualification<TextField label="Qualification" variant="filled" name="equalification" value={newuser.equalification} onChange={inputhandler} /><br /><br />

      <div className='gender-group' style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      
      Gender:<RadioGroup row name="egender" value={newuser.egender} onChange={handleGenderChange} >
        <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="transgender" control={<Radio />} label="Other" />
        </RadioGroup>
      </div>

     
      Experience:<TextField label="Experience" variant="filled" name="eexperience" value={newuser.eexperience} onChange={inputhandler} /><br /><br />
      Date Of Birth:<input type='date' name='dob' onChange={inputhandler} /><br></br><br/>
      Nationality:<TextField label="Nationality" variant="filled" name="enationality" value={newuser.enationality} onChange={inputhandler} /><br /><br />
      Address:<TextField label="Address" variant="filled" name="eaddress" value={newuser.eaddress} onChange={inputhandler} /><br /><br />
      Resume:<input type='file' onChange={inputhandler}/><br></br><br/>
      Create-Password:<TextField name='pass' label="Create Password" variant='filled' type='password'onChange={inputhandler}/><br></br>
      Re-Enter Password:<TextField name="reenter"label="Re-Enter PAssword" variant='filled' type='password' onChange={inputhandler}/><br></br><br/>
      <Button variant='contained' onClick={savedata}>Sign up</Button>
      </Box>
     
    </div>
  );
};

export default Registerform;