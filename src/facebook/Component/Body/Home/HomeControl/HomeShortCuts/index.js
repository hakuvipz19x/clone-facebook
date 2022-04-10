import { Link } from 'react-router-dom'

import './HomeShortCuts.scss'
import {
    HomeShortCut_CandyCrush, HomeShortCut_CandySoda,
    HomeShortCut_FarmHeroSaga, HomeShortCut_FrontEnd, HomeShortCut_ReactJS
} from '../../../../../assets/img'

function HomeShortCuts() {

    const shortcutList = [
        {
            name: 'ReactJS - Việt Nam',
            data: HomeShortCut_ReactJS
        },
        {
            name: 'Cộng đồng Front-end(HTML/CSS/JS) Việt Nam',
            data: HomeShortCut_FrontEnd
        },
        {
            name: 'Farm Hero Saga',
            data: HomeShortCut_FarmHeroSaga
        },
        {
            name: 'Candy Crush Soda Saga',
            data: HomeShortCut_CandySoda
        },
        {
            name: 'Candy Crush Saga',
            data: HomeShortCut_CandyCrush
        },
    ]
    return (
        <div className="homepage-control__shortcuts">
            <div className="homepage-control__shortcuts-title-wrapper">
                <span className="homepage-control__shortcuts-title-name">Lối tắt của bạn</span>
                <span className="homepage-control__shortcuts-title-edit">Chỉnh sửa</span>
            </div>
            <ul className="homepage-control__shortcuts-list">
                {shortcutList.map((item, index) => (
                    <li key={index} className="homepage-control__shortcuts-item">
                        <Link to="" className="homepage-control__shortcuts-link">
                            <img src={item.data} alt="" className="homepage-control__shortcuts-img" />
                            <span className="homepage-control__shortcuts-detail">{item.name}</span>
                        </Link>
                    </li>
                ))}

            </ul>
        </div>
    )
}

export default HomeShortCuts