import { FC } from 'react'
import Header from '../../components/layout/Header/Header'
import Footer from '../../components/layout/Footer/Footer'
import styles from './Main.module.scss'
import ImageCard from '../../components/block/ImageCard/ImageCard'

const mockDataImgs = [
    {
        to: '/upload',
        img: '/mock1.jpg',
        title: 'Lego',
    },
    {
        to: '/upload',
        img: '/mock1.jpg',
        title: 'Lego2',
    }
]

const Main: FC = () => {
    return <div className={styles.page}>
        <Header />
        <ul className={styles.imageList}>
            {mockDataImgs.map(item => <li key={item.title}><ImageCard {...item} /></li>)}
        </ul>
        <Footer />
    </div>
}

export default Main