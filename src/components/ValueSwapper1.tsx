import { FunctionComponent } from "react";
import styles from "./ValueSwapper1.module.css";

const ValueSwapper1: FunctionComponent = () => {
  return (
    <section className={styles.valueSwapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.chainParent}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.radiatorServices}>Radiator Services</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.image27Parent}>
            <img
              className={styles.image27Icon}
              loading="lazy"
              alt=""
              src="/image-26@2x.png"
            />
            <div className={styles.frameItem} />
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.ownerWrapper}>
                <div className={styles.owner}>Owner</div>
              </div>
              <div className={styles.aagGpc}>AAG GPC</div>
            </div>
          </div>
          <div className={styles.lineWrapper}>
            <div className={styles.frameInner} />
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
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.norwayWrapper}>
                <div className={styles.norway}>Norway</div>
              </div>
            </div>
          </div>
          <div className={styles.frameChild1} />
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

export default ValueSwapper1;
