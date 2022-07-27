import React from 'react';
import {Button, Stack} from '@mui/material';
import { useNavigate } from 'react-router-dom';

export interface ProblemCard {
    title?: any,
    about?: any,
  }
  
  
  const ProblemCards = ({title,about}:ProblemCard): JSX.Element =>{
    const navigate = useNavigate();
  
    const openProblem = () => {
      console.log("clicked",title)
      navigate('/whiteboard', { state:{ title:title, about:about} })

    }


  return(
    <div className='problem-cards'>

      <Button className='problem-title' onClick={openProblem}>{title}</Button>
      
       <div className='description'>{about}</div>
      </div>
    )
  }
  
  export default ProblemCards;