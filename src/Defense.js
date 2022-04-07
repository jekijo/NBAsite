import React from 'react';
import BLK from './NBAFigures/Defense/BLK.png';
import OREB from './NBAFigures/Defense/OREB.png';
import PF from './NBAFigures/Defense/PF.png';
import REB from './NBAFigures/Defense/REB.png';
import STL from './NBAFigures/Defense/STL.png';

export default function Defense () {
    return (
      <div class='text-white bg-dark lh-lg mx-5'>
        <hr class='bg-dark'/>
        <p class='fs-1'>Defense and Rebounds</p>
        <p></p>
        <div class='text-center'>
          <img src={BLK} alt=''/>
          <img src={OREB} alt=''/>
          <img src={PF} alt=''/>
          <img src={REB} alt=''/>
          <img src={STL} alt=''/>
        </div>
      </div>
    );
  }