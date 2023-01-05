import React, { Component } from "react";
import { Controls } from './controls/controls'

export default class App extends Component{
 state = {
  good: 0,
  neutral: 0,
  bad: 0
  } 
  
  handleIncrement = (event) => {
    this.setState(perState => {
        switch (event.target.textContent) {
        case "Good": return { good: perState.good + 1, };
        case "Neutral": return { neutral: perState.neutral + 1, };
        case "Bad": return { bad: perState.bad + 1, };
        default: console.log('УПС, чет не работает')
      }
    })
  }

  countTotalFeedback = () => {
     return (this.state.good + this.state.neutral +this.state.bad)
  }

  countPositiveFeedbackPercentage = () => {
    if (this.state.good && this.state.neutral && this.state.bad) { return 'no data yet' }
    else {
      return Math.round((this.state.good / (this.state.good + this.state.neutral + this.state.bad)) * 100)
   }
   
 }

  render() {
    return (
      <section>
        <Controls handleIncrement={this.handleIncrement} />
      <div>
        <h2>Statistic</h2>
          <p>Good: {this.state.good}</p>
          <p>Neutral: {this.state.neutral}</p>
          <p>Bad: {this.state.bad}</p>
          <p>Total: {this.countTotalFeedback()}</p>
          <p>Positive Feedback: {this.countPositiveFeedbackPercentage()}%</p>
      </div>
      
</section>)}
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
//         color: '#010101'
//       }}
//     >
//       <Section title="">
//         <FeedbackOptions options={} onLeaveFeedback={}></FeedbackOptions>
//         <Statistics good={} neutral={} bad={} total={} positivePercentage={}></Statistics>
//       </Section>
//     </div>
//   );
// };

