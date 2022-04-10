import './MoreAccount.scss'
import { Link } from 'react-router-dom'
import { useContext, useState, useRef, useEffect } from 'react'
import clsx from 'clsx'

import { Avatar } from '../../../../../assets/img/'
import Context from '../../../../../Context/Context'

function MoreAccount() {
    const privacyList = [
        {
            path: '/privacy',
            name: 'Quyền riêng tư',
        },
        {
            path: '/policies',
            name: 'Điều khoản',
        },
        {
            path: '/business',
            name: 'Quảng cáo',
        },
        {
            path: '/advertise',
            name: `Lựa chọn quảng cáo`,
        },
        {
            path: '/cookies',
            name: 'Cookie',
        }
    ]

    const privacyMoreList = [
        {
            path: '/about',
            name: 'Giới thiệu',
        },
        {
            path: '/careers',
            name: 'Nghề nghiệp',
        },
        {
            path: '/develope',
            name: 'Nhà phát triển',
        },
        {
            path: '/help',
            name: `Trợ giúp`,
        }
    ]
    const context = useContext(Context)
    const [activeAvatar, setActiveAvatar] = context.activeMainNav
    const [activeSettingNav, setActiveSettingNav] = context.activeSettingNav

    const spanRef = useRef()
    const privacyMoreListRef = useRef()
    const [activeMore, setActiveMore] = useState(false)
    const activeRef = useRef()
    activeRef.current = activeMore

    const setDefaultSettingNav = () => {
        setActiveSettingNav({
            settingName: '',
            data: undefined
        })
    }

    const handleAvatarClick = () => {
        setDefaultSettingNav();
        setActiveAvatar('profile')
    }

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (activeRef.current === true
                && !spanRef.current.contains(e.target)
                && !privacyMoreListRef.current.contains(e.target)) setActiveMore(false)
        }
        window.addEventListener('click', handleClickOutside)
    }, [])

    return (
        <div className="settingNav-moreAccount">
            <Link to="/profile" className="settingNav-moreAccount__avatar-link"
                onClick={handleAvatarClick}
            >
                <img src={Avatar} alt="Avatar" className="settingNav-moreAccount__avatar-img" />
                <div className="settingNav-moreAccount__name-wrapper">
                    <span className="settingNav-moreAccount__name">Nguyễn Quang Anh</span><br />
                    <span className="settingNav-moreAccount__description">Xem trang cá nhân của bạn</span>
                </div>
            </Link>
            <div className="settingNav-moreAccount__feedback">
                <div className="settingNav-moreAccount__feedback-icon-wrapper">
                    <i className="settingNav-moreAccount__feedback-icon"></i>
                </div>
                <div className="settingNav-moreAccount__feedback-wrapper">
                    <span className="settingNav-moreAccount__feedback-title">Đóng góp ý kiến</span><br />
                    <span className="settingNav-moreAccount__feedback-description">Hãy chung tay cải thiện Facebook.</span>
                </div>
            </div>
            <ul className="settingNav-moreAccount__list-setting">
                <li className="settingNav-moreAccount__item-setting">
                    <div className="settingNav-moreAccount__item-wrapper">
                        <div className="settingNav-moreAccount__item-icon">
                            <i className="settingNav-moreAccount__private-icon"></i>
                        </div>
                        <span className="settingNav-moreAccount__item-name">{`Cài đặt & quyền riêng tư`}</span>
                    </div>
                    <i className="settingNav-moreAccount__arrow-icon"></i>
                </li>
                <li className="settingNav-moreAccount__item-setting">
                    <div className="settingNav-moreAccount__item-wrapper">
                        <div className="settingNav-moreAccount__item-icon">
                            <i className="settingNav-moreAccount__help-icon"></i>
                        </div>
                        <span className="settingNav-moreAccount__item-name">{`Trợ giúp & hỗ trợ`}</span>
                    </div>
                    <i className="settingNav-moreAccount__arrow-icon"></i>
                </li>
                <li className="settingNav-moreAccount__item-setting">
                    <div className="settingNav-moreAccount__item-wrapper">
                        <div className="settingNav-moreAccount__item-icon">
                            <i className="settingNav-moreAccount__screen-icon"></i>
                        </div>
                        <span className="settingNav-moreAccount__item-name">{`Màn hình & trợ năng`}</span>
                    </div>
                    <i className="settingNav-moreAccount__arrow-icon"></i>
                </li>
                <li className="settingNav-moreAccount__item-setting">
                    <div className="settingNav-moreAccount__item-wrapper">
                        <div className="settingNav-moreAccount__item-icon">
                            <i className="settingNav-moreAccount__logout-icon"></i>
                        </div>
                        <span className="settingNav-moreAccount__item-name">{`Đăng xuất`}</span>
                    </div>
                </li>
            </ul>
            <div className="settingNav-moreAccount__privacy">
                <ul className="settingNav-moreAccount__privacy-list">
                    {privacyList.map((item, index) => (
                        <li className="settingNav-moreAccount__privacy-item"
                            key={index}
                        >
                            <Link to={item.path} className="settingNav-moreAccount__privacy-link"
                                onClick={setDefaultSettingNav}
                            >
                                {item.name}
                                {item.name === 'Lựa chọn quảng cáo' && <i className="settingNav-moreAccount__privacy-icon"></i>}
                            </Link>
                            <span className="settingNav-moreAccount__privacy-dot"> &middot; </span>
                        </li>
                    ))}
                    <li className="settingNav-moreAccount__privacy-item settingNav-moreAccount__privacy-more">
                        <span
                            onClick={() => { setActiveMore(!activeMore) }}
                            ref={spanRef}
                        >
                            Xem thêm
                        </span>
                        <ul className={clsx("settingNav-moreAccount__privacy-more-list", {
                            "settingNav-moreAccount__privacy-more-list--active": activeMore
                        })}
                            ref={privacyMoreListRef}
                        >
                            {privacyMoreList.map((item, index) => (
                                <li className="settingNav-moreAccount__privacy-more-item"
                                    key={index}
                                >
                                    <Link to={item.path} className="settingNav-moreAccount__privacy-more-link"
                                        onClick={setDefaultSettingNav}
                                    >
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                            {/* <li className="settingNav-moreAccount__privacy-more-item">
                                <Link to="/about" className="settingNav-moreAccount__privacy-more-link">Giới thiệu</Link>
                            </li>
                            <li className="settingNav-moreAccount__privacy-more-item">
                                <Link to="/careers" className="settingNav-moreAccount__privacy-more-link">Nghề nghiệp</Link>
                            </li>
                            <li className="settingNav-moreAccount__privacy-more-item">
                                <Link to="/develope" className="settingNav-moreAccount__privacy-more-link">Nhà phát triển</Link>
                            </li>
                            <li className="settingNav-moreAccount__privacy-more-item">
                                <Link to="/help" className="settingNav-moreAccount__privacy-more-link">Trợ giúp</Link>
                            </li> */}
                        </ul>
                        <span className="settingNav-moreAccount__privacy-dot"> &middot; Meta © 2022</span>
                    </li>
                </ul>

            </div>
        </div >
    )
}

export default MoreAccount