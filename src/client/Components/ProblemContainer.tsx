import React from 'react';

export interface ProblemContainer {
    title?: any,
    cards?: any,
  }
  
  
  const ProblemContainer = ({cards}: ProblemContainer): JSX.Element =>{


    return(
        <div className='problem-container'>{cards}</div>
    )
  }
  
  export default ProblemContainer;