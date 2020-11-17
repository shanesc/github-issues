import React from 'react';

const PageNav = ({ links, onClick }) => {
  return <nav>
    {
      links.prev
        ? <a href="#" onClick={() => onClick(links.prev.url)}>
            Previous
          </a>
        : <span style={{color: 'grey'}}>Previous</span>
    }
    {
      links.next
        ? <a 
            href="#"
            onClick={() => onClick(links.next.url)}
            style={{float: 'right'}}
          >
              Next
          </a>
        : <span style={{color: 'grey', float: 'right'}}>Next</span>
    }
  </nav>
}

export default PageNav;