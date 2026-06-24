# React Travel Guru

React Travel Guru is a travel-themed booking web app built with React and Vite. It lets users explore popular destinations, view destination details, and start a booking journey through a smooth and modern interface.

## Features

- Beautiful landing page with a destination carousel
- Destination-based booking flow
- Firebase authentication with login and sign-up
- Private route protection for protected pages
- Responsive UI with Tailwind CSS

## Tech Stack

- React
- Vite
- React Router DOM
- Tailwind CSS
- Firebase
- Swiper
- React Icons
- React Hook Form

## Project Structure

- src/Pages/Home: Home page and destination slider
- src/Pages/Booking: Booking experience
- src/Pages/Login: Login page
- src/Pages/SingUp: Sign-up page
- src/Pages/PlaceDetails: Protected place details page
- src/Routes: Routing and private route setup
- public/places.json: Travel destination data

## Getting Started

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the development server:
   ```bash
   npm run dev
   ```
4. Open your browser and visit the local Vite URL shown in the terminal

## Available Scripts

- npm run dev - start the development server
- npm run build - build the project for production
- npm run preview - preview the production build
- npm run lint - run ESLint checks

## Firebase Setup

This project uses Firebase for authentication. Update the configuration in src/firebase/firebase.config.js with your own Firebase project settings.

## License

This project is for learning and personal use.
