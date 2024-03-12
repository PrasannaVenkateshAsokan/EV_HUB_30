import { FunctionComponent } from "react";
import LogicGateway from "../components/LogicGateway";
import ValueSwapper5 from "../components/ValueSwapper5";
import ValueSwapper4 from "../components/ValueSwapper4";
import ValueSwapper3 from "../components/ValueSwapper3";
import ValueSwapper2 from "../components/ValueSwapper2";
import ValueSwapper1 from "../components/ValueSwapper1";
import ValueSwapper from "../components/ValueSwapper";
import styles from "./ChainManagement.module.css";

const ChainManagement: FunctionComponent = () => {
  return (
    <div className={styles.chainManagement}>
      <LogicGateway />
      <main className={styles.valueRemover}>
        <div className={styles.splitterSplitter}>
          <div className={styles.mergerMerger}>
            <div className={styles.sorterSorter}>
              <div className={styles.matcherMatcher}>
                <h3 className={styles.chains}>Chain(s)</h3>
              </div>
              <div className={styles.indexIndexer}>
                <div className={styles.indexIndexerChild} />
                <input
                  className={styles.counterCounter}
                  placeholder="Search by owner, Chain"
                  type="text"
                />
                <img
                  className={styles.collectorCollectorIcon}
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
            <div className={styles.generatorGenerator}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.comparatorComparer} />
        <ValueSwapper5 />
        <ValueSwapper4 />
        <ValueSwapper3 />
        <ValueSwapper2 />
        <ValueSwapper1 />
        <ValueSwapper />
        <ValueSwapper5
          filterFinderWidth="unset"
          filterFinderPadding="0px var(--padding-22xl) 0px var(--padding-21xl)"
          filterFinderAlignSelf="stretch"
          groupIconWidth="unset"
          groupIconFlex="1"
        />
        <div className={styles.calculatorCalculator}>
          <div className={styles.serializerDeserializer} />
        </div>
        <footer className={styles.monitorMonitor}>
          <div className={styles.dataAggregator}>
            <div className={styles.conditionSplitter}>
              <img
                className={styles.conditionSplitterChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.conditionSplitter1}>
              <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
            </div>
            <div className={styles.conditionSplitter2}>
              <img className={styles.vectorIcon1} alt="" src="/vector-5.svg" />
            </div>
            <div className={styles.conditionSplitter3}>
              <img
                className={styles.conditionSplitterItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.outputCollector}>
              <div className={styles.subtractionOperation}>
                <div className={styles.page}>{`Page `}</div>
                <div className={styles.of1}>1 of 1</div>
              </div>
            </div>
            <div className={styles.multiplicationOperation}>
              <div className={styles.divisionOperation}>
                <div className={styles.goToPage}>{`Go to Page: `}</div>
              </div>
              <div className={styles.parenthesis}>
                <div className={styles.parenthesisChild} />
                <div className={styles.ifStatement}>1</div>
              </div>
            </div>
            <button className={styles.elseStatement}>
              <div className={styles.whileLoop} />
              <div className={styles.go}>Go!</div>
            </button>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ChainManagement;
