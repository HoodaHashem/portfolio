import PropTypes from "prop-types";
import "./index.css";

function PrimaryBtn({ children }) {
  return <button className="pBtn">{children}</button>;
}

PrimaryBtn.propTypes = {
  children: PropTypes.node,
};

export default PrimaryBtn;
