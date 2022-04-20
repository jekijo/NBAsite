import React from 'react';
import Height from './NBAFigures/SizeSeed/Height.png';
import Seed from './NBAFigures/SizeSeed/Seed.png';

export default function SizeSeed () {
    return (
      <div class='text-white bg-dark lh-lg mx-5'>
        <hr class='bg-dark'/>
        <p class='fs-1'>Size and Seeding</p>
        <hr></hr>
        <p></p>
        <div class='text-center'>
          <br></br>
          <img src={Height} alt=''/>
        </div>
        <SizeExp/>
        <br></br>
          <p/>
        <div class='text-center'>
          <img src={Seed} alt=''/>
        </div>
        <SeedExp />
        <hr></hr>
      </div>
    );
  }




  function SizeExp () {
    return (
      <p>
        Not surprisingly, the average height of NBA teams has been declining over the past 12 or so years.
        With some teams seeing success playing "small ball", and the emergence of "positionless" basketball, it's no
        wonder teams are finding they can fill their positions with smaller-than-typical players. However, even 
        with the decline in player height up until the past three years, championship teams frequently had taller 
        players on average. If the data ended in 2018, size could be assumed to be a significant factor in a teams 
        success, but a sudden sharp dip from 2018 on may indicate that a new wave of small ball is taking hold of the 
        NBA. Teams may be opting for smaller centers and power forwards to increase mobility and pace, and adding 
        multi-positional defenders to combat a lack of hieght. It may still be a good idea to think large, but this 
        notion could be going quickly out of style.
      </p>
    )
  }


  function SeedExp () {
    return (
      <p>
        Over the past 22 years, no team lower than a 3 seed has won a championship. Many people lament the fact
        that regular season basketball doesn't matter when compared to post-season play, and with Lebron James
        finding playoff success without being a top seed many most likely don't take seeding as seriously as they should.
        Plain and simple, if you want to win a title, you need to be shooting for the top 3 seeding in your conference.
      </p>
    )
  }