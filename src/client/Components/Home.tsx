import React, {useState, useEffect, ReactElement} from 'react';
import Login from './Login';
import ProblemCards, { ProblemCard } from './ProblemCards'
import axios from 'axios'
import ProblemContainer from './ProblemContainer';
import {Button, Stack, Box, TextField} from '@mui/material';
import Navbar from './Navbar';


interface Home {
  test?: string
}


const Home = ({test}:Home): JSX.Element => {
  const [problem, setProblems] = useState<any>([])
  const [cards, setCards] = useState()
  const [inputValue, setInputValue] = useState('')

  useEffect(() => {
    // const testSet:any = [{title:"tester",about:"is this hard?"},{title:"tester2",about:"or easy?"}]
    // setProblems([{title:"tester",about:"a very hard problem"},{title:"tester2",about:"an even harder one"}])
    
    getProblems()
  
  } ,[])

  //fetch list of all problems 
  const getProblems =() =>{
    console.log("fetching all problems")
    axios({
      method: "get",
      url: "/problem",
    }).then((data) => {
      // console.log(data.data)
      setProblems(data.data)
      makeCards(data.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const searchProblems =(inputValue:string) =>{
    console.log(inputValue)
    axios({
      method: "get",
      url: `/problem/${inputValue}`,
    }).then((data) => {
      // console.log(data.data)
      setProblems(data.data)
      makeCards(data.data)
    })
    .catch((error) => {
      console.log(error);
    });
  }

  const makeCards = (problem?:any) => {
    let cardArr :any = [];
    console.log(problem,"problems")
    if(problem.length > 0){
      for(let i = 0; i < problem.length; i++){
        cardArr.push(<ProblemCards key={`problem-card${i}`} title={problem[i].name} about={problem[i].description} />)
      }
      setCards(cardArr)
    }
  }
  
const search = () =>{
        console.log('search clicked', inputValue)
        searchProblems(inputValue)
    }

return(
    <>
    <div className="home-container">
        <div className='title-container'>
        <h1 className="home-title">Whiteboard with Jigglypuff</h1>
        </div>
        <div className="problems-box">
          <Box
            component="form"
            sx={{'& > :not(style)': { m: 1, width: '25ch' },}} noValidate autoComplete="off" >
          <TextField type="text" value={inputValue} onChange={(e) => setInputValue(e.target.value)} className="searchBar" id="outlined-basic" label="Problem Name..." variant="outlined" />
          <Button className="searchButton" onClick={search}>Search</Button>
          </Box>
          <ProblemContainer cards={cards}/>
          {/* <Login /> */}
        </div>
      </div>
    </>
  )
}

export default Home;