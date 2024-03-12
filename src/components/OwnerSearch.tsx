import { FunctionComponent } from "react";
import styles from "./OwnerSearch.module.css";

const OwnerSearch: FunctionComponent = () => {
  return (
    <header className={styles.ownerSearch}>
      <div className={styles.locationGroup}>
        <div className={styles.pageIndicator}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.rectangleFrame}>
          <div className={styles.lineSeparator}>
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.searchBar}>
              <div className={styles.textLabel}>
                <div className={styles.management}>Management</div>
                <div className={styles.groupAlignment}>
                  <img
                    className={styles.groupAlignmentChild}
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
              </div>
              <div className={styles.pageElement}>
                <img
                  className={styles.goButtonIcon}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.arrowLine}>
          <div className={styles.spacerElement}>
            <img
              className={styles.textContainerIcon}
              alt=""
              src="/vector.svg"
            />
            <div className={styles.textContent}>
              <div className={styles.inputField}>
                <img
                  className={styles.labelTextIcon}
                  alt=""
                  src="/vector-1.svg"
                />
                <img className={styles.searchIcon} alt="" src="/vector-2.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default OwnerSearch;
