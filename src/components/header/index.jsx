import React from 'react';
import * as S from './styles';
import { ListItem } from './listItem';
import { mockItemsMenu } from './mock';

export function Header({ username }) {
  if (!mockItemsMenu.length) return null;
  return (
    <S.Container>
      <S.NavItems>
        {mockItemsMenu.map((item, idx) => (
          <ListItem key={idx} title={item?.title} />
        ))}
      </S.NavItems>
      <li>User: {username} </li>
    </S.Container>
  );
}
