import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ValueComparator.module.css";

export type ValueComparatorType = {
  createdOn?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
};

const ValueComparator: FunctionComponent<ValueComparatorType> = ({
  createdOn,
  propPadding,
}) => {
  const vectorPathCombiningStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.proximityGuides}>
      <div className={styles.createdOn}>{createdOn}</div>
      <div
        className={styles.vectorPathCombining}
        style={vectorPathCombiningStyle}
      >
        <div className={styles.vectorPathCombiningChild} />
        <div className={styles.dataAggregator}>29/01/2024</div>
      </div>
    </div>
  );
};

export default ValueComparator;
