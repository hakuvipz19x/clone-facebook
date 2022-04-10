

import { BsFillPlusCircleFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";
import './HomeStory.scss';
import { Avatar } from '../../../../../assets/img'
function HomeStory() {
    return (
        <div className="homepage-newfeed__story">
            <ul className="homepage-newfeed__story-list">
                <li className="homepage-newfeed__story-item">
                    <div className="homepage-newfeed__story-create-wrapper">
                        <div className="homepage-newfeed__story-create-img-wrapper">
                            <img src={Avatar} alt="" className="homepage-newfeed__story-create-img" />
                        </div>
                        <div className="homepage-newfeed__story-create-title-wrapper">
                            <BsFillPlusCircleFill className="homepage-newfeed__story-create-title-btn" />
                            <div className="homepage-newfeed__story-create-title">Tạo tin</div>
                        </div>
                    </div>
                </li>
                <li className="homepage-newfeed__story-item">
                    <div className="homepage-newfeed__story-item-wrapper">
                        <div className="homepage-newfeed__story-item-img-wrapper">
                            <img src={Avatar} alt="" className="homepage-newfeed__story-item-img" />
                        </div>
                        <img src={Avatar} alt="" className="homepage-newfeed__story-item-avatar" />
                        <span className="homepage-newfeed__story-item-name">Nguyễn Quang Anh</span>
                    </div>
                </li>
                <li className="homepage-newfeed__story-item">
                    <div className="homepage-newfeed__story-item-wrapper">
                        <div className="homepage-newfeed__story-item-img-wrapper">
                            <img src={Avatar} alt="" className="homepage-newfeed__story-item-img" />
                        </div>
                        <img src={Avatar} alt="" className="homepage-newfeed__story-item-avatar" />
                        <span className="homepage-newfeed__story-item-name">Nguyễn Quang Anh</span>
                    </div>
                </li>
                <li className="homepage-newfeed__story-item">
                    <div className="homepage-newfeed__story-item-wrapper">
                        <div className="homepage-newfeed__story-item-img-wrapper">
                            <img src={Avatar} alt="" className="homepage-newfeed__story-item-img" />
                        </div>
                        <img src={Avatar} alt="" className="homepage-newfeed__story-item-avatar" />
                        <span className="homepage-newfeed__story-item-name">Nguyễn Quang Anh</span>
                    </div>
                </li>
                <li className="homepage-newfeed__story-item">
                    <div className="homepage-newfeed__story-item-wrapper">
                        <div className="homepage-newfeed__story-item-img-wrapper">
                            <img src={Avatar} alt="" className="homepage-newfeed__story-item-img" />
                        </div>
                        <img src={Avatar} alt="" className="homepage-newfeed__story-item-avatar" />
                        <span className="homepage-newfeed__story-item-name">Nguyễn Quang Anh</span>
                    </div>
                </li>
                {/* <li className="homepage-newfeed__story-item"></li>
                <li className="homepage-newfeed__story-item"></li>
                <li className="homepage-newfeed__story-item"></li> */}
            </ul>
            <div className="homepage-newfeed__story-more">
                <FiArrowRight className="homepage-newfeed__story-more-img"/>
            </div>
        </div>
    )
}

export default HomeStory