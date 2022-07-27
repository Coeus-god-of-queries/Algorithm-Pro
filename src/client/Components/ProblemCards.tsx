import React from 'react';

interface ProblemCard {
    problem?: string
  }
  
  
  const ProblemCard = ({problem}:ProblemCard): JSX.Element =>{
  
  return(
      <>
          <div>card</div>
      </>
    )
  }
  
  export default ProblemCard;