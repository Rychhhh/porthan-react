import React from 'react';
import GitHubButton from 'react-github-btn';
const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/Ryhann?tab=followers"
      data-icon="octicon-repo-followers"
      data-size="large"
      data-show-count="true"
      aria-label="Fork cobidev/gatsby-simplefolio on GitHub"
    >
      Followers
    </GitHubButton>
  </>
);

export default GithubButton;
