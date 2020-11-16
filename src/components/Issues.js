import React from 'react';
import IssueItem from './IssueItem';

function Issues({ issues }) {
  return (
    <div style={listStyle}>
      {
        issues.map(issue => {
          return (
            <IssueItem issue={issue} />
          );
        })
      }
      </div>
  );
}

const listStyle = {
  margin: '2rem 0',
  border: '1px solid #eaecef',
  borderBottom: 'none'
}

export default Issues;
