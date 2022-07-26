import React from 'react';
import Login from '../src/client/Components/Login';
import { render, screen } from '@testing-library/react';

describe('Login', () => {
    test('should render an input field with a placeholder value of Username', () => {
        render(<Login />);
        const inputNode = screen.getAllByPlaceholderText('Username');

        expect(inputNode).toEqual('Username');

        
    })
})

