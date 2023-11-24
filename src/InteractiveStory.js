/*import React, { useState } from 'react';
import './InteractiveStory.css';
const Storytelling = () => {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    setStep(step + 1);
  };

  const resetStory = () => {
    setStep(1);
  };

  const storyContent = {
    1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus tristique risus est, non porta libero ultrices quis. Mauris tempor massa lacus, nec varius risus vulputate nec. In non nibh fermentum purus molestie ornare. Donec imperdiet euismod volutpat. Sed felis justo, fringilla vel vestibulum nec, ultricies sit amet libero. Nullam a tristique sapien. Fusce euismod quam libero, in ultrices massa ullamcorper a. Aliquam nec est turpis. Integer non accumsan dui. Sed fermentum lectus porta, finibus ex ac, aliquet eros. Cras ut semper magna. Suspendisse ac ligula nec leo pretium mollis. Morbi sollicitudin quis ante hendrerit fringilla. Nam posuere sem eu nulla auctor rutrum. Suspendisse laoreet et diam nec iaculis. Proin consectetur mauris sed felis imperdiet congue.    Vivamus euismod pretium tellus eget dictum. Proin aliquet tellus vel lacus rhoncus, et vulputate nisi egestas. Phasellus id condimentum nunc. Morbi blandit pharetra tempor. Proin mattis ullamcorper gravida. Morbi id est ac felis eleifend elementum. Nulla facilisi. Praesent sit amet suscipit justo. Vivamus vel felis ex. Nam maximus eros vel tincidunt congue. Donec iaculis lorem nec tellus eleifend luctus. Curabitur vel suscipit orci, nec tempus odio. Nulla et sem in ex molestie condimentum. In maximus diam lorem, sit amet iaculis dui mollis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed efficitur, sapien nec fermentum aliquet, erat elit semper augue, ac malesuada urna elit eu ante.',
    2: 'Vivamus euismod pretium tellus eget dictum. Proin aliquet tellus vel lacus rhoncus, et vulputate nisi egestas. Phasellus id condimentum nunc. Morbi blandit pharetra tempor. Proin mattis ullamcorper gravida. Morbi id est ac felis eleifend elementum. Nulla facilisi. Praesent sit amet suscipit justo. Vivamus vel felis ex. Nam maximus eros vel tincidunt congue. Donec iaculis lorem nec tellus eleifend luctus. Curabitur vel suscipit orci, nec tempus odio. Nulla et sem in ex molestie condimentum. In maximus diam lorem, sit amet iaculis dui mollis quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Sed efficitur, sapien nec fermentum aliquet, erat elit semper augue, ac malesuada urna elit eu ante.    daring journey...',
    3: 'Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Etiam efficitur erat nec turpis congue, suscipit posuere tortor pulvinar. Fusce dapibus tortor sit amet dolor dignissim, eu tincidunt felis sodales. Sed et ipsum et dolor lacinia lacinia. Nulla facilisi. Nullam sit amet posuere velit. Ut non lectus leo. Nunc tempor, leo ac maximus auctor, elit nibh ullamcorper lacus, quis posuere lectus ante a massa. Nunc auctor massa sit amet viverra condimentum. Phasellus sed facilisis ante, varius euismod orci. Nulla at augue est. Vivamus egestas sollicitudin mauris eu fermentum. Proin ornare and made new friends...',
    4: 'Nam commodo nisi nunc, vel condimentum lacus interdum sed. Aenean quam ex, volutpat eget turpis ultrices, ultricies porta metus. Fusce a iaculis massa, nec rhoncus arcu. Vivamus urna mauris, laoreet ut auctor ut, rutrum vitae magna. Duis vehicula, lacus ultrices tempus fringilla, erat ante sodales nisl, sit amet lobortis ante nibh ut mauris. Suspendisse ornare dignissim pulvinar. Phasellus aliquam nisi laoreet, condimentum ante eget, sagittis magna. Phasellus efficitur tellus tellus, vitae efficitur ligula ultrices vel. Nunc ac hendrerit nunc. Donec efficitur leo lacus, non dignissim metus sodales vitae was yet to come...',
    5: 'Aliquam erat volutpat. In quis dolor ut sem blandit interdum sed ut sapien. Vivamus sit amet mattis ipsum. Curabitur augue magna, luctus et nunc sollicitudin, porttitor dapibus mauris. Mauris interdum auctor ligula ut tristique. Sed tristique pulvinar volutpat. Phasellus vitae felis sit amet massa dapibus accumsan non sit amet leo. Fusce finibus nisl nec lorem pulvinar, quis sagittis magna laoreet. Sed venenatis tellus vel mi posuere, non cursus quam facilisis. Suspendisse ut nulla egestas end.'
  };

  return (
    <div className="story-container">
      <div className="story-text">{storyContent[step]}</div>

      {step < 5 && (
        <button className="next-button" onClick={nextStep}>
          Next
        </button>
      )}

      {step === 5 && (
        <button className="reset-button" onClick={resetStory}>
          Restart
        </button>
      )}
    </div>
  );
};

export default Storytelling;*/

import './InteractiveStory.css';
import React, { useState } from 'react';

function App() {
  const [currentStage, setCurrentStage] = useState(1);
  const [userChoices, setUserChoices] = useState([]);

  const handleChoice = (choice) => {
    setUserChoices([...userChoices, choice]);
    setCurrentStage(currentStage + 1);
  };

  const restartStory = () => {
    setCurrentStage(1);
    setUserChoices([]);
  };

  const story = [
    {
      text: "You find yourself in a dark cave. What do you do?",
      options: [
        { text: "Explore deeper into the cave", nextStage: 2 },
        { text: "Exit the cave and look for civilization", nextStage: 3 },
      ],
    },
    {
      text: "As you venture deeper, you encounter a fork in the path. Which way do you go?",
      options: [
        { text: "Take the left path", nextStage: 4 },
        { text: "Take the right path", nextStage: 5 },
      ],
    },
    {
      text: "The left path leads to a treasure chest. What do you do?",
      options: [
        { text: "Open the chest", nextStage: 6 },
        { text: "Leave it and continue", nextStage: 7 },
      ],
    },
    {
      text: "You find a friendly dragon. What do you say?",
      options: [
        { text: "Ask for a ride", nextStage: 8 },
        { text: "Offer a snack", nextStage: 9 },
      ],
    },
    {
      text: "The dragon invites you to a magical land. Do you accept?",
      options: [
        { text: "Yes, let's go!", nextStage: 10 },
        { text: "No, I'm good here", nextStage: 11 },
      ],
    },
  ];

  const isStoryEnd = currentStage > story.length;

  return (
    
    <div className="App">
      <div className='bgimg'></div>
      <h1>Interactive Storytelling</h1>
      {!isStoryEnd ? (
        <div>
          <p>{story[currentStage - 1].text}</p>
          <div>
            {story[currentStage - 1].options.map((option, index) => (
              <button key={index} onClick={() => handleChoice(option)}>
                {option.text}
              </button>
            ))}
          </div>
        </div>
      ) : (
        <div>
          <h2>Congratulations! You've reached the end of the story.</h2>
          <p>Your choices: {userChoices.join(', ')}</p>
          <button onClick={restartStory}>Restart</button>
        </div>
      )}
    </div>
  );
}

export default App;
