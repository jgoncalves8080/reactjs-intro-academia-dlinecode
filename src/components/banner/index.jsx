import React, { useState } from 'react';
import * as S from './styles';

function Banner({ company }) {
  const [darkMode, setDarkMode] = useState(false);
  const switchDarkMode = () => {
    setDarkMode((prev) => !prev);
  };
  return (
    <S.Container isDark={darkMode}>
      <S.Description>Hello {company}</S.Description>
      <button onClick={switchDarkMode}>Switch Dark Mode</button>
    </S.Container>
  );
}

export default Banner;
