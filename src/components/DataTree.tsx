import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./DataTree.module.css";

export type DataTreeType = {
  connectionCreator?: string;
  line24?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propPadding1?: CSSProperties["padding"];
  propHeight?: CSSProperties["height"];
  propPadding2?: CSSProperties["padding"];
};

const DataTree: FunctionComponent<DataTreeType> = ({
  connectionCreator,
  line24,
  propPadding,
  propPadding1,
  propHeight,
  propPadding2,
}) => {
  const imageEnhancerStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const ruleSetStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
      height: propHeight,
    };
  }, [propPadding1, propHeight]);

  const textSegmenterStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding2,
    };
  }, [propPadding2]);

  return (
    <div className={styles.dataTree}>
      <div className={styles.logicGate}>
        <div className={styles.inputProcessor}>
          <div className={styles.outputRenderer}>
            <div className={styles.companyName}>Company Name</div>
            <div className={styles.ruleEngine}>
              <div className={styles.ruleEngineChild} />
              <input
                className={styles.aagGpc}
                placeholder="AAG GPC"
                type="text"
              />
            </div>
          </div>
          <div className={styles.chainsGaragesContainer}>
            <span>{`Chains & Garages`}</span>
            <span className={styles.span}>{` `}</span>
          </div>
        </div>
        <div className={styles.dataSorter}>
          <div className={styles.location}>
            <span>Location</span>
            <span className={styles.span1}>{` `}</span>
          </div>
          <div className={styles.imageEnhancer} style={imageEnhancerStyle}>
            <div className={styles.imageEnhancerChild} />
            <button className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.norway}>Norway</div>
              <div className={styles.decisionMaker}>
                <img
                  className={styles.filterIcon}
                  alt=""
                  src="/vector-112.svg"
                />
              </div>
            </button>
            <button className={styles.rectangleGroup}>
              <div className={styles.frameItem} />
              <div className={styles.denmark}>Denmark</div>
              <div className={styles.vectorWrapper}>
                <img
                  className={styles.vectorIcon}
                  alt=""
                  src="/vector-112.svg"
                />
              </div>
            </button>
            <div className={styles.dataExtractor}>
              <button className={styles.textAnalyzer}>
                <div className={styles.textAnalyzerChild} />
                <div className={styles.france}>France</div>
                <div className={styles.functionCombiner}>
                  <img
                    className={styles.dataDividerIcon}
                    alt=""
                    src="/vector-112.svg"
                  />
                </div>
              </button>
            </div>
            <div className={styles.ruleSet} style={ruleSetStyle}>
              <div className={styles.rectangleContainer}>
                <div className={styles.frameInner} />
                <div className={styles.dataNormalizer}>+5</div>
              </div>
            </div>
            <div className={styles.textSegmenter} style={textSegmenterStyle}>
              <div className={styles.imageCompressor}>
                <img
                  className={styles.connectionCreatorIcon}
                  loading="lazy"
                  alt=""
                  src={connectionCreator}
                />
                <img
                  className={styles.imageCompressorChild}
                  alt=""
                  src={line24}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataTree;
