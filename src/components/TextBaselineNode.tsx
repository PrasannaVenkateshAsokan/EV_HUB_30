import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TextBaselineNode.module.css";

export type TextBaselineNodeType = {
  /** Style props */
  propGap?: CSSProperties["gap"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propWidth?: CSSProperties["width"];
  propPadding?: CSSProperties["padding"];
  propAlignSelf1?: CSSProperties["alignSelf"];
};

const TextBaselineNode: FunctionComponent<TextBaselineNodeType> = ({
  propGap,
  propAlignSelf,
  propWidth,
  propPadding,
  propAlignSelf1,
}) => {
  const textBaselineNodeStyle: CSSProperties = useMemo(() => {
    return {
      gap: propGap,
      alignSelf: propAlignSelf,
    };
  }, [propGap, propAlignSelf]);

  const textFontSizeNodeStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
      padding: propPadding,
      alignSelf: propAlignSelf1,
    };
  }, [propWidth, propPadding, propAlignSelf1]);

  return (
    <div className={styles.textBaselineNode} style={textBaselineNodeStyle}>
      <div className={styles.companyLogo}>Company Logo</div>
      <div className={styles.textFontSizeNode} style={textFontSizeNodeStyle}>
        <div className={styles.textFontFamilyNode}>
          <button className={styles.dataAggregator}>
            <div className={styles.dataAggregatorChild} />
            <img className={styles.image24Icon} alt="" src="/image-24@2x.png" />
          </button>
          <img
            className={styles.inputSplitterIcon}
            loading="lazy"
            alt=""
            src="/vector-18.svg"
          />
        </div>
      </div>
    </div>
  );
};

export default TextBaselineNode;
