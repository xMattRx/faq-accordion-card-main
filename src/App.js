import { useState } from 'react';
import './App.css';
import CardContainer from './components/CardContainer';
import Question from './components/Question';
import imageDesktop3 from './images/bg-pattern-desktop.svg';
import imageMobile3 from './images/bg-pattern-mobile.svg';
import imageDesktop2 from './images/illustration-box-desktop.svg';
import imageDesktop1 from './images/illustration-woman-online-desktop.svg';
import imageMobile1 from './images/illustration-woman-online-mobile.svg';


function App() {
  const paragraphs = ["How many team members can I invite?","What is the maximum file upload size?","How do I reset my password?", "Can I cancel my subscription?","Do you provide additional support?"]
  const [number, setNumber] = useState(null)

  return (
    <div className='container'>
      <div className='container-intern'>
      <img src={imageDesktop2} className="image2" />
      <CardContainer>
        <div className='left-container'>
          
          <picture>
          <source media="(max-width:867px)" className="image1" srcset={imageMobile1}/>
           <img src={imageDesktop1} className="image1" />
          </picture>

          <picture>
          <source media="(max-width:867px)" className="image3" srcset={imageMobile3}/>
          <img src={imageDesktop3} className="image3" />
          </picture>

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
