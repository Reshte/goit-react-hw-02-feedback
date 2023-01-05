import PropTypes from 'prop-types';
import { WrapperControls, Title, Button,ButtonWrapper } from 'components/controls/controls.styled';


export const Controls = ({handleIncrement}) => {
  // const isActive = false;
    return (
     <WrapperControls>
        <Title>Please leave feedback</Title>
        <ButtonWrapper>
          <Button type="button" onClick={handleIncrement}>Good</Button>
          <Button type="button" onClick={handleIncrement}>Neutral</ Button>
          <Button type="button" onClick={handleIncrement}>Bad</ Button>
        </ButtonWrapper>
      </WrapperControls>)
}


Controls.prototype = {
  handleIncrement: PropTypes.elementType,
}