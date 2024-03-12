import { FunctionComponent } from "react";
import LogicGateway from "../components/LogicGateway";
import FrameComponent13 from "../components/FrameComponent13";
import FrameComponent12 from "../components/FrameComponent12";
import FrameComponent11 from "../components/FrameComponent11";
import FrameComponent10 from "../components/FrameComponent10";
import FrameComponent9 from "../components/FrameComponent9";
import FrameComponent8 from "../components/FrameComponent8";
import FrameComponent7 from "../components/FrameComponent7";
import styles from "./GarageManagement.module.css";

const GarageManagement: FunctionComponent = () => {
  return (
    <div className={styles.garageManagement}>
      <LogicGateway />
      <main className={styles.assignNode}>
        <div className={styles.frameDecorator}>
          <div className={styles.textInputField}>
            <div className={styles.textOutputField}>
              <div className={styles.buttonBuilder}>
                <h3 className={styles.garages}>Garage(s)</h3>
              </div>
              <div className={styles.listMaker}>
                <div className={styles.listMakerChild} />
                <input
                  className={styles.tableFormer}
                  placeholder="Search by Owner, Chain, Garage"
                  type="text"
                />
                <img
                  className={styles.progressBarIcon}
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
            <div className={styles.slider}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.rangeOutput} />
        <FrameComponent13 />
        <FrameComponent12 />
        <FrameComponent11 />
        <FrameComponent10 />
        <FrameComponent9 />
        <FrameComponent8 />
        <FrameComponent7 />
        <div className={styles.splitter}>
          <div className={styles.joiner} />
        </div>
        <div className={styles.queueManager}>
          <div className={styles.priorityQueue}>
            <div className={styles.stack}>
              <img
                className={styles.stackChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.stack1}>
              <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
            </div>
            <div className={styles.stack2}>
              <img className={styles.vectorIcon1} alt="" src="/vector-5.svg" />
            </div>
            <div className={styles.stack3}>
              <img
                className={styles.stackItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.firstInFirstOut}>
              <div className={styles.lastInFirstOut}>
                <div className={styles.page}>{`Page `}</div>
                <div className={styles.of1}>1 of 1</div>
              </div>
            </div>
            <div className={styles.mapFunction}>
              <div className={styles.indexer}>
                <div className={styles.goToPage}>{`Go to Page: `}</div>
              </div>
              <div className={styles.searchTree}>
                <div className={styles.searchTreeChild} />
                <div className={styles.heap}>1</div>
              </div>
            </div>
            <button className={styles.graph}>
              <div className={styles.matrix} />
              <div className={styles.go}>Go!</div>
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default GarageManagement;
