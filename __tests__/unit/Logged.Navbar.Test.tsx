import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
import LoggedInNavbar from '@components/LoggedInNavbar';

describe('LoggedInNavbar', () => {
  it('renders the logo', () => {
    render(<LoggedInNavbar />);
    const logo = screen.getByAltText('logo');
    expect(logo).toBeInTheDocument();
  });

  it('shows the dropdown menu when the menu is clicked', () => {
    render(<LoggedInNavbar />);
    const burgerMenu = screen.getByRole('button', { name: 'burger menu' });
    fireEvent.click(burgerMenu);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    expect(homeLink).toBeInTheDocument();
    const feedbackLink = screen.getByRole('link', { name: 'Feedback' });
    expect(feedbackLink).toBeInTheDocument();
    const profileLink = screen.getByRole('link', { name: 'Profile' });
    expect(profileLink).toBeInTheDocument();
  });

  it('hides the dropdown menu when the close button is clicked', () => {
    render(<LoggedInNavbar />);
    const burgerMenu = screen.getByRole('button', { name: 'burger menu' });
    fireEvent.click(burgerMenu);
    const closeButton = screen.getByRole('button', { name: 'close' });
    fireEvent.click(closeButton);
    const homeLink = screen.queryByRole('link', { name: 'Home' });
    expect(homeLink).not.toBeInTheDocument();
    const feedbackLink = screen.queryByRole('link', { name: 'Feedback' });
    expect(feedbackLink).not.toBeInTheDocument();
    const profileLink = screen.queryByRole('link', { name: 'Profile' });
    expect(profileLink).not.toBeInTheDocument();
  });

  it('navigates to the correct page when a link is clicked', () => {
    render(<LoggedInNavbar />);
    const homeLink = screen.getByRole('link', { name: 'Home' });
    fireEvent.click(homeLink);
    expect(window.location.pathname).toBe('/home');
    const feedbackLink = screen.getByRole('link', { name: 'Feedback' });
    fireEvent.click(feedbackLink);
    expect(window.location.pathname).toBe('/feedback');
    const profileLink = screen.getByRole('link', { name: 'Profile' });
    fireEvent.click(profileLink);
    expect(window.location.pathname).toBe('/profile');
  });
});
