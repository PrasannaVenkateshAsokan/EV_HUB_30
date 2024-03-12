import { FunctionComponent } from "react";
import styles from "./FrameBorders1.module.css";

const FrameBorders1: FunctionComponent = () => {
  return (
    <section className={styles.frameBorders}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.chainParent}>
          <div className={styles.chain}>Chain</div>
          <div className={styles.autoParts}>Auto Parts</div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.noLogo}>No Logo</div>
            </button>
            <div className={styles.frameInner} />
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <div className={styles.ownerWrapper}>
                <div className={styles.owner}>Owner</div>
              </div>
              <div className={styles.aagGpc}>AAG GPC</div>
            </div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.garagesParent}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>59</div>
              </div>
            </div>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.frameChild1} />
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.norwayWrapper}>
                <div className={styles.norway}>Norway</div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild2} />
          <div className={styles.frameWrapper2}>
            <div className={styles.vectorParent}>
              <img className={styles.vectorIcon} alt="" src="/vector-11.svg" />
              <div className={styles.groupWrapper}>
                <img className={styles.groupIcon} alt="" src="/group-11.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameBorders1;
