import React from 'react';
import Height from './NBAFigures/SizeSeed/Height.png';
import Seed from './NBAFigures/SizeSeed/Seed.png';

export default function SizeSeed () {
    return (
      <div class='text-white bg-dark lh-lg mx-5'>
        <hr class='bg-dark'/>
        <p class='fs-1'>Size and Seeding</p>
        <p></p>
        <img src={Height} alt=''/>
        <img src={Seed} alt=''/>
      </div>
    );
  }