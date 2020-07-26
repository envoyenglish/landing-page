import React, {Component} from 'react';

class FeedbackForm extends Component {

  render() {
    return (
      <div style={{height: '100vh', width: '100vw'}}>
        <iframe
          src= "https://www.cognitoforms.com/AgaveCommerce/MissionFeedback"
          width="100%"
          seamless='seamless'
          overflow='hidden'
          height="100%"
          title="feedback"
        />
      </div>
    );
  }
};

export default FeedbackForm;

