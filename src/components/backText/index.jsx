import "./index.css";
import PropTypes from "prop-types";
const BackText = ({ backText, topText }) => {
  return (
    <div className="backText">
      <p>{backText}</p>
      <h1>{topText}</h1>
    </div>
  );
};

BackText.propTypes = {
  backText: PropTypes.string,
  topText: PropTypes.string,
};
export default BackText;
