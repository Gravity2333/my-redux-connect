import { connect } from "../../lib/my-connect";
import { addCounterNumAction } from "../../store/counter";

function Home({num,addCounterNum}) {
  return (
    <div
      style={{
        height: "150px",
        backgroundColor: "lightgray",
        border: "1px solid black",
        textAlign: "center",
      }}
    >
      <h2>Home</h2>
      <span>counter: {num}</span>
      <div>
        <button onClick={()=>addCounterNum(1)}>+1</button>
        <button onClick={()=>addCounterNum(3)}>+3</button>
        <button onClick={()=>addCounterNum(5)}>+5</button>
      </div> 
    </div>
  );
}

const mapStateToProps = ({counter: {num}})=>({num})
const mapDispatchToProps = dispatch => ({
    addCounterNum: num=>dispatch(addCounterNumAction(num))
})

export default connect(mapStateToProps,mapDispatchToProps)(Home);
