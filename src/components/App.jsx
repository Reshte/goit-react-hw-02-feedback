import React, { Component } from "react";

export default class App extends Component{
 state = {
  good: 0,
  neutral: 0,
  bad: 0
} 
  render() {
    return (<section>
      <div>
        <h2>Please leave feedback</h2>
        <button type="button" onClick={event => { console.log(event); console.log(this.state.good) }}>Good</button>
        <button type="button" onClick={event => console.log(event)}>Neutral</button>
      <button type="button" onClick={event => console.log(event)}>Bad</button>
      </div>
      <div>
        <h2>Statistic</h2>
        <p>Good:</p>
        <p>Neutral:</p>
        <p>Bad:</p>
        <p>Total:</p>
        <p>Positive Feedback:</p>
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

