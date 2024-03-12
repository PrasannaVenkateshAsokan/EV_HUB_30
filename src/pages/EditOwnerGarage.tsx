import { FunctionComponent } from "react";
import GroupComponent6 from "../components/GroupComponent6";
import GroupComponent5 from "../components/GroupComponent5";
import DataTree from "../components/DataTree";
import TextBaselineNode from "../components/TextBaselineNode";
import ValueComparator from "../components/ValueComparator";
import styles from "./EditOwnerGarage.module.css";

const EditOwnerGarage: FunctionComponent = () => {
  return (
    <div className={styles.editOwnerGarage}>
      <main className={styles.valueContainer}>
        <h3 className={styles.owners}>Owner(s)</h3>
        <img
          className={styles.errorTransferIcon}
          loading="lazy"
          alt=""
          src="/vector.svg"
        />
        <div className={styles.eventTransfer}>
          <img
            className={styles.functionTransferIcon}
            loading="lazy"
            alt=""
            src="/vector-1.svg"
          />
          <img
            className={styles.mappingTreeIcon}
            loading="lazy"
            alt=""
            src="/vector-2.svg"
          />
        </div>
        <div className={styles.searchByOwner}>Search by Owner</div>
        <img
          className={styles.image1Icon}
          loading="lazy"
          alt=""
          src="/image-1@2x.png"
        />
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src="/mask-group.svg"
        />
        <GroupComponent6 />
        <GroupComponent5
          robertBoschGmbH="Robert Bosch GmbH"
          prop="5"
          prop1="20"
          germany="Germany"
        />
        <GroupComponent5
          robertBoschGmbH="Steller Automotive"
          prop="12"
          prop1="28"
          germany="Italy"
          propTop="423px"
          propPadding="0px var(--padding-base) 0px var(--padding-mid)"
          propPadding1="0px var(--padding-10xs)"
        />
        <GroupComponent6 conditionalNodeTop="528px" />
        <section className={styles.rectangleParent}>
          <div className={styles.frameChild} />
          <div className={styles.ownerParent}>
            <div className={styles.owner}>Owner</div>
            <div className={styles.robertBoschGmbh}>Robert Bosch GmbH</div>
          </div>
          <div className={styles.frameParent}>
            <div className={styles.image21Parent}>
              <img
                className={styles.image21Icon}
                alt=""
                src="/image-21@2x.png"
              />
              <div className={styles.frameItem} />
            </div>
            <div className={styles.frameWrapper}>
              <div className={styles.chainsParent}>
                <div className={styles.chains}>Chains</div>
                <div className={styles.wrapper}>
                  <div className={styles.div}>5</div>
                </div>
              </div>
            </div>
            <div className={styles.lineWrapper}>
              <div className={styles.frameInner} />
            </div>
            <div className={styles.frameContainer}>
              <div className={styles.garagesParent}>
                <div className={styles.garages}>Garages</div>
                <div className={styles.container}>
                  <div className={styles.div1}>20</div>
                </div>
              </div>
            </div>
            <div className={styles.lineContainer}>
              <div className={styles.lineDiv} />
            </div>
            <div className={styles.frameDiv}>
              <div className={styles.locationParent}>
                <div className={styles.location}>Location</div>
                <div className={styles.germanyWrapper}>
                  <div className={styles.germany}>Germany</div>
                </div>
              </div>
            </div>
            <div className={styles.frameChild1} />
            <div className={styles.frameWrapper1}>
              <div className={styles.eventLoopParent}>
                <img
                  className={styles.eventLoopIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-11.svg"
                />
                <div className={styles.stateManager}>
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
        </section>
        <GroupComponent5
          robertBoschGmbH="Steller Automotive"
          prop="12"
          prop1="28"
          germany="Italy"
          propTop="738px"
          propPadding="0px var(--padding-base) 0px var(--padding-mid)"
          propPadding1="0px var(--padding-10xs)"
        />
        <GroupComponent6 conditionalNodeTop="843px" />
        <section className={styles.flowTree}>
          <input className={styles.graphBuilder} type="text" />
          <div className={styles.vectorParent}>
            <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.management}>Management</div>
            <img className={styles.vectorIcon1} alt="" src="/vector-2.svg" />
            <img className={styles.lineIcon} alt="" src="/line-1.svg" />
            <img
              className={styles.image21Icon1}
              alt=""
              src="/image-21@2x.png"
            />
            <div className={styles.rectangleGroup}>
              <div className={styles.rectangleDiv} />
              <div className={styles.noLogo}>No Logo</div>
            </div>
            <div className={styles.rectangleContainer}>
              <div className={styles.frameChild2} />
              <div className={styles.noLogo1}>No Logo</div>
            </div>
            <div className={styles.frameChild3} />
            <button className={styles.designSpace}>
              <div className={styles.designSpaceChild} />
              <div className={styles.editOwner}>Edit Owner</div>
            </button>
            <div className={styles.shapeCollection}>
              <DataTree
                connectionCreator="/vector-13.svg"
                line24="/line-24.svg"
                propPadding="var(--padding-7xs) var(--padding-3xs) var(--padding-8xs) var(--padding-6xs)"
                propPadding1="0px var(--padding-4xs) 0px 0px"
                propHeight="32px"
                propPadding2="0px 0px var(--padding-12xs)"
              />
              <div className={styles.progressBar}>
                <div className={styles.dividerLine}>
                  <div className={styles.dividerLineChild} />
                  <div className={styles.dividerLineItem} />
                  <div className={styles.imageMap}>
                    <div className={styles.popover}>
                      <div className={styles.interactiveShape}>
                        <div className={styles.name}>Name</div>
                      </div>
                      <div className={styles.videoPlayer}>
                        <div className={styles.audioPlayer}>
                          <div className={styles.calendarPicker} />
                          <div className={styles.timePicker}>
                            <div className={styles.location1}>Location</div>
                          </div>
                        </div>
                        <div className={styles.stepper}>
                          <div className={styles.sliderFader} />
                          <div className={styles.carousel}>
                            <div className={styles.gallery}>
                              <div className={styles.createdOn}>Created On</div>
                            </div>
                            <div className={styles.checkboxGroup} />
                          </div>
                          <div className={styles.radioButtonGroup}>
                            <div className={styles.updatedOn}>Updated On</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.sliderComponent}>
                    <div className={styles.sliderComponentChild} />
                  </div>
                  <div className={styles.sliderThumb}>
                    <div className={styles.progressCircle}>
                      <div className={styles.dataAggregator}>
                        <div className={styles.textNodeGroup}>
                          <div className={styles.shapeCollection1}>
                            <div className={styles.frameSet}>
                              <img
                                className={styles.iconLibrary}
                                loading="lazy"
                                alt=""
                                src="/vector-14.svg"
                              />
                            </div>
                            <div className={styles.aagGpc}>AAG GPC</div>
                          </div>
                          <div className={styles.fillColor}>
                            <div className={styles.imageGroup}>
                              <div className={styles.norway}>Norway</div>
                              <div className={styles.pathCombination}>
                                <div className={styles.vectorObjects}>
                                  <div className={styles.vectorObjectsChild} />
                                  <div className={styles.symbolRepository} />
                                </div>
                              </div>
                            </div>
                            <div className={styles.textBlockSet}>
                              20-02-2024
                            </div>
                            <div className={styles.textBlockSet1}>
                              20-02-2024
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.lineParent}>
                        <div className={styles.frameChild4} />
                        <div className={styles.frameChild5} />
                        <div className={styles.blendModes}>
                          <div className={styles.textEffects}>
                            <div className={styles.shapeTransforms}>
                              <div className={styles.starAutoWorks}>
                                Star Auto Works
                              </div>
                            </div>
                            <div className={styles.proximitySensor}>
                              <div className={styles.oslo}>Oslo</div>
                            </div>
                            <div className={styles.vectorPaths}>20-02-2024</div>
                            <div className={styles.symbolInstance}>
                              20-02-2024
                            </div>
                          </div>
                        </div>
                        <div className={styles.blendModes1}>
                          <div className={styles.blendModesChild} />
                        </div>
                        <div className={styles.blendModes2}>
                          <div className={styles.frameGroup}>
                            <div className={styles.shelbyGarageWrapper}>
                              <div className={styles.shelbyGarage}>
                                Shelby Garage
                              </div>
                            </div>
                            <div className={styles.bergenWrapper}>
                              <div className={styles.bergen}>Bergen</div>
                            </div>
                            <div className={styles.div2}>20-02-2024</div>
                            <div className={styles.div3}>20-02-2024</div>
                          </div>
                        </div>
                        <div className={styles.blendModes3}>
                          <div className={styles.blendModesItem} />
                        </div>
                        <button className={styles.groupButton}>
                          <div className={styles.frameChild6} />
                          <img
                            className={styles.frameChild7}
                            alt=""
                            src="/group-88.svg"
                          />
                          <div className={styles.addGarage}>Add Garage</div>
                        </button>
                      </div>
                    </div>
                    <div className={styles.shapeRounding}>
                      <div className={styles.groupingTools}>
                        <div className={styles.symbolMaster}>
                          <div className={styles.textEffectsController}>
                            <img
                              className={styles.shapeDivisionsIcon}
                              loading="lazy"
                              alt=""
                              src="/vector-15.svg"
                            />
                          </div>
                          <div className={styles.aagGpc1}>AAG GPC</div>
                        </div>
                        <div className={styles.norway1}>Norway</div>
                        <div className={styles.imageFilters}>
                          <div className={styles.shapeSlicing}>20-02-2024</div>
                          <div className={styles.shapeSlicing1}>20-02-2024</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.layerVisibility}>
                <div className={styles.proximityControl}>
                  <button className={styles.rectangleParent1}>
                    <div className={styles.frameChild8} />
                    <img
                      className={styles.frameChild9}
                      alt=""
                      src="/group-88.svg"
                    />
                    <div className={styles.addChain}>Add Chain</div>
                  </button>
                  <TextBaselineNode
                    propGap="1px 0px"
                    propAlignSelf="stretch"
                    propWidth="unset"
                    propPadding="0px var(--padding-14xl) 0px var(--padding-15xl)"
                    propAlignSelf1="stretch"
                  />
                </div>
              </div>
              <div className={styles.shapeCombining}>
                <div className={styles.layerOrdering}>
                  <ValueComparator createdOn="Created On" />
                  <ValueComparator
                    createdOn="Updated On"
                    propPadding="var(--padding-xs) var(--padding-sm) var(--padding-smi)"
                  />
                </div>
              </div>
              <div className={styles.conditionSplitter}>
                <div className={styles.inputFilter} />
              </div>
              <div className={styles.outputMerger}>
                <div className={styles.loopControl}>
                  <div className={styles.branchingTree}>
                    <div className={styles.branchingTreeChild} />
                    <div className={styles.save}>Save</div>
                  </div>
                  <div className={styles.branchingTree1}>
                    <div className={styles.branchingTreeItem} />
                    <div className={styles.close}>Close</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className={styles.logicTree} />
      <div className={styles.logicTree1} />
      <div className={styles.functionCall} />
      <div className={styles.variableAssignment}>
        <div className={styles.ifStatement}>
          <div className={styles.elseStatement}>
            <img
              className={styles.elseStatementChild}
              loading="lazy"
              alt=""
              src="/group-1.svg"
            />
          </div>
          <div className={styles.elseStatement1}>
            <img
              className={styles.vectorIcon2}
              loading="lazy"
              alt=""
              src="/vector-4.svg"
            />
          </div>
          <div className={styles.elseStatement2}>
            <img
              className={styles.vectorIcon3}
              loading="lazy"
              alt=""
              src="/vector-5.svg"
            />
          </div>
          <div className={styles.elseStatement3}>
            <img
              className={styles.elseStatementItem}
              loading="lazy"
              alt=""
              src="/group-2@2x.png"
            />
          </div>
          <div className={styles.forLoop}>
            <div className={styles.switchCase}>
              <div className={styles.page}>{`Page `}</div>
              <div className={styles.of1}>1 of 1</div>
            </div>
            <div className={styles.goToPage}>{`Go to Page: `}</div>
          </div>
          <div className={styles.cosineFunction}>
            <div className={styles.logarithmicFunction}>
              <input className={styles.exponentialFunction} type="text" />
              <div className={styles.randomNumberGenerator}>1</div>
            </div>
          </div>
          <div className={styles.constantValue}>
            <div className={styles.variableValue} />
            <div className={styles.go}>Go!</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default EditOwnerGarage;
