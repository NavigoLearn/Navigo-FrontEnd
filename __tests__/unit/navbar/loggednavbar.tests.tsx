import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { describe, it, expect } from 'vitest';
// import LoggedInNavbar from '@components/LoggedInNavbar';
//
// describe('LoggedInNavbar', () => {
//   it('renders the logo and checks for navigation links', () => {
//     render(<LoggedInNavbar />);
//     const logo = screen.getByAltText('navbar-logo');
//     expect(logo).toBeInTheDocument();
//     const homeLink = screen.getByRole('link', { name: 'home' });
//     expect(homeLink).toHaveAttribute('href', '/home');
//   });
//
// it('closes the mobile menu when a menu item is clicked', () => {
//   const { getByAltText, getByTestId, getByText } = render(<LoggedInNavbar />);
//   const burgerIcon = getByAltText('dropdown');
//   const mobileMenu = getByTestId('mobile-menu');
//   const homeLink = getByText('home');

//   fireEvent.click(burgerIcon);

//   expect(mobileMenu).toHaveClass('opacity-100 left-0');

//   fireEvent.click(homeLink);

//   expect(mobileMenu).toHaveClass('opacity-0 -left-full');
// });
// });

// it('navigates to the correct page when a link is clicked', () => {
//   render(<LoggedInNavbar />);
//   const homeLink = screen.getByRole('link', { name: 'home' });
//   fireEvent.click(homeLink);
//   expect(window.location.pathname).toBe('/home');
//   const feedbackLink = screen.getByRole('link', { name: 'feedback' });
//   fireEvent.click(feedbackLink);
//   expect(window.location.pathname).toBe('/feedback');
//   const profileLink = screen.getByRole('link', { name: 'profile' });
//   fireEvent.click(profileLink);
//   expect(window.location.pathname).toBe('/profile');
// });
// });
// it('shows the dropdown menu when the menu is clicked', () => {
//   render(<LoggedInNavbar />);
//   const dropdown = screen.getByRole('button', { name: 'dropdown' });
//   fireEvent.click(dropdown);
// const homeLink = screen.getByRole('link', { name: 'home' });
// expect(homeLink).toBeInTheDocument();
// const feedbackLink = screen.getByRole('link', { name: 'Feedback' });
// expect(feedbackLink).toBeInTheDocument();
// const profileLink = screen.getByRole('link', { name: 'Profile' });
// expect(profileLink).toBeInTheDocument();
// });

//   it('hides the dropdown menu when the close button is clicked', () => {
//     render(<LoggedInNavbar />);
//     const burgerMenu = screen.getByRole('button', { name: 'burger menu' });
//     fireEvent.click(burgerMenu);
//     const closeButton = screen.getByRole('button', { name: 'close' });
//     fireEvent.click(closeButton);
//     const homeLink = screen.queryByRole('link', { name: 'home' });
//     expect(homeLink).not.toBeInTheDocument();
//     const feedbackLink = screen.queryByRole('link', { name: 'Feedback' });
//     expect(feedbackLink).not.toBeInTheDocument();
//     const profileLink = screen.queryByRole('link', { name: 'Profile' });
//     expect(profileLink).not.toBeInTheDocument();
//   });
