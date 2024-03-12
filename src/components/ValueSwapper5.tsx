import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./ValueSwapper5.module.css";

export type ValueSwapper5Type = {
  /** Style props */
  filterFinderWidth?: CSSProperties["width"];
  filterFinderPadding?: CSSProperties["padding"];
  filterFinderAlignSelf?: CSSProperties["alignSelf"];
  groupIconWidth?: CSSProperties["width"];
  groupIconFlex?: CSSProperties["flex"];
};

const ValueSwapper5: FunctionComponent<ValueSwapper5Type> = ({
  filterFinderWidth,
  filterFinderPadding,
  filterFinderAlignSelf,
  groupIconWidth,
  groupIconFlex,
}) => {
  const valueSwapperStyle: CSSProperties = useMemo(() => {
    return {
      width: filterFinderWidth,
      padding: filterFinderPadding,
      alignSelf: filterFinderAlignSelf,
    };
  }, [filterFinderWidth, filterFinderPadding, filterFinderAlignSelf]);

  const groupDiv4Style: CSSProperties = useMemo(() => {
    return {
      width: groupIconWidth,
      flex: groupIconFlex,
    };
  }, [groupIconWidth, groupIconFlex]);

  return (
    <section className={styles.valueSwapper} style={valueSwapperStyle}>
      <div className={styles.rectangleParent} style={groupDiv4Style}>
        <div className={styles.frameChild} />
        <div className={styles.valueRanker}>
          <div className={styles.valueCounter}>
            <div className={styles.chain}>Chain</div>
            <div className={styles.nappa}>Nappa</div>
          </div>
        </div>
        <div className={styles.valueMinFinder}>
          <div className={styles.valueRanger}>
            <img
              className={styles.image25Icon}
              loading="lazy"
              alt=""
              src="/image-25@2x.png"
            />
            <div className={styles.valueComparator}>
              <div className={styles.valueSorterList} />
            </div>
          </div>
          <div className={styles.valueFilterList}>
            <div className={styles.valueMapperList}>
              <div className={styles.valueTransformerList}>
                <div className={styles.owner}>Owner</div>
              </div>
              <div className={styles.aagGpc}>AAG GPC</div>
            </div>
          </div>
          <div className={styles.valueUpdaterList}>
            <div className={styles.valueRemoverList} />
          </div>
          <div className={styles.valueCounterStack}>
            <div className={styles.valueSummarizerStack}>
              <div className={styles.garages}>Garages</div>
              <div className={styles.dataProcessor}>
                <div className={styles.textParser}>59</div>
              </div>
            </div>
          </div>
          <div className={styles.imageFilter}>
            <div className={styles.geometryTransformer} />
          </div>
          <div className={styles.sequenceSequencer}>
            <div className={styles.loopLoopper}>
              <div className={styles.location}>Location</div>
              <div className={styles.eventTriggerer}>
                <div className={styles.norway}>Norway</div>
              </div>
            </div>
          </div>
          <div className={styles.stackStacker}>
            <div className={styles.propertyProcessor} />
          </div>
          <div className={styles.mapMapper}>
            <div className={styles.setterSetter}>
              <img
                className={styles.getterGetterIcon}
                alt=""
                src="/vector-11.svg"
              />
              <div className={styles.filterFinder}>
                <img
                  className={styles.groupIcon}
                  loading="lazy"
                  alt=""
                  src="/group-11.svg"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ValueSwapper5;
