import { FunctionComponent } from "react";
import styles from "./LogicGateway.module.css";

const LogicGateway: FunctionComponent = () => {
  return (
    <div className={styles.logicGateway}>
      <header className={styles.inputCollector}>
        <div className={styles.outputAggregator}>
          <img
            className={styles.image1Icon}
            loading="lazy"
            alt=""
            src="/image-1@2x.png"
          />
        </div>
        <div className={styles.functionApplier}>
          <div className={styles.loopController}>
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.sequenceManager}>
              <div className={styles.errorHandler}>
                <div className={styles.management}>Management</div>
                <div className={styles.connectionBreaker}>
                  <img
                    className={styles.connectionBreakerChild}
                    alt=""
                    src="/line-1.svg"
                  />
                </div>
              </div>
              <div className={styles.outputMapper}>
                <img
                  className={styles.valueTransformerIcon}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.valueValidator}>
          <div className={styles.valueFilter}>
            <img
              className={styles.valueCombinerIcon}
              alt=""
              src="/vector.svg"
            />
            <div className={styles.valueSplitter}>
              <div className={styles.valueHolder}>
                <img
                  className={styles.valueTrackerIcon}
                  alt=""
                  src="/vector-1.svg"
                />
                <img
                  className={styles.valueUpdaterIcon}
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LogicGateway;
