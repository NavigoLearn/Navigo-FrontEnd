import { render, fireEvent, screen, getByText } from '@testing-library/react';
import { describe, it, expect, afterEach } from 'vitest';
import Login from '@components/auth/Login';
import SignUp from '@components/auth/SignUp';

describe('Login component', () => {
  afterEach(() => {
    document.getElementsByTagName('html')[0].innerHTML = ''; 
  });
  //login by Eugene
  //1
  it('should update email and password inputs when typing', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('testpassword');
  });
  // // Login test by Rus
  // //2
  it('should reset input fields after submitting the form (for signup)', () => {
    render(<Login />)
    const emailInput = screen.getByPlaceholderText('Email')
    const passwordInput = screen.getByPlaceholderText('Password');

    fireEvent.submit(screen.getByText('Login'));

    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
  });

  // sign up by Rus
  // 1
  it('should update all fields when typing', () => {
    render(<SignUp />)
    expect(screen.getByText('Sign Up')).toBeInTheDocument();
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat password');
    
    expect(nameInput).toBeInTheDocument();
    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
    expect(repeatPasswordInput).toBeInTheDocument();  

    fireEvent.change(nameInput, { target: { value:'testname' } });
    fireEvent.change(emailInput, { target: { value:'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value:'testpassword' } });
    fireEvent.change(repeatPasswordInput, { target: { value:'testrepeatpassword' } });

    expect(nameInput).toHaveValue('testname');
    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('testpassword');
    expect(repeatPasswordInput).toHaveValue('testrepeatpassword');
  })

  //2
  it('should reset input fields after submitting the form (for signup)', () => {
    render(<SignUp />)
    const nameInput = screen.getByPlaceholderText('Name');
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');
    const repeatPasswordInput = screen.getByPlaceholderText('Repeat password');

    fireEvent.submit(screen.getByText('Sign Up'));

    expect(nameInput).toHaveValue('');
    expect(emailInput).toHaveValue('');
    expect(passwordInput).toHaveValue('');
    expect(repeatPasswordInput).toHaveValue('');
  });
});
