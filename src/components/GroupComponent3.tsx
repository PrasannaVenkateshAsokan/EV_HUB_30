import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./GroupComponent3.module.css";

export type GroupComponent3Type = {
  robertBoschGmbH?: string;
  prop?: string;
  prop1?: string;
  germany?: string;

  /** Style props */
  propTop?: CSSProperties["top"];
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
};

const GroupComponent3: FunctionComponent<GroupComponent3Type> = ({
  robertBoschGmbH,
  prop,
  prop1,
  germany,
  propTop,
  propPadding,
  propPadding1,
}) => {
  const groupDiv3Style: CSSProperties = useMemo(() => {
    return {
      top: propTop,
    };
  }, [propTop]);

  const frameDiv6Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv7Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.rectangleParent} style={groupDiv3Style}>
      <div className={styles.frameChild} />
      <div className={styles.ownerParent}>
        <div className={styles.owner}>Owner</div>
        <div className={styles.robertBoschGmbh}>{robertBoschGmbH}</div>
      </div>
      <div className={styles.frameParent}>
        <div className={styles.lineWrapper}>
          <div className={styles.frameItem} />
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.chainsParent}>
            <div className={styles.chains}>Chains</div>
            <div className={styles.wrapper} style={frameDiv6Style}>
              <div className={styles.div}>{prop}</div>
            </div>
          </div>
        </div>
        <div className={styles.lineContainer}>
          <div className={styles.frameInner} />
        </div>
        <div className={styles.frameContainer}>
          <div className={styles.garagesParent}>
            <div className={styles.garages}>Garages</div>
            <div className={styles.container}>
              <div className={styles.div1}>{prop1}</div>
            </div>
          </div>
        </div>
        <div className={styles.lineFrame}>
          <div className={styles.lineDiv} />
        </div>
        <div className={styles.frameDiv}>
          <div className={styles.locationParent}>
            <div className={styles.location}>Location</div>
            <div className={styles.germanyWrapper} style={frameDiv7Style}>
              <div className={styles.germany}>{germany}</div>
            </div>
          </div>
        </div>
        <div className={styles.lineWrapper1}>
          <div className={styles.frameChild1} />
        </div>
        <div className={styles.vectorWrapper}>
          <img
            className={styles.vectorIcon}
            loading="lazy"
            alt=""
            src="/vector-11.svg"
          />
        </div>
        <div className={styles.groupWrapper}>
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

export default GroupComponent3;
