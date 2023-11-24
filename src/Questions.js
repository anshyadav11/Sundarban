import React, { useState } from 'react';
import styles from './Questions.css';
import img1 from './content/gallery/1.png';
import img2 from './content/gallery/2.png';
import img3 from './content/gallery/3.png';
import img4 from './content/gallery/4.png';
import img5 from './content/gallery/5.png';
import img6 from './content/gallery/6.png';
import img7 from './content/gallery/7.png';
import img8 from './content/gallery/8.png';


const Questionnaire = () => {
  const questions = [
    {
      id: 1,
      text: 'what do you know about a tiger?',
      imagesrc:img1,
    },
    {
      id: 2,
      text: 'Which animal do you prefer?',
      imagesrc:img2,
    },
    {
        id: 3,
        text: 'Which animal do you prefer?',
        imagesrc:img3,
      },
      {
        id: 4,
        text: 'Which animal do you prefer?',
        imagesrc:img4,
      },
      {
        id: 5,
        text: 'Which animal do you prefer?',
        imagesrc:img5,
      },
      {
        id: 6,
        text: 'Which animal do you prefer?',
        imagesrc:img6,
      },
      {
        id: 7,
        text: 'Which animal do you prefer?',
        imagesrc:img7,
      },
      {
        id: 8,
        text: 'Which animal do you prefer?',
        imagesrc:img8,
      },
      ];

  const [answers, setAnswers] = useState({});

  const handleAnswer = (questionId, answer) => {
    setAnswers({ ...answers, [questionId]: answer });
  };

  return (
    <div className="container">
      {questions.map((question) => (
        <div className="question" key={question.id}>
          <img className='image' src={question.imagesrc} alt={`Question ${question.id}`} className="image" />
          <p className="questionText">{question.text}</p>
          <input
            type="text"
            onChange={(e) => handleAnswer(question.id, e.target.value)}
            className="input"
          />
        </div>
      ))}
      <button
        className="submitButton"
        onClick={() => console.log(answers)}
      >
        Submit
      </button>
    </div>
  );
};

export default Questionnaire;