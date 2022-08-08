import React from "react";
import phase_1_bg from "../../images/roadmap_phase_1_bg.svg";
import phase_1_tab_bg from "../../images/roadmap_phase_1_tab_bg.svg";
import phase_1_mobile_bg from "../../images/roadmap_phase_1_mobile_bg.svg";
import phase_2_bg from "../../images/roadmap_phase_2_bg.svg";
import phase_2_tab_bg from "../../images/roadmap_phase_2_tab_bg.svg";
import phase_2_mobile_bg from "../../images/roadmap_phase_2_mobile_bg.svg";
import styles from "../../styles/Roadmap/Roadmap.module.css";
import Separator from "../Separator";
import RoadmapTitle from "./RoadmapTitle";

function Roadmap() {
  return (
    <>
      <div className={styles.roadmap} id="roadmap_section">
        <div className={styles.roadmap_bg}></div>
        <div className="container custom_container">
          <Separator />

          <div className={styles.r_cards}>
            <RoadmapTitle />

            <div className="row">
              <div className="col-md-6">
                <div className={styles.r_card}>
                  <div className={styles.rc_wrapper}>
                    <div className={styles.rc_content}>
                      <h4>Phase 1</h4>
                      <img src={phase_1_bg} alt="phase_1_bg" />
                      <img src={phase_1_tab_bg} alt="phase_1_tab_bg" />
                      <img src={phase_1_mobile_bg} alt="phase_1_mobile_bg" />

                      <div className={styles.rc_text}>
                        <div className={styles.rc_detail}>
                          <h5>AIKUJI TIME :</h5>
                          <p>
                            This period we look to plan and collaborate using
                            strategic partnerships with distinguished
                            personalities across many avenues including trusted
                            individuals within the NFT community, celebrities,
                            artists, influencers and other NFT projects.
                          </p>
                        </div>

                        <div className={styles.rc_detail}>
                          <h5>AIRDROP :</h5>
                          <p>
                            During Mint Phase, the AIKUJI team will airdrop 10
                            free AIKUJI NFTs among selected supporters.
                          </p>
                        </div>

                        <div className={styles.rc_detail}>
                          <h5>AIKUJI STORE :</h5>
                          <p>
                            AIKUJI streetwear collaboration will be launched for
                            our unique community to set us apart. This will
                            include Hoodies, T-shirts, art collectibles and so
                            much more!
                          </p>
                        </div>

                        <div className={styles.rc_detail}>
                          <h5>3D COLLECTIBLES :</h5>
                          <p>
                            Anime is awesome. Why not have something to
                            physically show off? Our community will have a say
                            what AIKUJI characters come to life. We will have
                            regular drops with each collection being limited to
                            increase its value and uniqueness for our community
                            members.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.r_card} ${styles.card_2}`}>
                  <div className={styles.rc_wrapper}>
                    <div className={styles.rc_content}>
                      <h4>Phase 2</h4>
                      <img src={phase_2_bg} alt="phase_2_bg" />
                      <img src={phase_2_tab_bg} alt="phase_2_tab_bg" />
                      <img src={phase_2_mobile_bg} alt="phase_2_mobile_bg" />

                      <div className={styles.rc_text}>
                        <div className={styles.rc_detail}>
                          <h5>ANIME MANGA :</h5>
                          <p>
                            We believe that we have something special when it
                            comes to our art, why don’t we all come together to
                            create a AIKUJI Manga series? After our 1st chapter
                            we will then have our community decide the rest!
                            Once the final chapters are completed, we will
                            publish the series and create a limited amount as a
                            collectable for each chapter exclusively for our
                            AIKUJI holders.
                          </p>
                        </div>

                        <div className={styles.rc_detail}>
                          <h5>AIKUJI LAUNCHPAD :</h5>
                          <p>
                            AIKUJI holders will gain early access to new and
                            upcoming NFT projects, Whitelist spots, even FREE
                            NFTs. Depending on the upcoming NFT projects we have
                            coming in the future, this may be a monthly, or even
                            a weekly event!
                          </p>
                        </div>

                        <div className={styles.rc_detail}>
                          <h5>GEN 2 COLLECTION UTILITY :</h5>
                          <p>
                            Our next collection drop will be HUGE! Some of our
                            holders will have early whitelist spots and even
                            FREE NFTs for this collection. You don’t want to
                            miss this!
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div className={`${styles.r_card} ${styles.card_3}`}>
                  <div className={styles.rc_wrapper}>
                    <div className={styles.rc_content}>
                      <h4>Phase 3</h4>
                      <img src={phase_1_bg} alt="phase_1_bg" />
                      <img src={phase_1_tab_bg} alt="phase_1_tab_bg" />
                      <img src={phase_1_mobile_bg} alt="phase_1_mobile_bg" />

                      <div className={styles.rc_text}>
                        <div className={styles.rc_detail}>
                          <h5>AIKUJI DAO :</h5>
                          <p>
                            The AIKUJI DAO will be created in order to allow the
                            new community on deciding the direction of AIKUJI,
                            its ecosystem and its future to continue developing
                            Web3 and the NFTs. A decided secondary sales
                            percentage will go into the community vault which
                            will be used in any area the DAO sees fit to
                            continue expanding AIKUJI. Each AIKUJI holder will
                            be granted voting power within the ecosystem,
                            allowing for truly decentralized project.
                          </p>
                        </div>

                        <div className={styles.rc_detail}>
                          <h5>WORLD OF METAVERSE :</h5>
                          <p>
                            AIKUJI will expand into the Metaverse by holding
                            exciting events exclusively for our
                            holders/community. We are always looking for the
                            next big thing…This could have us look at
                            collaborating with other projects to create
                            something unique and powerful!
                          </p>
                        </div>

                        <div className={styles.rc_detail}>
                          <h5>$AIKUJI :</h5>
                          <p>
                            Creation of the $AIKUJI currency for staking. Our
                            native-currency could be used for attributes in the
                            Metaverse, swap $AIKUJI for ETH or use it to
                            purchase from our store.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />
        </div>
      </div>
    </>
  );
}

export default Roadmap;
