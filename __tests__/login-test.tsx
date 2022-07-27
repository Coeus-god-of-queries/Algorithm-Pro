import React from 'react';
import Login from '../src/client/Components/Login';
import { render, screen } from '@testing-library/react';

describe('Login', () => {
    beforeEach(() => {
        render(<Login />)
    })
    test('should render an input field with a placeholder value of Username', () => {
        const userNode = screen.getByPlaceholderText('Username');

        expect(userNode.getAttribute('Placeholder')).toEqual('Username');
    })

    test('should render an input field with a placeholder value of Password', () => {
        const passNode = screen.getByPlaceholderText('Password');
        
        expect(passNode.getAttribute('Placeholder')).toEqual('Password');
    })
})

