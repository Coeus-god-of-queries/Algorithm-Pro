import React from 'react';
import Login from '../src/client/Components/Login';
import { render, screen, fireEvent } from '@testing-library/react';

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

    test('should call onClick prop when clicked (handleLogin)', () => {
        const handleLogin = jest.fn();
        fireEvent.click(screen.getByText(/Login/i));
        expect(handleLogin).toHaveBeenCalledTimes(1);
    })

    test('should be able to enter credentials and reset component fields', async () => {
        const userNode = screen.getByPlaceholderText('Username');
        const passNode = screen.getByPlaceholderText('Password');

        userNode.setAttribute('Value', 'admin');
        passNode.setAttribute('Value', '123456');

        const result = await fireEvent.click(screen.getByText(/Login/i));

        expect(userNode.getAttribute('Value')).toEqual('');
        expect(passNode.getAttribute('Value')).toEqual('');

    })

    xtest('should create a post fetch request', () => {

    })
})

