import UserProfile from './components/UserProfile';
import WelcomeMessage from './components/WelcomeMessage';
import Header from './components/Header';
import MainContent from './components/MainContent';
import Footer from './components/Footer';
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Counter from './components/Counter';
import './App.css'

function App() {
  return (
      <div>
          <WelcomeMessage />
          <Header />
          <MainContent />
          <Footer />
          <UserProfile name="Alice" age="25" bio="Loves hiking and photography" />
          <Counter />
      </div>
  );
}


export default App
