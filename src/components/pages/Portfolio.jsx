import imgone from "../../../img/project1.png"
import imgtwo from "../../../img/workerspayroll.png"
import imgthree from"../../../img/task-board.png"
import imgfour from"../../../img/pageturna.png"
import {Link} from "react-router-dom"
export default function Portfolio() {
  return (
    <div>
      <h1>Portfolio Page</h1>
      <div className="row">
        <div className="col">
          <img src={imgone} class="rounded float-start" style={{ height: "80%", width: "80%" }} alt="" />
          <div className="row">
            <div className="col">
<a href="https://github.com/NahunM43/Recipe-Assistant">Github</a>
            </div>
            <div className="col">
            <a href="https://nahunm43.github.io/Recipe-Assistant/">livelink </a>
            </div>
          </div>
        </div>
        <div className="col">
          <img src={imgtwo} class="rounded mx-auto d-block" style={{ height: "80%", width: "80%" }}alt="" />
          <div className="row">
            <div className="col">
<a href="https://github.com/malik061103/worker-payroll">Github</a>
            </div>
            <div className="col">
            <a href="http://127.0.0.1:5500/index.html">livelink </a>
            </div>
          </div>
        </div>
        <div className="col">
          <img src={imgthree} class="rounded float-end"style={{ height: "80%", width: "80%" }} alt="" />
          <div className="row">
            <div className="col">
<a href="https://github.com/malik061103/task-board">Github</a>
            </div>
            <div className="col">
            <a href="http://127.0.0.1:5501/task-board/index.html">livelink </a>
            </div>
          </div>
        </div>
        <div className="col">
          <img src= {imgfour}class="rounded float-start" style ={{height: "80%", width: "80%" }}alt="" />
          <div className="row">
            <div className="col">
<a href="https://github.com/bootcampp2g9/Books">Github</a>
            </div>
            <div className="col">
            <a href="http://127.0.0.1:5502/visuals/index.html">livelink </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
