import React from 'react';
import TPP from './NBAFigures/Offense/3PA.png';
import TPA from './NBAFigures/Offense/3PP.png';
import AST from './NBAFigures/Offense/AST.png';
import FGA from './NBAFigures/Offense/FGA.png';
import FGP from './NBAFigures/Offense/FGP.png';
import FTA from './NBAFigures/Offense/FTA.png';
import PPG from './NBAFigures/Offense/PPG.png';
import TOV from './NBAFigures/Offense/TOV.png';


export default function Offense () {
    return (
      <div class='text-white bg-dark lh-lg mx-5'>
        <hr class='bg-dark'/>
        <p class='fs-1'>Offense</p>
        <p></p>
        <img src={TPP} alt=''/>
        <img src={TPA} alt=''/>
        <img src={AST} alt=''/>
        <img src={FGA} alt=''/>
        <img src={FGP} alt=''/>
        <img src={FTA} alt=''/>
        <img src={PPG} alt=''/>
        <img src={TOV} alt=''/>
      </div>
    );
  }