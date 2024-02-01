import { TextField, Radio, RadioGroup, FormControlLabel, Button, Box } from '@mui/material';
import React, { useState } from 'react';

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
  });

  const inputhandler = (event) => {
    const { name, value } = event.target;
    setnewuser((newuser) => ({ ...newuser, [name]: value }));
    console.log(newuser);
  };

  const handleGenderChange = (event) => {
    setnewuser((newuser) => ({ ...newuser, 'egender': event.target.value }));
  };

  return (
    <div className='div' align="center">
        <Box>
        
      <h1>New User Login</h1>

      Name:<TextField label="Name" variant="filled" name="ename" value={newuser.ename} onChange={inputhandler} /><br /><br />
      Email ID:<TextField label="EmailID" variant="filled" name="idd" value={newuser.idd} onChange={inputhandler} /><br /><br />
      Contact Number:<TextField label="Contact Number" variant="filled" name="enumber" value={newuser.enumber} onChange={inputhandler} /><br /><br />
      Qualification<TextField label="Qualification" variant="filled" name="equalification" value={newuser.equalification} onChange={inputhandler} /><br /><br />

      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <span>Gender:</span>
 <RadioGroup row name="egender" value={newuser.egender} onChange={handleGenderChange}>
        <FormControlLabel value="male" control={<Radio />} label="Male" />
          <FormControlLabel value="female" control={<Radio />} label="Female" />
          <FormControlLabel value="transgender" control={<Radio />} label="Other" />
        </RadioGroup>
      </div>

     
      Experience:<TextField label="Experience" variant="filled" name="eexperience" value={newuser.eexperience} onChange={inputhandler} /><br /><br />
      Date Of Birth:<input type='date' name='dob' onChange={inputhandler} /><br></br>
      Nationality:<TextField label="Nationality" variant="filled" name="enationality" value={newuser.enationality} onChange={inputhandler} /><br /><br />
      Address:<TextField label="Address" variant="filled" name="eaddress" value={newuser.eaddress} onChange={inputhandler} /><br /><br />
      Resume:<input type='file'/><br></br><br/>
      Create-Password:<TextField label="Create PAssword" variant='filled' type='password'/><br></br>
      Re-Enter Password:<TextField label="Re-Enter PAssword" variant='filled' type='password'/><br></br><br/>
      <Button variant='contained'>Sign up</Button>
      
      </Box>

    </div>
  );
};

export default Registerform;