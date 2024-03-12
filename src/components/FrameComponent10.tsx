import { FunctionComponent } from "react";
import styles from "./FrameComponent10.module.css";

const FrameComponent10: FunctionComponent = () => {
  return (
    <section className={styles.forLoopNode}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.garageParent}>
          <div className={styles.garage}>Garage</div>
          <div className={styles.starAutoWorks}>Star Auto Works</div>
        </div>
        <div className={styles.frameParent}>
          <button className={styles.image28Parent}>
            <img className={styles.image28Icon} alt="" src="/image-28@2x.png" />
            <div className={styles.lineWrapper}>
              <div className={styles.frameItem} />
            </div>
          </button>
          <div className={styles.frameGroup}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameContainer}>
                <div className={styles.ownerWrapper}>
                  <div className={styles.owner}>Owner</div>
                </div>
                <div className={styles.robertBoschGmbh}>Robert Bosch GmbH</div>
              </div>
            </div>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.frameWrapper1}>
              <div className={styles.chainParent}>
                <div className={styles.chain}>Chain</div>
                <div className={styles.autoParts}>Auto Parts</div>
              </div>
            </div>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.frameParent1}>
                <input className={styles.groupInput} type="radio" />
                <div className={styles.bergen}>Bergen</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.lineContainer}>
              <div className={styles.frameChild1} />
            </div>
            <div className={styles.vectorWrapper}>
              <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
            </div>
            <div className={styles.groupWrapper}>
              <img className={styles.groupIcon} alt="" src="/group-11.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent10;
