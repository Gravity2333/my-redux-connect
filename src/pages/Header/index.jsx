import { useEffect } from "react";
import { connect } from "../../lib/my-connect";
import { fetchHeaderInfo } from "../../store/header";

function Header({ headerInfo, fetch }) {
  useEffect(() => {
    fetch();
  }, [fetch]);

  return (
    <div style={{ backgroundColor: "lightblue", textAlign: "center" }}>
      <h2>connect tool DEMO</h2>
      <span style={{ color: "white" }}>{headerInfo}</span>
    </div>
  );
}

const mapStateToProps = ({ header: { headerInfo } }) => ({ headerInfo });
const mapDispatchToProps = (dispatch) => ({
  fetch() {
    dispatch(fetchHeaderInfo());
  },
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
