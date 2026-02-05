import { connect } from "../../lib/my-connect";
import { subCounterNumAction } from "../../store/counter";

function About({ num, subCounterNum }) {
  return (
    <div
      style={{
        height: "150px",
        backgroundColor: "lightgray",
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <h2>About</h2>
      <span>counter: {num}</span>
      <div>
        <button onClick={() => subCounterNum(1)}>-1</button>
        <button onClick={() => subCounterNum(3)}>-3</button>
        <button onClick={() => subCounterNum(5)}>-5</button>
      </div>
    </div>
  );
}

const mapStateToProps = ({ counter: { num } }) => ({ num });
const mapDispatchToProps = (dispatch) => ({
  subCounterNum: (num) => dispatch(subCounterNumAction(num)),
});

export default connect(mapStateToProps, mapDispatchToProps)(About);
