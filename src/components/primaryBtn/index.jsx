import PropTypes from "prop-types";
import "./index.css";

function PrimaryBtn({ title }) {
  return <button className="pBtn">{title}</button>;
}

PrimaryBtn.propTypes = {
  title: PropTypes.string,
};

export default PrimaryBtn;
