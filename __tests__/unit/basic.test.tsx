import { render, fireEvent, screen } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import Login from '@components/Login';

describe('Login component', () => {
  it('should update email and password inputs when typing', () => {
    render(<Login />);
    const emailInput = screen.getByPlaceholderText('Email');
    const passwordInput = screen.getByPlaceholderText('Password');

    expect(emailInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();

    fireEvent.change(emailInput, { target: { value: 'test@example.com' } });
    fireEvent.change(passwordInput, { target: { value: 'testpassword' } });

    expect(emailInput).toHaveValue('test@example.com');
    expect(passwordInput).toHaveValue('testpassword');
  });
});
