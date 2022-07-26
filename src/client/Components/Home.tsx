import React from 'react';
import Login from './Login';

interface Home {
  test?: string
}
//jest home-test.tsx

const Home = ({test}:Home): JSX.Element =>{

return(
    <>
        <div>hello</div>
        {test}
        {/* <Login /> */}
    </>
  )
}

export default Home;