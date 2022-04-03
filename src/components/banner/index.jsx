import React, { useState } from 'react';
import { Container, Description } from './styles';

function Banner({ company }) {
  const [darkMode, setDarkMode] = useState(false);
  const switchDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <Container isDark={darkMode}>
      <Description>Hello {company}</Description>
      <button onClick={switchDarkMode}>Switch Dark Mode</button>
    </Container>
  );
}

export default Banner;
