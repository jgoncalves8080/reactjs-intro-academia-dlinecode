import React from 'react';
import { ListItem } from './listItem';
import { mockItemsMenu } from './mock';

import './header.css';

export function Header({ username }) {
  if (!mockItemsMenu.length) return null;
  return (
    <header>
      <ul>
        {mockItemsMenu.map((item, idx) => (
          <ListItem key={idx} title={item?.title} />
        ))}
      </ul>
      <li>User: {username} </li>
    </header>
  );
}
