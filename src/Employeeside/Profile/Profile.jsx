// EmployeeProfile.jsx
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {  Button } from '@mui/material';
import './profile.css';
import Topbare from '../Topbare';



const Profile = (props) => {
  const [employeeData, setEmployeeData] = useState({
    employeid: '',
    fullName: '',
    email: '',
    phone: '',
    address: '',
    department: '',
    position: '',
    manager: '',
  });
  
  const [editing, setEditing] = useState(false);
  


  useEffect(() => {
    // Fetch employee data from the backend when the component mounts
    fetchEmployeeData();
  }, []);

  const fetchEmployeeData = async () => {
    try {
      // Make a GET request to your backend API to fetch employee data
      const response = await axios.get('/employeeprofile');
      setEmployeeData(response.data);
    } catch (error) {
      console.error('Error fetching employee data:', error);
    }
  };

  const handleEditToggle = () => {
    setEditing(!editing);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setEmployeeData({ ...employeeData, [name]: value });
  };

  const handleSave = async () => {
    try {
        
      // Make a PUT request to update employee data in the backend
      await axios.put('http://localhost:4005/employeeprofile', employeeData);
      setEditing(false);
      alert('Profile updated successfully!');
    } catch (error) {
      console.error('Error updating employee profile:', error);
      alert('Failed to update profile. Please try again later.');
    }
  };
 

  return (
    <div>
      <Topbare xxx={props.checkLogout}/>
    <div className="employee-profile-container">
    <div className="employee-profile-box">

      <h1 className='photoicon'>My Profile</h1>
      <div className="profile-details">
      
        <div>
          <label>Employee ID:</label>
          {editing ? (
            <input
              type="text"
              name="employeid"
              value={employeeData.employeid}
              onChange={handleInputChange}
            />
          ) : (
          <span>{employeeData.employeid}</span>
          )}
        </div>
        <div>
          <label>Full Name:</label>
          {editing ? (
            <input
              type="text"
              name="fullName"
              value={employeeData.fullName}
              onChange={handleInputChange}
            />
          ) : (
             <span>{employeeData.fullName}</span>)
        }
        </div>
        <div>
        <label>Email id:</label>
          {editing ? (
            <input
              type="text"
              name="email"
              value={employeeData.email}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.email}</span>
          )}
          </div>
          
          <div>
        <label>Phone no:</label>
          {editing ? (
            <input
              type="number"
              name="phone"
              value={employeeData.phone}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.phone}</span>
          )}
          </div>
          <div>
        <label>Address:</label>
          {editing ? (
            <textarea
              type="text"
              name="address"
              value={employeeData.address}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.address}</span>
          )}
          </div>
          <div>
        <label>Department:</label>
          {editing ? (
            <input
              type="text"
              name="department"
              value={employeeData.department}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.department}</span>
          )}
          </div>
          <div>
        <label>Position:</label>
          {editing ? (
            <input
              type="text"
              name="position"
              value={employeeData.position}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.position}</span>
          )}
          </div>
          <div>
        <label>Manager:</label>
          {editing ? (
            <input
              type="text"
              name="manager"
              value={employeeData.manager}
              onChange={handleInputChange}
            />
          ) : (
            <span>{employeeData.manager}</span>
          )}
          </div>
      </div>
      
      <div className="button-container">
        {editing ? (
          <>
            <Button onClick={handleSave}>Save</Button>
            <Button onClick={handleEditToggle}>Cancel</Button>
          </>
        ) : (
          <Button onClick={handleEditToggle}>Edit</Button>
        )}
      </div>
    </div>
    </div>
    </div>
  );
};

export default Profile;
