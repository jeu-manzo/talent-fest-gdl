import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
function StaticScore (props){
  
    return (                
      <div>
        <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={5}
          value={`${props.score}`}
        />
      </div>
    );
  }


export default StaticScore;