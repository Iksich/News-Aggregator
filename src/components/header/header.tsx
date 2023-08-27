import React from 'react';
import { NavBar } from '../nav/navbar';

type HeaderProps = object;

export const Header: React.FC<HeaderProps> = () => {
  return (
    <div>
      <NavBar />
    </div>
  );
};
