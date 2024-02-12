import React, { useState } from 'react';
import { RadioGroup, FormControlLabel, Radio, Button, Alert } from '@mui/material';
import './aptitude.css'; 

const Aptitude= () => {
  const [answers, setAnswers] = useState({
    question1: '',
    question2: '',
    question3: '',
    question4: '',
    question5: '',
    question6: '',
    question7: '',
    question8: '',
    question9: '',
    question10: ''
    // Add more questions as needed
  });

  const handleAnswerChange = (question, answer) => {
    setAnswers((prevAnswers) => ({
      ...prevAnswers,
      [question]: answer,
    }));
  };

  const handleSubmit = () => {
    // Perform actions with the collected answers (e.g., send to server, calculate results)
    console.log('Submitted Answers:', answers);
    alert('Successfully Submitted')
    // Add your logic here for handling the submitted answers
  };

  return (
      <div className="aptitude-test-container">
      <h1>Aptitude Test</h1>
      
      <div className="question">
        <p><b>Question 1:</b> What is the value of \(\sqrt{144}\)?</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
          <RadioGroup row name="question1" value={answers.question1} onChange={(e) => handleAnswerChange('question1', e.target.value)}>
            <FormControlLabel value="12" control={<Radio />} label="12" />
            <FormControlLabel value="10" control={<Radio />} label="10" />
            <FormControlLabel value="14" control={<Radio />} label="14" />
            <FormControlLabel value="16" control={<Radio />} label="16" />
          </RadioGroup>
        </div>
      </div>

      <div className="question">
        {/* Repeat the structure for more questions */}
        {/* Example Question 2 */}
        <p><b>Question 2:</b> if a Trangle has angles measuring 45 degrees, and 90 degrees, what type of trangle is it?</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question2" value={answers.question2} onChange={(e) => handleAnswerChange('question2', e.target.value)}>
          <FormControlLabel value="Equilateral" control={<Radio />} label="Equilateral" />
          <FormControlLabel value="isosceles" control={<Radio />} label="isosceles" />
          <FormControlLabel value="scalene" control={<Radio />} label="scalene" />
          <FormControlLabel value="Right-angled" control={<Radio />} label="Right-angled" />
        </RadioGroup>
        </div>
       </div>
       <p><b>Question 3:</b> if the radius of a circle is 7cm, What is its Circumference? (use\(\pi\) as approximalety 3.14) </p>
       <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question3" value={answers.question3} onChange={(e) => handleAnswerChange('question3', e.target.value)}>
          <FormControlLabel value="14cm" control={<Radio />} label="14cm" />
          <FormControlLabel value="21cm" control={<Radio />} label="21cm" />
          <FormControlLabel value="44cm" control={<Radio />} label="44cm" />
          <FormControlLabel value="49cm" control={<Radio />} label="49cm" />
        </RadioGroup>
        </div>
        <p><b>Question 4:</b> if no dogs can fly and Rover is a dog,then;</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question4" value={answers.question4} onChange={(e) => handleAnswerChange('question4', e.target.value)}>
          <FormControlLabel value="Rover can fly" control={<Radio />} label="Rover can fly" />
          <FormControlLabel value="Rover cannot fly" control={<Radio />} label="Rover cannot fly" />
          <FormControlLabel value="Some dogs can fly" control={<Radio />} label="Some dogs can fly" />
          <FormControlLabel value="None of the above" control={<Radio />} label="None of the above" />
        </RadioGroup>
        </div>
        <p><b>Question 5:</b> if every cat can climb trees and Fluffy is cat,then;</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question5" value={answers.question5} onChange={(e) => handleAnswerChange('question5', e.target.value)}>
          <FormControlLabel value="Fluffy can climb trees" control={<Radio />} label="Fluffy can climb trees" />
          <FormControlLabel value="Fluffy cannot climb trees" control={<Radio />} label="Fluffy cannot climb trees" />
          <FormControlLabel value="All cats can climb trees" control={<Radio />} label="All cats can climb trees" />
          <FormControlLabel value="None of the above" control={<Radio />} label="None of the above" />
        </RadioGroup>
        </div>
        <p><b>Question 6:</b> All Trangle have three sides, and this shapes has three sides therefor;</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question6" value={answers.question6} onChange={(e) => handleAnswerChange('question6', e.target.value)}>
          <FormControlLabel value="This shape is a trangle " control={<Radio />} label="This shape is a trangle" />
          <FormControlLabel value="This shape is not a trangle" control={<Radio />} label="This shape is not a trangle" />
          <FormControlLabel value="All shapes with three sides are trangle" control={<Radio />} label="All shapes with three sides are trangle" />
          <FormControlLabel value="None of the above" control={<Radio />} label="None of the above" />
        </RadioGroup>
        </div>
        <p><b>Question 7:</b> Which Programming language is commonly used for developing android apps?</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question7" value={answers.question7} onChange={(e) => handleAnswerChange('question7', e.target.value)}>
          <FormControlLabel value="Java" control={<Radio />} label="Java" />
          <FormControlLabel value="Python" control={<Radio />} label="Python" />
          <FormControlLabel value="C++" control={<Radio />} label="C++" />
          <FormControlLabel value="Ruby" control={<Radio />} label="Ruby" />
        </RadioGroup>
        </div>
        <p><b>Question 8:</b> Which data structure follows LIFO?</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question8" value={answers.question8} onChange={(e) => handleAnswerChange('question8', e.target.value)}>
          <FormControlLabel value="Queue" control={<Radio />} label="Queue" />
          <FormControlLabel value="Stack" control={<Radio />} label="Stack" />
          <FormControlLabel value="Array" control={<Radio />} label="Array" />
          <FormControlLabel value="Linked List" control={<Radio />} label="Linked List" />
        </RadioGroup>
        </div>
        <p><b>Question 9:</b>In Python , Which function is used to obtain the length of a List?</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question9" value={answers.question9} onChange={(e) => handleAnswerChange('question9', e.target.value)}>
          <FormControlLabel value="'length()'" control={<Radio />} label="'length()'" />
          <FormControlLabel value="'size()'" control={<Radio />} label="'size()'" />
          <FormControlLabel value="'len()'" control={<Radio />} label="'len()'" />
          <FormControlLabel value="'count()'" control={<Radio />} label="'count()'" />
        </RadioGroup>
        </div>
        <p><b>Question 10:</b> What is DNS?</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'justify' }}>
        
        <RadioGroup row name="question10" value={answers.question10} onChange={(e) => handleAnswerChange('question10', e.target.value)}>
          <FormControlLabel value="Dynamic Network Servor" control={<Radio />} label="Dynamic Network Servor" />
          <FormControlLabel value="Domain Name System" control={<Radio />} label="Domain Name System" />
          <FormControlLabel value="Digital Network Security" control={<Radio />} label="Digital Network Security" />
          <FormControlLabel value="Data Naming Center" control={<Radio />} label="Data Naming Center" />
        </RadioGroup>
        </div>
      {/* Add more questions as needed */}

      <Button  variant="contained" onClick={handleSubmit}>Submit</Button>
      </div>
  );
};

export default Aptitude;