import { Link } from 'react-router-dom'

import './HomeAdvertisement.scss'
import { HomeAdvertisement_1, HomeAdvertisement_2 } from '../../../../../assets/img'
function HomeAdvertisement() {

    const advertisementList = [
        {
            name: 'LỊCH KHAI GIẢNG CÁC KHOÁ LUYỆN THI IELTS TẠI IPP THÁNG 03/2022',
            href: 'ippeducation.vn',
            img: HomeAdvertisement_1,
            path: '',
        },
        {
            name: 'SOL Edu & Migration Việt Nam',
            href: 'soledu.net',
            img: HomeAdvertisement_2,
            path: ''
        }
    ]

    return (
        <div className="homepage-connection__advertisement">
            <div className="homepage-connection__advertisement-title">Được tài trợ</div>
            <ul className="homepage-connection__advertisement-list">
                {advertisementList.map((item, index) => (
                    <li className="homepage-connection__advertisement-item" key={index}>
                        <Link to={item.path} className="homepage-connection__advertisement-link">
                            <img src={item.img} alt="advertisement" className="homepage-connection__advertisement-img" />
                            <div className="homepage-connection__advertisement-detail">
                                <span className="homepage-connection__advertisement-name">
                                    {item.name}
                                </span><br />
                                <span className="homepage-connection__advertisement-href">{item.href}</span>
                            </div>
                        </Link>
                        <div className="homepage-connection__advertisement-more">
                            <svg viewBox="0 0 20 20" width="1em" height="1em" className="homepage-connection__advertisement-svg"><g fillRule="evenodd" transform="translate(-446 -350)"><path d="M458 360a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m-12 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0"></path></g></svg>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default HomeAdvertisement