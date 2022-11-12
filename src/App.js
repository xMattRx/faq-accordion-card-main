import './App.css';
import CardContainer from './components/CardContainer';
import image3 from './images/bg-pattern-desktop.svg';
import arrow from './images/icon-arrow-down.svg';
import image2 from './images/illustration-box-desktop.svg';
import image1 from './images/illustration-woman-online-desktop.svg';


function App() {
  return (
    <div className='container'>
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
            <div className='question'>
              <div className='question-main'>
                <p className='paragraph'> How many team members can I invite?</p>
                <img src={arrow} className="arrow" />
              </div>
              <p className='description-block'>
                No more than 2GB. All files in your account must fit your allotted storage space.
              </p>
            </div>
            <div className='question'>
              <div className='question-main'>
                <p className='paragraph'> How many team members can I invite?</p>
                <img src={arrow} className="arrow" />
              </div>
              <p className='description-block'>
                No more than 2GB. All files in your account must fit your allotted storage space.
              </p>
            </div>
          </div>

        </div>
      </CardContainer>
    </div>
  );
}

export default App;
