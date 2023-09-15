import React, { Component } from 'react';
import { Button } from './App.styled';

export class App extends Component {
  static defaultProps = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  static propTypes = {};

  addGood = event => {
    this.setState(prevState => {
      return { good: prevState.good + 1 };
    });
  };

  addNeutral = event => {
    this.setState(prevState => {
      return { neutral: prevState.neutral + 1 };
    });
  };

  addBad = event => {
    this.setState(prevState => {
      return { bad: prevState.bad + 1 };
    });
  };

  countTotalFeedback = () => {
    return this.state.good + this.state.neutral + this.state.bad;
  };
  countPositiveFeedbackPercentage = () => {
    if (this.countTotalFeedback() === 0) return 0;
    return ((this.state.good / this.countTotalFeedback()) * 100).toFixed();
  };

  render() {
    return (
      <>
        <h1>Please leave feedback</h1>
        <Button onClick={this.addGood}>Good</Button>
        <Button onClick={this.addNeutral}>Neutral</Button>
        <Button onClick={this.addBad}>Bad</Button>
        <h2>Statistics</h2>
        <p>
          <strong>Good:</strong> {this.state.good}
        </p>
        <p>
          <strong>Neutral:</strong> {this.state.neutral}
        </p>
        <p>
          <strong>Bad:</strong> {this.state.bad}
        </p>
        <p>
          <strong>Total:</strong> {this.countTotalFeedback()}
        </p>
        <p>
          <strong>Positive Feedback:</strong>{' '}
          {this.countPositiveFeedbackPercentage()}%
        </p>
      </>
    );
  }
}

// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         color: '#010101',
//       }}
//     >
//       React homework template
//     </div>
//   );
// };
