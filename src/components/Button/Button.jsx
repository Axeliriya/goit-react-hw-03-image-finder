import PropTypes from 'prop-types';
import Load from 'react-loader-spinner';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';

const Button = ({ onClick, loading }) => {
  return (
    <div className="Button-wrapper">
      <button className="Button" type="button" onClick={onClick}>
        {loading && <Load type="Puff" color="#00BFFF" height={24} width={24} />}
        <span>Load more</span>
      </button>
    </div>
  );
};

Button.propTypes = {
  loading: PropTypes.bool.isRequired,
};

export default Button;
