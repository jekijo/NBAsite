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
        <hr></hr>
        <div>
          <br></br>
          <p class='fs-3 text-left'>Points Per Game</p>
          <div class='text-center'>
            <img src={PPG} alt=''/>
          </div>
          <PointsExp />
          <br></br>
          <p class='fs-3 text-left'>Three Point Attempts and Percentage</p>
          <div class='text-center'>
            <img src={TPP} alt=''/>
            <p></p>
            <img src={TPA} alt=''/>
          </div>
          <ThreePointExp />
          <br></br>
          <p class='fs-3 text-left'>Field Goal Attempts and Percentage</p>
          <div class='text-center'>
            <img src={FGA} alt=''/>
            <p></p>
            <img src={FGP} alt=''/>
          </div>
          <FieldGoalExp />
          <br></br>
          <p class='fs-3 text-left'>Assists and Turnovers</p>
          <br></br>
          <div class='text-center'>
            <img src={AST} alt=''/>
            <p></p>
            <img src={TOV} alt=''/>
          </div>
          <br></br>
          <p class='fs-3 text-left'>Free Throw Attempts</p>
          <br></br>
          <div class='text-center'>
            <img src={FTA} alt=''/>
          </div>
        </div>
      </div>
    );
  }


function ThreePointExp () {
  return (
    <div>
    <p>Over the past couple decades, an emphasis on the three ball has become a large core principle amongst many
      elite NBA teams. The increase in three point shot attempts from the 2000 season to the 2021 season is astonishing,
      almost trippling from around 12 three point attempts a game, to around 35. Throughout the years there are multiple 
      championship teams seen with average or below average three point attempts, but as time has gone on these teams
      never appear to lag too far behind and can often push the pace on three pointers attempted.
    </p>
    <p>
      While the NBA has seen a dramatic increase in three pointers taken, the league average has stayed relatively stable
      in the percentage of three pointers made. Championship teams seem to be more erratic in where they fall relative 
      to the league average, but appear to have much higher highs. Team philosophy and personnel play a large part in 
      where the points come from, so it would make sense that not every NBA champion of the past two decades dwarfs the 
      rest of the league in three point percentage. However, often times the championship teams do log significantly higher
      three point percentage, even with similar or even less three pointers taken. Regardless of how anyone feels about 
      the evolution of the three pointer, it appears to be a near necessity for contending in today's league.
    </p>
    </div>
  )
}

function PointsExp () {
  return (
    <p>One of the immediately obvious factors of offensive success in the NBA would be the average points
      per game that a team scores throughout the season. While there are outliers, such as the '04 Pistons being 
      noticeably below the league average in points scored, most championship teams can be seen to put the ball
      in the basket more than every other team. Other years can be seen in the graph with the champions and league
      averages being close, such as in '07 and '08, but in these cases teams typically exhibit elite offensive shooting
      efficiency and/or above average defensive performance. In the case of the '04 Pistons, they exhibit phenomenal 
      defensive stats when compared to other teams of that year, which in all likelihood allowed them to maintain low
      scoring games without the threat of being outscored. However, other than a few instances we can see that championship
      teams seem to consistently rise above the rest of the league in PPG. Along with this, we can see that the general 
      trend in the NBA is migrating towards higher scoring games. This is most likely due to an increase in pace, and 
      a boom in three point attempts. That being said, overall points scored should be one of the primary focuses of any 
      contending team.
    </p>
  )
}


function FieldGoalExp () {
  return (
    <p>
      Similar to three pointers, overall field goal attempts have also increased over the past 20 years. While championship
      teams are seen with attempts below the league average as much as above, one thing that stands firm is a consistent 
      elite level of shooting efficiency. Only two champions since the year 2000 have had a below average shooting percentage.
    </p>
  )
}