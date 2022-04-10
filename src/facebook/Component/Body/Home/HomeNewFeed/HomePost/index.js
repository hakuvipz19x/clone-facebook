import React, { useState, useRef } from "react";

import { AiFillCaretDown } from "react-icons/ai";
import { FaVideo, FaFileImage, FaTag } from "react-icons/fa";
import { GrClose } from "react-icons/gr";
import { GiMicrophone } from "react-icons/gi";
import { HiLockClosed } from "react-icons/hi";
import { MdTagFaces, MdPlace, MdOutlineMoreHoriz } from "react-icons/md";
import { VscSmiley } from "react-icons/vsc";
import './HomePost.scss'
import { Avatar, theme_post } from '../../../../../assets/img'

import HomePostItem from "./HomePostItem";

function HomePost() {
    const user = {
        name: 'Nguyễn Quang Anh',
        avatar: Avatar
    }

    const [input, setInput] = useState('')
    const [contentList, setContentList] = useState([])
    const inputRef = useRef()
    const currentScrollHeight = useRef(120)
    const modalRef = useRef()
    const modalWrapperRef = useRef()
    const themeRef = useRef()
    const postBtnRef = useRef()

    function handleClickOutsideModal(e) {
        // console.log('function')
        // console.log(modalRef.current)
        // console.log(e.target)
        // console.log(modalRef.current.contains(e.target))
        // console.log(modalRef.current.style.display)
        // console.log(modalWrapperRef.current)
        if (!modalWrapperRef.current.contains(e.target)) {
            modalRef.current.style.display = 'none';
            window.removeEventListener('mousedown', handleClickOutsideModal)
        }
    }

    const handleCreateClick = () => {
        window.addEventListener('mousedown', handleClickOutsideModal)
        modalRef.current.style.display = 'flex';
    }

    function handleCloseClick() {
        modalRef.current.style.display = 'none';
        window.removeEventListener('mousedown', handleClickOutsideModal)
    }

    function handleChangeInput(e) {
        // console.log(e)
        if (e.target.value.length > 85) {
            e.target.style.fontSize = '15px'
        }
        else {
            e.target.style.fontSize = '24px'
        }

        if (e.target.value.length > 130) {
            e.target.style.paddingRight = '36px'
        }
        else {
            e.target.style.paddingRight = '16px'
        }

        if (e.target.value.length <= (58 * 6)) {
            if (e.target.clientHeight !== 120 && currentScrollHeight.current !== 120) {
                e.target.style.height = '120px'
                e.target.style.marginBottom = '0'
                currentScrollHeight.current = e.target.clientHeight

            }
        }
        else if (currentScrollHeight.current !== e.target.scrollHeight) {
            e.target.style.height = (Math.ceil(e.target.value.length / 58)) * 20 + 'px'
            e.target.style.marginBottom = '20px'
            currentScrollHeight.current = e.target.clientHeight
        }

        if (e.target.value.trim().length !== 0) {
            // console.log(themeRef.current.style.display)
            if (!postBtnRef.current.classList.contains('homepage-newfeed_modal-content-btn--active')) {
                themeRef.current.style.display = 'none';
                postBtnRef.current.classList.add('homepage-newfeed_modal-content-btn--active')
            }
        }
        else {
            themeRef.current.style.display = 'block';
            postBtnRef.current.classList.remove('homepage-newfeed_modal-content-btn--active')
        }
        // console.log(e.target.clientHeight)
        // console.log(e.target.scrollHeight)
        // if (e.target.clientHeight !== e.target.scrollHeight) {
        //     e.target.style.height = e.target.scrollHeight + 'px'
        // }
        setInput(e.target.value)
    }

    const handlePostClick = (e) => {
        // console.log(contentList)
        if (e.target.classList.contains('homepage-newfeed_modal-content-btn--active') && input.trim().length !== 0) {
            window.removeEventListener('mousedown', handleClickOutsideModal)
            modalRef.current.style.display = 'none';
            inputRef.current.style.height = '120px';
            // console.log('abc')
            setContentList(prevList => [input, ...prevList])
            setInput('')
        }
    }

    return (
        <React.Fragment>
            <div className="homepage-newfeed__post">
                <div className="homepage-newfeed__post-wrapper">
                    <div className="homepage-newfeed__create-post-wrapper">
                        <img src={user.avatar} alt="" className="homepage-newfeed__create-post-img" />
                        <div className="homepage-newfeed__create-post"
                            onClick={handleCreateClick}
                        >
                            <span className="homepage-newfeed__create-post-span">
                                {input.trim().length !== 0 ? input : `Anh ơi, bạn đang nghĩ gì thế?`}
                            </span>
                        </div>
                    </div>
                    <div className="homepage-newfeed__post-function">
                        <ul className="homepage-newfeed__post-function-list">
                            <li className="homepage-newfeed__post-function-item">
                                <FaVideo className="homepage-newfeed__post-function-img homepage-newfeed__post-function-img--red" />
                                <span className="homepage-newfeed__post-function-span">Video trực tiếp</span>
                            </li>
                            <li className="homepage-newfeed__post-function-item">
                                <FaFileImage className="homepage-newfeed__post-function-img homepage-newfeed__post-function-img--green" />
                                <span className="homepage-newfeed__post-function-span">Ảnh/Video</span>
                            </li>
                            <li className="homepage-newfeed__post-function-item">
                                <MdTagFaces className="homepage-newfeed__post-function-img homepage-newfeed__post-function-img--yellow" />
                                <span className="homepage-newfeed__post-function-span">Cảm xúc/Hoạt động</span>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="homepage-newfeed__post-list">
                    {contentList.map((content, index) => (
                        <li className="homepage-newfeed__post-item" key={index}>
                            <HomePostItem
                                content={content}
                                user={user}
                            />
                        </li>

                    ))}
                </div>
            </div>

            {/* Modal */}
            <div className="homepage-newfeed__post-modal"
                ref={modalRef}
            >
                <div className="homepage-newfeed__post-modal-wrapper"
                    ref={modalWrapperRef}
                >
                    <div className="homepage-newfeed__modal-title-wrapper">
                        <span className="homepage-newfeed__modal-title">Tạo bài viết</span>
                        <div className="homepage-newfeed__modal-close-wrapper"
                            onClick={handleCloseClick}
                        >
                            <GrClose className="homepage-newfeed__modal-close-icon"
                            />
                        </div>
                    </div>
                    <div className="homepage-newfeed__modal-content-wrapper">
                        <div className="homepage-newfeed__modal-user-wrapper">
                            <img src={user.avatar} alt="" className="homepage-newfeed__modal-user-avatar" />
                            <div className="homepage-newfeed__modal-user-name-wrapper">
                                <div className="homepage-newfeed__modal-user-name">{user.name}</div>

                                <div className="homepage-newfeed__modal-user-option-wrapper">
                                    <HiLockClosed className="homepage-newfeed__modal-user-option-icon" />
                                    <span className="homepage-newfeed__modal-user-option-name">Chỉ mình tôi</span>
                                    <AiFillCaretDown className="homepage-newfeed__modal-user-option-more-icon" />
                                </div>
                            </div>
                        </div>
                        <div className="homepage-newfeed__modal-content">
                            <textarea type="text" className="homepage-newfeed__modal-content-input" placeholder="Anh ơi, bạn đang nghĩ gì thế?"
                                ref={inputRef}
                                value={input}
                                onChange={handleChangeInput}
                            />
                            <div className="homepage-newfeed__modal-content-option">
                                <img src={theme_post} alt="" className="homepage-newfeed__modal-content-theme-img"
                                    ref={themeRef}
                                />
                                <VscSmiley className="homepage-newfeed__modal-content-emotion-icon" />
                            </div>
                        </div>
                        <div className="homepage-newfeed_modal-add-content">
                            <span className="homepage-newfeed_add-content-title">Thêm vào bài viết</span>
                            <ul className="homepage-newfeed_add-content-list">
                                <li className="homepage-newfeed_add-content-item">
                                    <FaFileImage className="homepage-newfeed_add-content-icon homepage-newfeed_add-content-icon--green" />
                                </li>
                                <li className="homepage-newfeed_add-content-item">
                                    <FaTag className="homepage-newfeed_add-content-icon homepage-newfeed_add-content-icon--blue" />
                                </li>
                                <li className="homepage-newfeed_add-content-item">
                                    <MdTagFaces className="homepage-newfeed_add-content-icon homepage-newfeed_add-content-icon--yellow" />
                                </li>
                                <li className="homepage-newfeed_add-content-item">
                                    <MdPlace className="homepage-newfeed_add-content-icon homepage-newfeed_add-content-icon--orange" />
                                </li>
                                <li className="homepage-newfeed_add-content-item">
                                    <GiMicrophone className="homepage-newfeed_add-content-icon homepage-newfeed_add-content-icon--pink" />
                                </li>
                                <li className="homepage-newfeed_add-content-item">
                                    <MdOutlineMoreHoriz className="homepage-newfeed_add-content-icon homepage-newfeed_add-content-icon--grey" />
                                </li>
                            </ul>
                        </div>
                        <div className="homepage-newfeed_modal-content-btn-wrapper">
                            <button className="homepage-newfeed_modal-content-btn"
                                ref={postBtnRef}
                                onClick={handlePostClick}
                            >
                                Đăng
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default HomePost