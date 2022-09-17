import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [categories] = useState([
    {name: "hobbyXchange",
    description: "A local marketplace where hobby enthusist can buy supplies."}
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);
  return (
    <div>
      <Nav
      categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        ></Nav>
      <main>
        <ContactForm></ContactForm>
        <Gallery currentCategory={currentCategory}></Gallery>
        <About></About>
      </main>
    </div>
  );
}

export default App;
