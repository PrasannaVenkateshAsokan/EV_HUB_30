import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent4.module.css";

export type GroupComponent4Type = {
  /** Style props */
  branchNodeTop?: CSSProperties["top"];
};

const GroupComponent4: FunctionComponent<GroupComponent4Type> = ({
  branchNodeTop,
}) => {
  const groupDiv2Style: CSSProperties = useMemo(() => {
    return {
      top: branchNodeTop,
    };
  }, [branchNodeTop]);

  return (
    <div className={styles.rectangleParent} style={groupDiv2Style}>
      <div className={styles.frameChild} />
      <div className={styles.parentNode}>
        <div className={styles.owner}>Owner</div>
        <div className={styles.aagGpc}>AAG GPC</div>
      </div>
      <div className={styles.inputNode}>
        <div className={styles.outputNode}>
          <img
            className={styles.image23Icon}
            loading="lazy"
            alt=""
            src="/image-23@2x.png"
          />
          <div className={styles.mergeNode} />
        </div>
        <div className={styles.errorNode}>
          <div className={styles.functionNode}>
            <div className={styles.chains}>Chains</div>
            <div className={styles.constantNode}>
              <div className={styles.containerNode}>20</div>
            </div>
          </div>
        </div>
        <div className={styles.connectorNode}>
          <div className={styles.groupNode} />
        </div>
        <div className={styles.branchNode}>
          <div className={styles.loopBackNode}>
            <div className={styles.garages}>Garages</div>
            <div className={styles.callNode}>
              <div className={styles.returnNode}>59</div>
            </div>
          </div>
        </div>
        <div className={styles.ifNode}>
          <div className={styles.elseNode} />
        </div>
        <div className={styles.elifNode}>
          <div className={styles.switchNode}>
            <div className={styles.location}>Location</div>
            <div className={styles.defaultNode}>
              <div className={styles.norway}>Norway</div>
            </div>
          </div>
        </div>
        <div className={styles.filterNode}>
          <div className={styles.reducerNode} />
        </div>
        <div className={styles.transformerNode}>
          <img
            className={styles.accumulatorNodeIcon}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className={styles.producerNode}>
          <img
            className={styles.groupIcon}
            loading="lazy"
            alt=""
            src="/group-11.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default GroupComponent4;
