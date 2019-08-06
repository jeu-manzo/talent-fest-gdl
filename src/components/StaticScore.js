import React from 'react';
import ReactDOM from 'react-dom';
import StarRatingComponent from 'react-star-rating-component';
 
class Star extends React.Component {
  render() {

    return (                
      <div>
        <StarRatingComponent 
          name="rate2" 
          editing={false}
          starCount={5}
          value={4.5}
        />
      </div>
    );
  }
}

export default Star;