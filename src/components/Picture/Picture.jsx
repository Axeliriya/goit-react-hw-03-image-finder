import PropTypes from 'prop-types';

const Picture = ({ largeImage }) => {
  return <img src={largeImage} alt="" />;
};

Picture.propTypes = {
  largeImage: PropTypes.string.isRequired,
};

export default Picture;
