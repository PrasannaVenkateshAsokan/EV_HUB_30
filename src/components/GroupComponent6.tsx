import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent6.module.css";

export type GroupComponent6Type = {
  /** Style props */
  conditionalNodeTop?: CSSProperties["top"];
};

const GroupComponent6: FunctionComponent<GroupComponent6Type> = ({
  conditionalNodeTop,
}) => {
  const groupSectionStyle: CSSProperties = useMemo(() => {
    return {
      top: conditionalNodeTop,
    };
  }, [conditionalNodeTop]);

  return (
    <section className={styles.rectangleParent} style={groupSectionStyle}>
      <div className={styles.frameChild} />
      <div className={styles.comparisonNode}>
        <div className={styles.owner}>Owner</div>
        <div className={styles.aagGpc}>AAG GPC</div>
      </div>
      <div className={styles.decisionBranch}>
        <div className={styles.mergeNode}>
          <img
            className={styles.image23Icon}
            loading="lazy"
            alt=""
            src="/image-23@2x.png"
          />
          <div className={styles.variableHolder} />
        </div>
        <div className={styles.constantNode}>
          <div className={styles.conditionalNode}>
            <div className={styles.chains}>Chains</div>
            <div className={styles.functionNode}>
              <div className={styles.errorHandler}>20</div>
            </div>
          </div>
        </div>
        <div className={styles.eventTrigger}>
          <div className={styles.signalEmitter} />
        </div>
        <div className={styles.sequenceNode}>
          <div className={styles.parallelNode}>
            <div className={styles.garages}>Garages</div>
            <div className={styles.inputMap}>
              <div className={styles.outputMap}>59</div>
            </div>
          </div>
        </div>
        <div className={styles.errorMap}>
          <div className={styles.signalMap} />
        </div>
        <div className={styles.functionMap}>
          <div className={styles.controlFlow}>
            <div className={styles.location}>Location</div>
            <div className={styles.processingChain}>
              <div className={styles.norway}>Norway</div>
            </div>
          </div>
        </div>
        <div className={styles.taskGroup}>
          <div className={styles.taskQueue} />
        </div>
        <div className={styles.priorityNode}>
          <img
            className={styles.timerNodeIcon}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className={styles.flowControl}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-11.svg"
          />
        </div>
      </div>
    </section>
  );
};

export default GroupComponent6;
