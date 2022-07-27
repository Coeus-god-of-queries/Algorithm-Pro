import React, {useState, useEffect, ReactElement} from 'react';
import Login from './Login';
import ProblemCards, { ProblemCard } from './ProblemCards'
import axios from 'axios'
import ProblemContainer from './ProblemContainer';

interface Home {
  test?: string
}


const Home = ({test}:Home): JSX.Element => {
  const [problem, setProblems] = useState<any[]>([])
  const [cards, setCards] = useState()
  
  useEffect(() => {
    // const testSet:any = [{title:"tester",about:"is this hard?"},{title:"tester2",about:"or easy?"}]
    setProblems([{title:"tester",about:"a very hard problem"},{title:"tester2",about:"an even harder one"}])
    
    //getProblems()
  
  } ,[])

  //fetch list of problems 
  const getProblems =() =>{
    axios({
      method: "get",
      url: "/home/problems",
    }).then(data => {
      console.log(data)
    })
  }

  const makeCards = (problem?:any) => {
    let cardArr :any = [];
    if(problem.length > 0){
      for(let i = 0; i < problem.length; i++){
        cardArr.push(<ProblemCards key={`problem-card${i}`} title={problem[i].title} about={problem[i].about} />)
      }
      setCards(cardArr)
    }
  }
  
  useEffect(()=>{
    makeCards(problem)
  },[problem])
  



return(
    <>
        <div>Problems</div>
        <ProblemContainer cards={cards}/>
        {/* <Login /> */}
    </>
  )
}

export default Home;