import { Oval } from 'react-loader-spinner';
import PropTypes from 'prop-types';
import { LoaderWrapper } from './Loading.styled';

const Loading = ({
  color,
  height,
  width,
  secondaryColor,
  strokeWidth,
  strokeWidthSecondary,
}) => (
  <LoaderWrapper>
    <Oval
      color={color}
      secondaryColor={secondaryColor}
      height={height}
      width={width}
      strokeWidth={strokeWidth}
      strokeWidthSecondary={strokeWidthSecondary}
    />
  </LoaderWrapper>
);

Loading.propTypes = {
  color: PropTypes.string.isRequired,
  secondaryColor: PropTypes.string.isRequired,
  height: PropTypes.string.isRequired,
  width: PropTypes.string.isRequired,
  strokeWidth: PropTypes.string.isRequired,
  strokeWidthSecondary: PropTypes.string.isRequired,
};

Loading.defaultProps = {
  color: '#00BFFF',
  secondaryColor: '#00BFFF',
  height: '80',
  width: '80',
  strokeWidth: '4',
  strokeWidthSecondary: '4',
};

export default Loading;
