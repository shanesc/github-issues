import moment from 'moment';
import React from 'react';

function IssueItem({ issue }) {
  return (
    <a href={issue.html_url}>
      <div className="issue">
        <h3>{issue.title}</h3>
        <p style={issueDetailsStyle}>
          #{issue.number} opened {moment(issue.created_at).fromNow()} by {issue.user.login}
        </p>
      </div>
    </a>
  );
}

const issueDetailsStyle = {
  paddingTop: '1rem',
  fontSize: '1.4rem',
  fontWeight: '400',
  color: '#586069'
};

export default IssueItem;