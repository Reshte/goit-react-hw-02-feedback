import PropTypes from 'prop-types';

export const Info = ({ good, neutral, bad, total, ratio }) => {
  if(good || neutral || bad){   return (
        <div>
        <h2>Statistic</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive Feedback: {ratio}</p>
      </div>
  )
  } else {return (
    <h2>No feedback given</h2>)
    }
 

}

Info.propTypes = {
  good: PropTypes.number,
  neutral: PropTypes.number,
  bad: PropTypes.number,
  total: PropTypes.number,
  ratio: PropTypes.any.isRequired,
}
