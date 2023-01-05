import PropTypes from 'prop-types';
import { WrapperControls, Title, Button } from 'components/controls/controls.styled';


export const Controls = ({handleIncrement}) => {
  // const isActive = false;
    return (
     <WrapperControls>
        <Title>Please leave feedback</Title>
        <Button type="button" onClick={handleIncrement}>Good</Button>
        <Button type="button" onClick={handleIncrement}>Neutral</ Button>
        <Button type="button" onClick={handleIncrement}>Bad</ Button>
      </WrapperControls>)
}