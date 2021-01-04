import React from 'react';
import { Site } from 'tabler-react';


const BeforeHeader = ({
  toggleNavmenu,
}) => {
  return (
    <Site.Header
      imageURL="/img/logo.svg"
      href="/"
      onMenuToggleClick={() => toggleNavmenu()}
    />
  );
};

export default BeforeHeader;
