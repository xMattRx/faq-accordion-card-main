import React, { useState } from 'react';
import arrow from '../../images/icon-arrow-down.svg';
import '../CardContainer/style.css';

export default function Question({paragraph, setNumber, numberOwn, number}) {
    const [number2] = useState(numberOwn);
  return (
    <div className='question'>
        <div className='question-main'>
            <p className={`${(number === number2) ? 'paragraph-bold' : 'paragraph'}`}>{paragraph}</p>
            <img className={`arrow ${(number === number2) && 'arrow-inversor'}`} onClick={()=>{
                setNumber(number2)
                if(number === number2){
                    setNumber(null)
                }
            }} src={arrow} />
        </div>
        <p className={`${(number === number2) ? 'description-block' : 'description-none'}`  }>
            No more than 2GB. All files in your account must fit your allotted storage space.
        </p>
    </div>
  )
}
