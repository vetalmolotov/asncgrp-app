import React from "react";
import HeaderContent from "../../HeaderContent/HeaderContent";
import './content-main.scss'
import {IconFootball, IconList} from "../../../assets/imgComponents/iconsCommon";
import ResultLabel from "../../ResultLabel/ResultLabel";

const ContentMain = () => {

    return <>
        <main className="app-content-main content-main">
            {/*<HeaderContent>*/}
            {/*    <p>main header</p>*/}
            {/*    <div className="header-content-divider"></div>*/}
            {/*    <p>main header 2</p>*/}
            {/*</HeaderContent>*/}
            {/*<p>main</p>*/}
            {/*<br/>*/}

            <div className="content-main-grid tbl-content">

                {/* table heading */}
                <div className="tbl-content-h">
                    <h5>Football</h5>
                </div>
                <div className="tbl-content-h">
                    <h5>All Leagues</h5>
                </div>
                <div className="tbl-content-h">
                    <h5>Match Result</h5>
                </div>
                <div className="tbl-content-h"></div>
                <div className="tbl-content-h">
                    <h5>Total Goals</h5>
                </div>
                <div className="tbl-content-h"></div>
                <div className="tbl-content-h">
                    <h5>Goals Handicap 3 Way</h5>
                </div>
                <div className="tbl-content-h"></div>

                {/* table footnote */}
                <div className="tbl-content-n"></div>
                <div className="tbl-content-n"></div>
                <div className="tbl-content-n">
                    <p>1</p>
                    <p>X</p>
                    <p>2</p>
                </div>
                <div className="tbl-content-n"></div>
                <div className="tbl-content-n">
                    <p>Over</p>
                    <p></p>
                    <p>Under</p>
                </div>
                <div className="tbl-content-n"></div>
                <div className="tbl-content-n">
                    <p></p>
                    <p>1</p>
                    <p>X</p>
                    <p>2</p>
                </div>
                <div className="tbl-content-n"></div>


                {/* table content */}
                <div className="tbl-content-c content-date divider">
                    <p>fssf</p>
                    <strong>fsfs</strong>
                </div>
                <div className="tbl-content-c content-league">
                    <div className="content-league-name">
                        <p>dsd</p>
                        <p>ds</p>
                    </div>
                    <div className="content-league-info">
                        <IconFootball />
                        fsffsf
                    </div>
                </div>
                <div className="tbl-content-c content-result">
                    <ResultLabel
                        data={'4.49'}
                        fall={true}
                    />
                    <ResultLabel data={'3.21'} />
                    <ResultLabel
                        data={'1.50'}
                        fall={true}
                    />
                </div>
                <div className="tbl-content-c"></div>
                <div className="tbl-content-c  content-total">
                    <ResultLabel
                        data={'2.10'}
                        filled={true}
                    />
                    <ResultLabel data={'2.5'} />
                    <ResultLabel
                        data={'6.05'}
                    />
                </div>
                <div className="tbl-content-c"></div>
                <div className="tbl-content-c content-handicaps">
                    <ResultLabel
                        data={'0.5'}
                        transparent={true}
                    />
                    <ResultLabel data={'4.23'} />
                    <ResultLabel data={'4.90'} />
                    <ResultLabel data={'7.75'} />
                </div>
                <div className="tbl-content-c content-list">
                    <ul className="content-list-additional">
                        <li><IconList /></li>
                        <li>+203</li>
                    </ul>
                </div>

                {/* table content */}
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>

                {/* table content */}
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>

                {/* table content */}
                <div>9</div>
                <div>10</div>
                <div>11</div>
                <div>12</div>
                <div>13</div>
                <div>14</div>
                <div>15</div>
                <div>16</div>
            </div>

        </main>
    </>
}

export default ContentMain