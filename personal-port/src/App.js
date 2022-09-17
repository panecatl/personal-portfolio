import React, { useState } from 'react';
import Nav from './components/Nav'
import About from './components/About';
import Gallery from './components/Gallery';
import ContactForm from './components/Contact';

function App() {
  const [contactSelected, setContactSelected] = useState(false);

  const [categories] = useState([
    {
      name: "Group Project",
    description: "Click this tab to view some of the group projects I have been a part of."
  },
  {
    name: "Single Project",
    description: "Click to view the individual projects I have worked on."
  }
  ]);

  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        contactSelected={contactSelected}
        setContactSelected={setContactSelected}
        ></Nav>
      <main>
        {!contactSelected ? (
          <>
          <Gallery currentCategory={currentCategory}></Gallery>
          <About></About>
          </>
        ) : (
          <ContactForm></ContactForm>
        )}
      </main>
    </div>
  );
}

export default App;
