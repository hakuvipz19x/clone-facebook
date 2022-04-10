import clsx from 'clsx'
import { useState, useRef } from 'react'

import { AiOutlineLike, AiFillLike, AiOutlineCamera, AiOutlineGif } from "react-icons/ai";
import { BiComment, BiSmile } from "react-icons/bi";
import { FaLock } from "react-icons/fa";
import { MdOutlineMoreHoriz, MdMoreHoriz } from "react-icons/md";
import { RiStarSmileLine } from "react-icons/ri";

import './HomePostItem.scss'

function HomePostItem({ content, user }) {

    const [input, setInput] = useState('')
    const [commentList, setCommentList] = useState([])
    const [showText, setShowText] = useState(false)
    const [like, setLike] = useState(false)
    // console.log(content, user)

    const commentInputRef = useRef()
    const handlePress = useRef()

    const handleCommentClick = () => {
        commentInputRef.current.focus()
        console.log(input)
    }

    const handleEnterPress = (e) => {
        // console.log(e)
        // console.log(commentList)
        if (e.code === 'Enter' && e.target.value !== '') {
            // console.log('abc')
            setCommentList(prevList => [e.target.value, ...prevList])
            setInput('')
            commentInputRef.current.blur()
            window.removeEventListener('keypress', handlePress.current)
        }
    }

    const handleChangeInput = (e) => {
        if (e.target.value.length !== 0) {
            e.target.style.height = Math.ceil(e.target.value.length / 64) * 20 + 12 + 'px'
        }
        else {
            e.target.style.height = '32px';
        }
        setInput(e.target.value)
    }

    const handleFocus = () => {
        // console.log('handleFocus')
        handlePress.current = handleEnterPress
        window.addEventListener("keypress", handlePress.current)
    }

    const handleBlur = () => {
        // console.log('handleBlur')
        window.removeEventListener("keypress", handlePress.current)
    }

    return (
        <div className="homepage-newfeed__post-item-wrapper">
            <div className="homepage-newfeed__post-item-header-wrapper">
                <div className="homepage-newfeed__post-item-user-wrapper">
                    <img src={user.avatar} alt="" className="homepage-newfeed__post-item-user-avatar" />
                    <div className="homepage-newfeed__post-item-name-wrapper">
                        <span className="homepage-newfeed__post-item-name">Nguyễn Quang Anh</span>
                        <div className="homepage-newfeed__post-item-status">
                            <span className="homepage-newfeed__post-item-time">... phút </span>
                            &middot;
                            <div className="homepage-newfeed__post-item-privacy-wrapper">
                                <FaLock className="homepage-newfeed__post-item-privacy-icon" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="homepage-newfeed__post-item-more-wrapper">
                    <MdOutlineMoreHoriz className="homepage-newfeed__post-item-more-icon" />
                </div>
            </div>
            <div className="homepage-newfeed__post-item-content-wrapper">
                <span className={clsx('homepage-newfeed__post-item-content', {
                    'homepage-newfeed__post-item-content--small-size': content.length <= 85 ? false : true,
                    'homepage-newfeed__post-item-content--long-text': showText === false && content.length > 73 * 6
                })}
                >
                    {content}
                </span>
                {content.length > 73 * 6 && showText === false &&
                    <span className="homepage-newfeed__post-item-content-more"
                        onClick={() => setShowText(true)}
                    >Xem thêm</span>
                }
            </div>

            {like &&
                <div className="homepage-newfeed__post-item-reaction-wrapper">
                    <div className="homepage-newfeed__post-item-reaction">
                        <div className="homepage-newfeed__post-item-reaction-icon-wrapper">
                            <AiFillLike className="homepage-newfeed__post-item-reaction-icon"></AiFillLike>
                        </div>
                        <span className="homepage-newfeed__post-item-reaction-name">{user.name}</span>
                    </div>
                </div>
            }
            <div className="homepage-newfeed__post-item-action-wrapper">
                <div className={clsx("homepage-newfeed__post-item-action", {
                    "homepage-newfeed__post-item-action--active": like
                })}
                    onClick={() => setLike(!like)}
                >
                    {
                        like === false ?
                            <AiOutlineLike className="homepage-newfeed__post-item-action-icon"></AiOutlineLike> :
                            <AiFillLike className="homepage-newfeed__post-item-action-icon"></AiFillLike>
                    }
                    <span className="homepage-newfeed__post-item-action-text">Thích</span>
                </div>
                <div className="homepage-newfeed__post-item-action"
                    onClick={handleCommentClick}
                >
                    <BiComment className="homepage-newfeed__post-item-action-icon"></BiComment>
                    <span className="homepage-newfeed__post-item-action-text">Bình luận</span>
                </div>
            </div>
            <div className="homepage-newfeed__post-item-comment-wrapper">
                <div className="homepage-newfeed__post-item-comment-area">
                    <ul className="homepage-newfeed__post-item-comment-list">
                        {commentList.map((comment, index) => (
                            <li className="homepage-newfeed__post-item-comment-item" key={index}>
                                <div className="homepage-newfeed__comment-item-user">
                                    <img src={user.avatar} alt="" className="homepage-newfeed__comment-item-user-avatar" />
                                    <div className="homepage-newfeed__comment-item-wrapper">
                                        <div className="homepage-newfeed__comment-content-wrapper">
                                            <div className="homepage-newfeed__comment-user-name">{user.name}</div>
                                            <span className="homepage-newfeed__comment-content">{comment}</span>
                                        </div>
                                    </div>
                                    <div className="homepage-newfeed__comment-item-more">
                                        <MdMoreHoriz className="homepage-newfeed__comment-item-more-icon"></MdMoreHoriz>
                                    </div>
                                </div>
                                <div className="homepage-newfeed__comment-action-wrapper">
                                    <ul className="homepage-newfeed__comment-action-list">
                                        <li className="homepage-newfeed__comment-action-item">Thích</li>
                                        <li className="homepage-newfeed__comment-action-item">Bình luận</li>
                                        <li className="homepage-newfeed__comment-action-item homepage-newfeed__comment-time">... phút</li>
                                    </ul>
                                </div>
                            </li>
                        ))}
                        {/* <li className="homepage-newfeed__post-item-comment-item">
                            <div className="homepage-newfeed__comment-item-user">
                                <img src={user.avatar} alt="" className="homepage-newfeed__comment-item-user-avatar" />
                                <div className="homepage-newfeed__comment-item-wrapper">
                                    <div className="homepage-newfeed__comment-content-wrapper">
                                        <div className="homepage-newfeed__comment-user-name">{user.name}</div>
                                        <span className="homepage-newfeed__comment-content">ABCXYZ</span>
                                    </div>
                                </div>
                                <div className="homepage-newfeed__comment-item-more">
                                    <MdMoreHoriz className="homepage-newfeed__comment-item-more-icon"></MdMoreHoriz>
                                </div>
                            </div>

                            <div className="homepage-newfeed__comment-action-wrapper">
                                <ul className="homepage-newfeed__comment-action-list">
                                    <li className="homepage-newfeed__comment-action-item">Thích</li>
                                    <li className="homepage-newfeed__comment-action-item">Bình luận</li>
                                    <li className="homepage-newfeed__comment-action-item homepage-newfeed__comment-time">... phút</li>
                                </ul>
                            </div>
                        </li> */}

                    </ul>
                </div>
                <div className="homepage-newfeed__post-item-comment-user">
                    <div className="homepage-newfeed__post-item-comment-avatar-wrapper">
                        <img src={user.avatar} alt="" className="homepage-newfeed__post-item-comment-avatar" />
                    </div>
                    <div className={clsx("homepage-newfeed__post-item-comment-input", {
                        "homepage-newfeed__post-item-comment-input--long-text": input.length > 48
                    })}>
                        <textarea rows="1" type="text" className="homepage-newfeed__post-item-input" placeholder="Viết bình luận..."
                            ref={commentInputRef}
                            value={input}
                            onChange={handleChangeInput}
                            onFocus={handleFocus}
                            onBlur={handleBlur}
                        />
                        <ul className="homepage-newfeed__post-item-function-list">
                            <li className="homepage-newfeed__post-item-function-item">
                                <BiSmile className="homepage-newfeed__post-item-function-icon"></BiSmile>
                            </li>
                            <li className="homepage-newfeed__post-item-function-item">
                                <AiOutlineCamera className="homepage-newfeed__post-item-function-icon"></AiOutlineCamera>
                            </li>
                            <li className="homepage-newfeed__post-item-function-item">
                                <AiOutlineGif className="homepage-newfeed__post-item-function-icon"></AiOutlineGif>
                            </li>
                            <li className="homepage-newfeed__post-item-function-item">
                                <RiStarSmileLine className="homepage-newfeed__post-item-function-icon"></RiStarSmileLine>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HomePostItem