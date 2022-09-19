import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import {useEffect} from 'react'
import ImgSlider from '../components/ImgSlider'
import Viewes from '../components/Viewes'


export default function Home() {
    return (
        <div className={styles.Container}>
            <ImgSlider />
            <Viewes />
        </div>
    )
}
