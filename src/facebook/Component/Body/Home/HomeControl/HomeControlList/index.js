import { Link } from 'react-router-dom'
import { useState } from 'react'

import './HomeControlList.scss'
import {
    Avatar,
    HomeFriend, HomeAdCenter, HomeAdsManager, HomeBloodDonation, HomeCrisisResponse, HomeEmotionalHeath, HomeEvent, HomeFavorites, HomeFundraisers, HomeGaming, HomeGroup, HomeLive, HomeMarketplace, HomeMemories, HomeMessenger, HomeMessengerKid, HomeMostRecent, HomePages, HomePay, HomePlay, HomeRecentAd, HomeSaved, HomeScienceCenter, HomeWatch, HomeWeather
} from '../../../../../assets/img'

function HomeControlList() {

    const controlList = [
        {
            path: 'profile',
            name: 'Nguyễn Quang Anh',
            data: Avatar
        },
        {
            path: 'friends',
            name: 'Bạn bè',
            data: HomeFriend
        },
        {
            path: 'memories',
            name: 'Kỷ niệm',
            data: HomeMemories
        },
        {
            path: 'live',
            name: 'Video trực tiếp',
            data: HomeLive
        },

        {
            path: 'groups',
            name: 'Nhóm',
            data: HomeGroup
        },
        {
            path: 'watch',
            name: 'Watch',
            data: HomeWatch
        },
    ]

    const controlMoreList = [
        {
            path: 'fundraisers',
            name: 'Chiến dịch gây quỹ',
            data: HomeFundraisers
        },

        {
            path: 'play',
            name: 'Chơi game',
            data: HomePlay
        },
        {
            path: 'saved',
            name: 'Đã lưu',
            data: HomeSaved
        },
        {
            path: 'pay',
            name: 'Facebook Pay',
            data: HomePay
        },
        {
            path: 'mostRecent',
            name: 'Gần đây nhất',
            data: HomeMostRecent
        },

        {
            path: 'bloodDonation',
            name: 'Hiến máu',
            data: HomeBloodDonation
        },
        {
            path: 'recentAd',
            name: 'Quảng cáo gần đây',
            data: HomeRecentAd
        },
        {
            path: 'marketplace',
            name: 'Marketplace',
            data: HomeMarketplace
        },
        {
            path: 'messenger',
            name: 'Messenger',
            data: HomeMessenger
        },
        {
            path: 'messengerKid',
            name: 'Messenger nhí',
            data: HomeMessengerKid
        },
        {
            path: 'event',
            name: 'Sự kiện',
            data: HomeEvent
        },
        {
            path: 'emotionalHealth',
            name: 'Sức khỏe cảm xúc',
            data: HomeEmotionalHeath
        },
        {
            path: 'weather',
            name: 'Thời tiết',
            data: HomeWeather
        },
        {
            path: 'pages',
            name: 'Trang',
            data: HomePages
        },
        {
            path: 'adManager',
            name: 'Trình quản lý quảng cáo',
            data: HomeAdsManager
        },
        {
            path: 'scienceCenter',
            name: 'Trung tâm khoa học khí hậu',
            data: HomeScienceCenter
        },
        {
            path: 'adCenter',
            name: 'Trung tâm quảng cáo',
            data: HomeAdCenter
        },
        {
            path: 'crisisResponse',
            name: 'Ứng phó khẩn cấp',
            data: HomeCrisisResponse
        },
        {
            path: 'gaming',
            name: 'Video chơi game',
            data: HomeGaming
        },
        {
            path: 'favorites',
            name: 'Yêu thích',
            data: HomeFavorites
        },
    ]
    const [showMore, setShowMore] = useState(false)

    return (
        <>
            <ul className="homepage-control__nav-list">
                {controlList.map((item, index) => (
                    <li className="homepage-control__nav-item"
                        key={index}
                    >
                        <Link to={`/${item.path}`} className="homepage-control__nav-link">
                            <img src={item.data} alt='alter' className="homepage-control__nav-img" />
                            <span className="homepage-control__nav-detail">{item.name}</span>
                        </Link>
                    </li>
                ))}
                {showMore && controlMoreList.map((item, index) => (
                    <li className="homepage-control__nav-item"
                        key={index}
                    >
                        <Link to={`/${item.path}`} className="homepage-control__nav-link">
                            <img src={item.data} alt='alter' className="homepage-control__nav-img" />
                            <span className="homepage-control__nav-detail">{item.name}</span>
                        </Link>
                    </li>
                ))}
                <li className="homepage-control__nav-item">
                    <div className="homepage-control__nav-more" onClick={() => setShowMore(!showMore)}>
                        {showMore === false &&
                            <>
                                <div className="homepage-control__nav-more-img">
                                    <svg viewBox="0 0 16 16" width="1em" height="1em"><g fillRule="evenodd" transform="translate(-448 -544)"><path fillRule="nonzero" d="M452.707 549.293a1 1 0 0 0-1.414 1.414l4 4a1 1 0 0 0 1.414 0l4-4a1 1 0 0 0-1.414-1.414L456 552.586l-3.293-3.293z"></path></g></svg>
                                </div>
                                <span className="homepage-control__nav-detail">Xem thêm</span>
                            </>
                        }
                        {showMore === true &&
                            <>
                                <div className="homepage-control__nav-more-img">
                                    <svg viewBox="0 0 20 20" width="1em" height="1em"><path d="M15.47 12.2 10 6.727 4.53 12.2a.75.75 0 0 1-1.06-1.061l6-6a.751.751 0 0 1 1.06 0l6 6a.75.75 0 0 1-1.06 1.061z"></path></svg>
                                </div>
                                <span className="homepage-control__nav-detail">Ẩn bớt</span>
                            </>
                        }
                    </div>
                </li>
            </ul>
        </>
    )
}

export default HomeControlList