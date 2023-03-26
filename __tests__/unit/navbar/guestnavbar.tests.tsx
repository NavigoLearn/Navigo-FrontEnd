import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import LoggedInNavbar from '@components/LoggedInNavbar';

describe('LoggedInNavbar component', () => {
  test('renders logo', () => {
    render(<LoggedInNavbar />);
    const logo = screen.getByRole('img');
    expect(logo).toBeInTheDocument();
  });

  test('hamburger menu opens on click', () => {
    render(<LoggedInNavbar />);
    const menuButton = screen.getByRole('button', { name: 'open menu' });
    fireEvent.click(menuButton);
    const menu = screen.getByRole('list');
    expect(menu).toHaveClass('opacity-100');
  });

  test('hamburger menu closes on second click', () => {
    render(<LoggedInNavbar />);
    const menuButton = screen.getByRole('button', { name: 'open menu' });
    fireEvent.click(menuButton);
    fireEvent.click(menuButton);
    const menu = screen.getByRole('list');
    expect(menu).not.toHaveClass('opacity-100');
  });

  test('menu links have correct href', () => {
    render(<LoggedInNavbar />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    const feedbackLink = screen.getByRole('link', { name: 'Feedback' });
    const signUpLink = screen.getByRole('link', { name: 'Sign Up' });
    const logInLink = screen.getByRole('link', { name: 'Log In' });
    expect(homeLink).toHaveAttribute('href', '/home');
    expect(feedbackLink).toHaveAttribute('href', '/feedback');
    expect(signUpLink).toHaveAttribute('href', '/signup');
    expect(logInLink).toHaveAttribute('href', '/login');
  });
});
