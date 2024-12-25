import PropTypes from "prop-types";
import "./index.css";

function PrimaryBtn({ children, ...rest }) {
  return (
    <button className="pBtn" {...rest}>
      {children}
    </button>
  );
}

PrimaryBtn.propTypes = {
  children: PropTypes.node,
};

export default PrimaryBtn;
