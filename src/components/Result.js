import React from 'react';
import Email from '../components/Email';
import Media from '../components/socialMedia';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

function Result(props) {

  return (
    <div>
      <ReactCSSTransitionGroup
      className="container result"
      component="div"
      transitionName="fade"
      transitionEnterTimeout={800}
      transitionLeaveTimeout={500}
      transitionAppear
      transitionAppearTimeout={500}
    >
      <div>  
        <h2 className="question">
         Введите ваш e-mail для получения результатов !
         </h2>
         <Email />
         <Media />
      </div>
    </ReactCSSTransitionGroup>
      </div>
  );
}

Result.propTypes = {
  quizResult: React.PropTypes.string.isRequired,
};

export default Result;
//  You prefer <strong>{props.quizResult}</strong>!

