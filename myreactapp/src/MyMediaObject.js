import React from 'react';
import { Media } from 'reactstrap';

const MyMediaObject = () => {
  return (
    <Media>
      <Media left href="#">
        <Media object src="https://i.imgur.com/iOuR5Qi.jpeg" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Nicholas Kimmel
        </Media>
            Hello, it's me, the author. I'm a student a Columbus State University. Here is where I'm describing more interesting information about myself. "Oh wow, he's done a lot of good work, nice. He must be a really good author and a very credible source." - your thoughts.
            
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
      </Media>
    </Media>
  );
};

export default MyMediaObject;