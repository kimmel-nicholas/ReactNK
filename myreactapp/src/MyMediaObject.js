import React from 'react';
import { Media } from 'reactstrap';

const MyMediaObject = () => {
  return (
    <Media>
      <Media left href="#">
        <Media src="http://clipart-library.com/new_gallery/106-1065200_face-stick-figure.png" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Nicholas Kimmel
        </Media>
            Hello, its me, the author. I'm a student a Columbus State University. Here is where I'm describing more interesting information about myself. "Oh wow, he's done a lot of good work, nice. He must be a really good author and a very credible source." - your thoughts 
      </Media>
    </Media>
  );
};

export default MyMediaObject;