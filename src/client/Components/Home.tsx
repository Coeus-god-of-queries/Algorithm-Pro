import React, {useState, useEffect} from 'react';
import Login from './Login';
import ProblemCards from './ProblemCards'
import axios from 'axios'

interface Home {
  test?: string
}


const Home = ({test}:Home): JSX.Element =>{
  const [problem, setProblems] = useState([])

  //fetch list of problems 
  const getProblems =() =>{
    axios({
      method: "get",
      url: "/home/problems",
    }).then(data => {
      console.log(data)
    })
  }
  
  



return(
    <>
        <div>hello</div>
        <p>{test}</p>
        {/* <Login /> */}
    </>
  )
}

export default Home;