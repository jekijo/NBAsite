import React from 'react';

export default function Home () {
    return (
      <div className='text-white bg-dark lh-lg mx-5 fs-5'>
        <hr className='bg-dark'/>
        <p class='fs-1'>Welcome to Stat Coyote!</p>
        <p>This site hosts a multitude of NBA data analysis. All data presented on this site was collected
          using a webscraper in tandem with a SQL database. The main focus is to showcase the comparison of 
          league averages between NBA champions and the rest of the league over the past twenty years. In each 
          tab you will find graphs visualizing these comparisons based on stat categories including 
          but not limited to: shooting percentages, points per game, rebounds, fouls, and average team height.
          Each sections will have an accompanying explanation of the figures, and their implications about the
          past, current, and future trends of championship teams. As of now, the analysis does not go as deep
          as some advanced analytics, but I plan on expanding the depth and range of topics covered in the future.
          For now, feel free to browse what has already been added.
        </p>
        <p class='fs-4'>Enjoy!</p>
      </div>
    );
  }