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
        <hr></hr>
        <div>
          <br></br>
          <p class='fs-3 text-left'>Rebounding</p>
          <div class='text-center'>
            <img src={REB} alt=''/>
            <p></p>
            <img src={OREB} alt=''/>
          </div>
          <ReboundsExp />
          <br></br>
          <p class='fs-3 text-left'>Blocks, Steals, and Fouls</p>
          <div class='text-center'>
            <img src={PF} alt=''/>
            <p/>
            <img src={BLK} alt=''/>
            <p/>
            <img src={STL} alt=''/>
          </div>
          <BlkStlFExp />
          <hr></hr>
        </div>
      </div>
    );
  }



  function ReboundsExp () {
    return (
      <p>
        While total rebounds appeared to have slight decline followed by a similar incline, offensive rebounds
        seem to have been consistently falling since the year 2000. This in all likelihood is due to a dramatic 
        shift in pacing, and in an attempt to limit easy transition baskets, teams are opting more and more 
        to get back on defense as opposed to crashing the offensive glass. This is particularly noticeable over the
        past ten years, as championship teams are often finishing below the league average in offensive rebounds. So
        while a downward trend in offensive rebounds may be an indication that preventing the fast break is more 
        valuable than trying to get that extra possession, grabbing defensive boards is something teams need to try 
        and prevent falling behind in. More shots means more rebound opportunities, and stopping your opponent from 
        snatching every loose ball is something most championship teams have successfully done.
      </p>
    )
  }


  function BlkStlFExp () {
    return (
      <div>
        <p>
          Perhaps one of the more turbulant categories; blocks, steals, and personal fouls. To begin, steals 
          appear to have the most inconsistency of the three categories. While championship teams more frequently 
          end with above average steals, it seems that every couple of years there is a sharp dip below leageue 
          average. This could be due to team philosophy, size, and defensive scheme. While some teams focus on protecting
          the paint and settling for outside shots, other teams host elite perimiter defenders who make plays 
          every night gaurding ball handlers. Nonetheless, the highs appear to outweigh the lows, and perimiter 
          defenders are rightly in high demand in today's game.
        </p>
        <p>
          Next, blocks had a bit of a recession between '07 and '16, but outside of those years appear to be 
          significant for many championship teams. With the exception of the 2016 Cavs and the 2011 Mavericks, almost 
          all NBA champions exhibit elite defense whether it be perimter, interior, or a mixture of both. Locking 
          down the paint can be a strong cornerstone for many contending defenses. 
        </p>
        <p>
          Finally, NBA champs can also be seen having below average fouls committed more often than not. With a steady
          decline in fouls committed, the perception of a "soft" NBA where players get foul calls for nothing may not
          necessarily be the case. As the overall rate of personal fouls are committed, the championship teams keep pace 
          with the rest of the league, even with above average performance in the steals and blocks categories.
          While there are exceptions, maintaining above average defense and keeping fouls to a minimum appear to be 
          import for contending.
        </p>
      </div>
      
    )
  }