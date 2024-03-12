import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameBorders2.module.css";

export type FrameBorders2Type = {
  radiatorServices?: string;
  image26?: string;
  fillColorPicker?: string;
  pages?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propPadding2?: CSSProperties["padding"];
  propPadding3?: CSSProperties["padding"];
  propPadding4?: CSSProperties["padding"];
  propPadding5?: CSSProperties["padding"];
  propPadding6?: CSSProperties["padding"];
  propPadding7?: CSSProperties["padding"];
  propPadding8?: CSSProperties["padding"];
};

const FrameBorders2: FunctionComponent<FrameBorders2Type> = ({
  radiatorServices,
  image26,
  fillColorPicker,
  pages,
  propPadding,
  propPadding1,
  propWidth,
  propPadding2,
  propPadding3,
  propPadding4,
  propPadding5,
  propPadding6,
  propPadding7,
  propPadding8,
}) => {
  const groupDiv5Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv10Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  const image26IconStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const frameDiv11Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  const frameDiv12Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding3,
    };
  }, [propPadding3]);

  const frameDiv13Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding4,
    };
  }, [propPadding4]);

  const frameDiv14Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding5,
    };
  }, [propPadding5]);

  const frameDiv15Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding6,
    };
  }, [propPadding6]);

  const searchInputStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding7,
    };
  }, [propPadding7]);

  const frameDiv16Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding8,
    };
  }, [propPadding8]);

  return (
    <section className={styles.frameBorders}>
      <div className={styles.rectangleParent} style={groupDiv5Style}>
        <div className={styles.frameChild} />
        <div className={styles.frameWrapper} style={frameDiv10Style}>
          <div className={styles.chainParent}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.radiatorServices}>{radiatorServices}</div>
          </div>
        </div>
        <div className={styles.frameParent}>
          <button className={styles.image26Parent}>
            <img
              className={styles.image26Icon}
              alt=""
              src={image26}
              style={image26IconStyle}
            />
            <div className={styles.lineWrapper} style={frameDiv11Style}>
              <div className={styles.frameItem} />
            </div>
          </button>
          <div className={styles.frameContainer} style={frameDiv12Style}>
            <div className={styles.frameGroup}>
              <div className={styles.frameDiv}>
                <div className={styles.dropdownIconParent}>
                  <div className={styles.dropdownIcon}>
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
          <div className={styles.frameWrapper1} style={frameDiv13Style}>
            <div className={styles.garagesParent}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.strokeDashPicker}>
                <div className={styles.fillColorPicker}>{fillColorPicker}</div>
              </div>
            </div>
          </div>
          <div className={styles.lineContainer} style={frameDiv14Style}>
            <div className={styles.lineDiv} />
          </div>
          <div className={styles.frameWrapper2} style={frameDiv15Style}>
            <div className={styles.locationParent}>
              <div className={styles.location}>Location</div>
              <div className={styles.searchInput} style={searchInputStyle}>
                <div className={styles.pages}>{pages}</div>
              </div>
            </div>
          </div>
          <div className={styles.frameWrapper3} style={frameDiv16Style}>
            <div className={styles.frameParent1}>
              <div className={styles.pageOfWrapper}>
                <div className={styles.pageOf} />
              </div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-11.svg"
                />
              </div>
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

export default FrameBorders2;
