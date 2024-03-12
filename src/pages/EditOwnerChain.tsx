import { FunctionComponent, useState } from "react";
import { TextField, Icon } from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import GroupComponent4 from "../components/GroupComponent4";
import GroupComponent3 from "../components/GroupComponent3";
import DataTree from "../components/DataTree";
import TextBaselineNode from "../components/TextBaselineNode";
import styles from "./EditOwnerChain.module.css";

const EditOwnerChain: FunctionComponent = () => {
  const [decisionNodeDateTimePickerValue, setDecisionNodeDateTimePickerValue] =
    useState(new Date("2024-01-29"));
  const [frameDateTimePickerValue, setFrameDateTimePickerValue] = useState(
    new Date("2024-01-29")
  );
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className={styles.editOwnerChain}>
        <main className={styles.conditionalBranch}>
          <section className={styles.iterationLoop}>
            <h3 className={styles.owners}>Owner(s)</h3>
            <img
              className={styles.frameIcon}
              loading="lazy"
              alt=""
              src="/vector.svg"
            />
            <div className={styles.eventNode}>
              <img
                className={styles.overviewTextIcon}
                loading="lazy"
                alt=""
                src="/vector-1.svg"
              />
              <img
                className={styles.overviewIcon}
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
            <div className={styles.vehicles}>Vehicles</div>
            <div className={styles.jobCards}>Job Cards</div>
            <div className={styles.management}>Management</div>
            <img
              className={styles.liquidAssetsIcon}
              loading="lazy"
              alt=""
              src="/vector-2.svg"
            />
            <img
              className={styles.iterationLoopChild}
              loading="lazy"
              alt=""
              src="/line-1.svg"
            />
            <img
              className={styles.maskGroupIcon}
              loading="lazy"
              alt=""
              src="/mask-group.svg"
            />
            <GroupComponent4 />
            <GroupComponent3
              robertBoschGmbH="Robert Bosch GmbH"
              prop="5"
              prop1="20"
              germany="Germany"
            />
            <GroupComponent3
              robertBoschGmbH="Steller Automotive"
              prop="12"
              prop1="28"
              germany="Italy"
              propTop="423px"
              propPadding="0px var(--padding-base) 0px var(--padding-mid)"
              propPadding1="0px var(--padding-10xs)"
            />
            <GroupComponent4 branchNodeTop="528px" />
            <div className={styles.rectangleParent}>
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
                  <div className={styles.aggregatorNodeParent}>
                    <img
                      className={styles.aggregatorNodeIcon}
                      loading="lazy"
                      alt=""
                      src="/vector-11.svg"
                    />
                    <div className={styles.compositorNode}>
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
            <GroupComponent3
              robertBoschGmbH="Steller Automotive"
              prop="12"
              prop1="28"
              germany="Italy"
              propTop="738px"
              propPadding="0px var(--padding-base) 0px var(--padding-mid)"
              propPadding1="0px var(--padding-10xs)"
            />
            <GroupComponent4 branchNodeTop="843px" />
            <div className={styles.formulaNode}>
              <input className={styles.arrowleft} type="text" />
              <div className={styles.vectorParent}>
                <img className={styles.vectorIcon} alt="" src="/vector-3.svg" />
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
                <button className={styles.textCluster}>
                  <div className={styles.textClusterChild} />
                  <div className={styles.editOwner}>Edit Owner</div>
                </button>
                <div className={styles.functionChain}>
                  <DataTree
                    connectionCreator="/vector-91.svg"
                    line24="/line-24.svg"
                  />
                  <div className={styles.decisionTester}>
                    <div className={styles.filterChain}>
                      <div className={styles.filterChainChild} />
                      <div className={styles.errorHandler}>
                        <div className={styles.dataTransformer}>
                          <div className={styles.name}>Name</div>
                          <div className={styles.imageSplitter}>
                            <div className={styles.functionCaller}>
                              <div className={styles.dataSlicer} />
                              <div className={styles.location1}>Location</div>
                            </div>
                            <div className={styles.errorHandler1}>
                              <div className={styles.dataCombiner} />
                              <div className={styles.textComparator}>
                                <div className={styles.createdOn}>
                                  Created On
                                </div>
                                <div className={styles.connectionRemover} />
                              </div>
                              <div className={styles.sequenceArranger}>
                                <div className={styles.decisionBuilder}>
                                  <div
                                    className={styles.decisionBuilderChild}
                                  />
                                </div>
                                <div className={styles.updatedOn}>
                                  Updated On
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className={styles.errorPredictor}>
                        <div className={styles.dataJoiner}>
                          <div className={styles.textSeparator}>
                            <div className={styles.dataAggregator}>
                              <div className={styles.inputProcessor}>
                                <div className={styles.outputGenerator}>
                                  <div className={styles.conditionChecker}>
                                    <div className={styles.loopControl}>
                                      <img
                                        className={styles.functionCallIcon}
                                        alt=""
                                        src="/vector-15.svg"
                                      />
                                    </div>
                                    <div className={styles.aagGpc}>AAG GPC</div>
                                  </div>
                                  <div className={styles.assignmentOperator}>
                                    <div className={styles.logicalOperator}>
                                      <div className={styles.norway}>
                                        Norway
                                      </div>
                                      <div className={styles.mergeNode}>
                                        <div className={styles.constantNode}>
                                          <div
                                            className={styles.constantNodeChild}
                                          />
                                          <div className={styles.textNode} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.comparisonOperator}>
                                      20-02-2024
                                    </div>
                                    <div className={styles.comparisonOperator1}>
                                      20-02-2024
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className={styles.shapeNode} />
                              <div className={styles.containerNode}>
                                <div className={styles.lineNode}>
                                  <div className={styles.circleNode}>
                                    <div className={styles.arrowNode}>
                                      <img
                                        className={styles.textboxNodeIcon}
                                        alt=""
                                        src="/vector-15.svg"
                                      />
                                    </div>
                                    <div className={styles.robertBosch}>
                                      Robert Bosch
                                    </div>
                                  </div>
                                  <div className={styles.vectorNode}>
                                    <div className={styles.germany1}>
                                      Germany
                                    </div>
                                  </div>
                                  <div className={styles.rectangleNode}>
                                    20-02-2024
                                  </div>
                                  <div className={styles.rectangleNode1}>
                                    20-02-2024
                                  </div>
                                </div>
                              </div>
                            </div>
                            <div className={styles.sliceNode}>
                              <div className={styles.blendNode} />
                              <div className={styles.effectNode}>
                                <div className={styles.transformNode}>
                                  <div className={styles.colorPickerNode}>
                                    <div className={styles.fillNode}>
                                      <img
                                        className={styles.strokeNodeIcon}
                                        loading="lazy"
                                        alt=""
                                        src="/vector-15.svg"
                                      />
                                    </div>
                                    <div className={styles.aagGpc1}>
                                      AAG GPC
                                    </div>
                                  </div>
                                  <div className={styles.rotationNode}>
                                    <div className={styles.positionNode}>
                                      <div className={styles.norway1}>
                                        Norway
                                      </div>
                                      <div className={styles.distributionNode}>
                                        <div
                                          className={styles.sizeConstraintNode}
                                        >
                                          <div
                                            className={
                                              styles.sizeConstraintNodeChild
                                            }
                                          />
                                          <div className={styles.frameNode} />
                                        </div>
                                      </div>
                                    </div>
                                    <div className={styles.scalingNode}>
                                      20-02-2024
                                    </div>
                                    <div className={styles.scalingNode1}>
                                      20-02-2024
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div className={styles.anchoringNode}>
                          <div className={styles.anchoringNodeChild} />
                          <div className={styles.guideNode} />
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.smartAnchorNode}>
                    <div className={styles.layoutGridNode}>
                      <button className={styles.autoLayoutNode}>
                        <button className={styles.groupButton}>
                          <div className={styles.frameChild4} />
                          <img
                            className={styles.frameChild5}
                            alt=""
                            src="/group-88.svg"
                          />
                          <div className={styles.addChain}>Add Chain</div>
                        </button>
                      </button>
                      <TextBaselineNode />
                      <div className={styles.outputCombiner}>
                        <div className={styles.valueComparator}>
                          <div className={styles.createdOn1}>Created On</div>
                          <div className={styles.decisionNode}>
                            <DatePicker
                              value={decisionNodeDateTimePickerValue}
                              onChange={(newValue: any) => {
                                setDecisionNodeDateTimePickerValue(newValue);
                              }}
                              sx={{
                                fieldset: {
                                  borderColor: "#dedede",
                                  borderTopWidth: 1,
                                  borderRightWidth: 1,
                                  borderBottomWidth: 1,
                                  borderLeftWidth: 1,
                                },
                                "&:hover": {
                                  fieldset: { borderColor: "#dedede" },
                                  ".MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#dedede",
                                  },
                                },
                                "& input::placeholder": {
                                  textColor: "#737373",
                                  fontSize: 16,
                                },
                                input: {
                                  color: "#737373",
                                  fontSize: 16,
                                  textAlign: "left",
                                  fontWeight: "500",
                                },
                                "& .MuiInputBase-root": {
                                  backgroundColor: "#eee",
                                  height: 45,
                                  gap: "8px",
                                  flexDirection: { flexDirection: "row" },
                                },
                              }}
                              slotProps={{
                                textField: {
                                  size: "medium",
                                  fullWidth: false,
                                  required: false,
                                  autoFocus: false,
                                  error: false,
                                  color: "primary",
                                },
                                openPickerIcon: {
                                  component: () => <></>,
                                },
                              }}
                            />
                          </div>
                        </div>
                        <div className={styles.valueComparator1}>
                          <div className={styles.updatedOn1}>Updated On</div>
                          <div className={styles.frame}>
                            <DatePicker
                              value={frameDateTimePickerValue}
                              onChange={(newValue: any) => {
                                setFrameDateTimePickerValue(newValue);
                              }}
                              sx={{
                                fieldset: {
                                  borderColor: "#dedede",
                                  borderTopWidth: 1,
                                  borderRightWidth: 1,
                                  borderBottomWidth: 1,
                                  borderLeftWidth: 1,
                                },
                                "&:hover": {
                                  fieldset: { borderColor: "#dedede" },
                                  ".MuiOutlinedInput-notchedOutline": {
                                    borderColor: "#dedede",
                                  },
                                },
                                "& input::placeholder": {
                                  textColor: "#737373",
                                  fontSize: 16,
                                },
                                input: {
                                  color: "#737373",
                                  fontSize: 16,
                                  textAlign: "left",
                                  fontWeight: "500",
                                },
                                "& .MuiInputBase-root": {
                                  backgroundColor: "#eee",
                                  height: 45,
                                  gap: "8px",
                                  flexDirection: { flexDirection: "row" },
                                },
                              }}
                              slotProps={{
                                textField: {
                                  size: "medium",
                                  fullWidth: false,
                                  required: false,
                                  autoFocus: false,
                                  error: false,
                                  color: "primary",
                                },
                                openPickerIcon: {
                                  component: () => <></>,
                                },
                              }}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className={styles.constantNode1}>
                    <div className={styles.variableNode} />
                    <div className={styles.errorHandler2}>
                      <div className={styles.filterNode}>
                        <button className={styles.mappingNode}>
                          <div className={styles.mappingNodeChild} />
                          <div className={styles.save}>Save</div>
                        </button>
                        <button className={styles.mappingNode1}>
                          <div className={styles.mappingNodeItem} />
                          <div className={styles.close}>Close</div>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>
        <div className={styles.quickActions} />
        <div className={styles.sequenceNode} />
        <footer className={styles.matrixNode}>
          <div className={styles.menuOptionsRectangleFrame} />
          <div className={styles.tupleNode}>
            <div className={styles.setNode}>
              <div className={styles.stackNode}>
                <img
                  className={styles.stackNodeChild}
                  loading="lazy"
                  alt=""
                  src="/group-1.svg"
                />
              </div>
              <div className={styles.stackNode1}>
                <img
                  className={styles.vectorIcon1}
                  loading="lazy"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
              <div className={styles.stackNode2}>
                <img
                  className={styles.creditcardsolidFrameIcon}
                  loading="lazy"
                  alt=""
                  src="/vector-5.svg"
                />
              </div>
              <div className={styles.stackNode3}>
                <img
                  className={styles.stackNodeItem}
                  loading="lazy"
                  alt=""
                  src="/group-2@2x.png"
                />
              </div>
              <div className={styles.dictionaryNode}>
                <div className={styles.hashTableNode}>
                  <div className={styles.page}>{`Page `}</div>
                  <div className={styles.of1}>1 of 1</div>
                </div>
                <div className={styles.goToPage}>{`Go to Page: `}</div>
              </div>
              <div className={styles.heapNode}>
                <div className={styles.priorityQueueNode}>
                  <input className={styles.creditcardsolid} type="text" />
                  <div className={styles.availableCredit}>1</div>
                </div>
              </div>
              <div className={styles.redeBlackTreeNode}>
                <div className={styles.bTreeNode} />
                <div className={styles.go}>Go!</div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </LocalizationProvider>
  );
};

export default EditOwnerChain;
