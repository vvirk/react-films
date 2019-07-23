import React from 'react';
import Header from './components/Header/Header';
import { MainRouter } from './routes';
import Footer from './components/Footer/Footer';

export function App() {
  return (
    <div className="wrapper">
      <main className="main">
        <Header />
        <MainRouter />
      </main>
      <Footer />
    </div>
  );
}

export default App;
