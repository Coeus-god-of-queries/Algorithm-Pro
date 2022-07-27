import React from 'react';
import {Button, Stack} from '@mui/material';
// import Stack from '@mui/material/Stack';

export interface ProblemCard {
    title?: any,
    about?: any,
  }
  
  
  const ProblemCards = ({title,about}:ProblemCard): JSX.Element =>{
  
    const openProblem = () => {
      console.log("clicked",title)

    }


  return(
    <div className='problem-cards'>

      <Button className='problem-title' onClick={openProblem}>{title}</Button>
      
       <div className='description'>{about}</div>
      </div>
    )
  }
  
  export default ProblemCards;