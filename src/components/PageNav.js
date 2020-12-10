import React from 'react';

const PageNav = ({ links, handleNavClick }) => {
  return (
    <nav>
      {links.prev ? (
        <a href="#" onClick={() => handleNavClick(links.prev.url)}>
          Previous
        </a>
      ) : (
        <span style={{ color: 'grey' }}>Previous</span>
      )}
      {links.next ? (
        <a
          href="#"
          onClick={() => handleNavClick(links.next.url)}
          style={{ float: 'right' }}
        >
          Next
        </a>
      ) : (
        <span style={{ color: 'grey', float: 'right' }}>Next</span>
      )}
    </nav>
  );
};

export default PageNav;
