import { FunctionComponent } from "react";
import styles from "./ValueSwapper2.module.css";

const ValueSwapper2: FunctionComponent = () => {
  return (
    <section className={styles.valueSwapper}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper}>
          <div className={styles.chainParent}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.nappa}>Nappa</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <div className={styles.image25Parent}>
            <img className={styles.image25Icon} alt="" src="/image-25@2x.png" />
            <div className={styles.lineWrapper}>
              <div className={styles.frameItem} />
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.frameParent1}>
                  <div className={styles.ownerWrapper}>
                    <div className={styles.owner}>Owner</div>
                  </div>
                  <div className={styles.robertBoschGmbh}>
                    Robert Bosch GmbH
                  </div>
                </div>
              </div>
              <div className={styles.frameInner} />
            </div>
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.garagesParent}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.wrapper}>
                <div className={styles.div}>27</div>
              </div>
            </div>
          </div>
          <div className={styles.lineContainer}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameWrapper2}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.spainWrapper}>
                <div className={styles.spain}>Spain</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3}>
            <div className={styles.frameParent2}>
              <div className={styles.variableVariableManagerWrapper}>
                <div className={styles.variableVariableManager} />
              </div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
              <div className={styles.responseResponder}>
                <img className={styles.groupIcon} alt="" src="/group-11.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSwapper2;
