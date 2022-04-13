import React from 'react';

export default function StatComp () {
    return (
      <div className='text-white bg-dark lh-lg mx-5 fs-5'>
        <hr className='bg-dark'/>
        <h2 class='fs-2'><strong>This section is not ready yet.</strong></h2>
        <p>In the future, this tab will be the home to further analysis in which individual player 
          stats will be evaluated using k means clustering in order to test if a players position can 
          be determined by their stats. This will be done on current NBA players, and players from 20 years
          ago. From this data, we will be able to see if the trend towards position-less basketball is 
          real, or more of the perception of how the game is played.
        </p>
      </div>
    );
  }