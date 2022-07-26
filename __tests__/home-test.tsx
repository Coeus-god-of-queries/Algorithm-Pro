import Home from "../src/client/Components/Home";
import {render, screen} from '@testing-library/react'
import React from "react";

describe('Home page', () => {

it('should exist and have text', ()=>{
    const text = "hello"
render(
    <Home test={text}/>
    )
    const rendered = screen.getByText(text)
    expect(rendered).toEqual(text)
// const { getByText } = render(<Home/>);
//   expect(getByText("I am Child1")).toBeInTheDocument();
})
//test search functionality

})