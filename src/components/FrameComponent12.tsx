import { FunctionComponent } from "react";
import styles from "./FrameComponent12.module.css";

const FrameComponent12: FunctionComponent = () => {
  return (
    <section className={styles.forLoopNode}>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.garageParent}>
          <div className={styles.garage}>Garage</div>
          <div className={styles.futuristicGarage}>Futuristic Garage</div>
        </div>
        <div className={styles.frameParent}>
          <button className={styles.image30Parent}>
            <img className={styles.image30Icon} alt="" src="/image-30@2x.png" />
            <div className={styles.frameItem} />
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
            <div className={styles.groupNode} />
          </div>
          <div className={styles.frameDiv}>
            <div className={styles.tabNodeWrapper}>
              <div className={styles.tabNode}>
                <div className={styles.chain}>Chain</div>
                <div className={styles.autoParts}>Auto Parts</div>
              </div>
            </div>
            <div className={styles.inputProcessor} />
          </div>
          <div className={styles.frameWrapper1}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.frameParent1}>
                <input className={styles.frameInner} type="radio" />
                <div className={styles.bergen}>Bergen</div>
              </div>
            </div>
          </div>
          <div className={styles.frameParent2}>
            <div className={styles.groupAssemblerWrapper}>
              <div className={styles.groupAssembler} />
            </div>
            <div className={styles.lineCreator}>
              <img
                className={styles.arrowCreatorIcon}
                alt=""
                src="/vector-11.svg"
              />
            </div>
            <div className={styles.ovalMaker}>
              <img className={styles.groupIcon} alt="" src="/group-11.svg" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent12;
