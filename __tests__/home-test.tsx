import Home from "../src/client/Components/Home";
import {render, screen} from '@testing-library/react'
import React from "react";

describe('Home page', () => {

it('should exist and have text', ()=>{
    const text = "howdy"
render(
    <Home test={text}/>
    )
    const rendered = screen.getByText(text)
    expect(screen.getAllByText).toBeDefined()
    // expect(rendered).toEqual(text)
    // expect("howdy").toBeInTheDocument();
    // const tester = render(<Home test={text}/>);
    //   expect(getByText("howdy")).toBeInTheDocument();
})
//test search functionality
//expect list of problems to render
xit('should render list of problems from API', ()=>{
    render(<Home/>)
    
})

//expect search to return list of problems
//

})