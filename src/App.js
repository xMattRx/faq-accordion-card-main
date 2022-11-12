import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Question from './components/Question';
import image3 from './images/bg-pattern-desktop.svg';

import image2 from './images/illustration-box-desktop.svg';
import image1 from './images/illustration-woman-online-desktop.svg';


function App() {
  const paragraphs = ["How many team members can I invite?","What is the maximum file upload size?","How do I reset my password?", "Can I cancel my subscription?","Do you provide additional support?"]
  const [number, setNumber] = useState(null)

  return (
    <div className='container'>
      <div className='container-intern'>
      <img src={image2} className="image2" />
      <CardContainer>
        <div className='left-container'>
          <img src={image1} className="image1" />
          <img src={image3} className="image3" />
        </div>
        <div className='right-container'>
          <h1>
            FAQ
          </h1>
          <div className='questions'>
            {paragraphs.map((i,p)=>{
              return <Question key={i} setNumber={setNumber} paragraph={paragraphs[p]} number={number} numberOwn={i} />
            })
          }
          </div>
        </div>
      </CardContainer>
      </div>
    </div>
  );
}

export default App;
