import { FunctionComponent } from "react";
import OwnerSearch from "../components/OwnerSearch";
import ValueSwapper5 from "../components/ValueSwapper5";
import FrameBorders2 from "../components/FrameBorders2";
import FrameBorders1 from "../components/FrameBorders1";
import ValueSwapper1 from "../components/ValueSwapper1";
import FrameBorders from "../components/FrameBorders";
import styles from "./ChainManagementEditScreen.module.css";

const ChainManagementEditScreen: FunctionComponent = () => {
  return (
    <div className={styles.chainManagementEditScreen}>
      <OwnerSearch />
      <main className={styles.groupTitle}>
        <div className={styles.textContainer}>
          <div className={styles.chainSearch}>
            <div className={styles.textLabel}>
              <div className={styles.searchResults}>
                <h3 className={styles.chains}>Chain(s)</h3>
              </div>
              <div className={styles.ownerList}>
                <div className={styles.ownerListChild} />
                <input
                  className={styles.filterButton}
                  placeholder="Search by owner, Chain"
                  type="text"
                />
                <img
                  className={styles.selectAllButton}
                  alt=""
                  src="/vector-3.svg"
                />
              </div>
            </div>
            <div className={styles.clearFilterButton}>
              <img
                className={styles.maskGroupIcon}
                loading="lazy"
                alt=""
                src="/mask-group.svg"
              />
            </div>
          </div>
        </div>
        <div className={styles.pageIndicator} />
        <ValueSwapper5
          filterFinderWidth="1420px"
          filterFinderPadding="0px 0px var(--padding-8xs) var(--padding-xl)"
          filterFinderAlignSelf="unset"
          groupIconWidth="1359px"
          groupIconFlex="unset"
        />
        <FrameBorders2
          radiatorServices="Radiator Services"
          image26="/image-26@2x.png"
          fillColorPicker="21"
          pages="3"
        />
        <FrameBorders1 />
        <FrameBorders2
          radiatorServices="Nappa"
          image26="/image-25@2x.png"
          fillColorPicker="27"
          pages="Spain"
          propPadding="var(--padding-base) var(--padding-21xl) var(--padding-smi) var(--padding-42xl)"
          propPadding1="0px 0px var(--padding-10xs)"
          propWidth="69px"
          propPadding2="var(--padding-10xs) 0px 0px"
          propPadding3="var(--padding-10xs) 0px 0px"
          propPadding4="var(--padding-9xs) var(--padding-9xl) 0px 0px"
          propPadding5="var(--padding-10xs) 0px 0px"
          propPadding6="var(--padding-9xs) var(--padding-6xl) 0px 0px"
          propPadding7="0px var(--padding-10xs)"
          propPadding8="var(--padding-10xs) 0px 0px"
        />
        <ValueSwapper1 />
        <FrameBorders />
        <ValueSwapper5
          filterFinderWidth="unset"
          filterFinderPadding="0px var(--padding-22xl) 0px var(--padding-21xl)"
          filterFinderAlignSelf="stretch"
          groupIconWidth="unset"
          groupIconFlex="1"
        />
        <div className={styles.arrowButton}>
          <div className={styles.textLabel1} />
        </div>
        <footer className={styles.inputField}>
          <div className={styles.pageInput}>
            <div className={styles.frameContainer}>
              <img
                className={styles.frameContainerChild}
                loading="lazy"
                alt=""
                src="/group-1.svg"
              />
            </div>
            <div className={styles.frameContainer1}>
              <img className={styles.vectorIcon} alt="" src="/vector-4.svg" />
            </div>
            <div className={styles.frameContainer2}>
              <img className={styles.vectorIcon1} alt="" src="/vector-5.svg" />
            </div>
            <div className={styles.frameContainer3}>
              <img
                className={styles.frameContainerItem}
                loading="lazy"
                alt=""
                src="/group-2@2x.png"
              />
            </div>
            <div className={styles.titleArea}>
              <div className={styles.pageContent}>
                <div className={styles.page}>{`Page `}</div>
                <div className={styles.of1}>1 of 1</div>
              </div>
            </div>
            <div className={styles.searchOptions}>
              <div className={styles.goButton}>
                <div className={styles.goToPage}>{`Go to Page: `}</div>
              </div>
              <div className={styles.nextPage}>
                <div className={styles.nextPageChild} />
                <div className={styles.emptySpace}>1</div>
              </div>
            </div>
            <div className={styles.chainsContainer}>
              <div className={styles.chainItemsGroup} />
              <div className={styles.go}>Go!</div>
            </div>
          </div>
        </footer>
      </main>
    </div>
  );
};

export default ChainManagementEditScreen;
