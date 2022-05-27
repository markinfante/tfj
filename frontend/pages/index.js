import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Carousel, {CarouselItem} from '../components/Carousel'
import jamaicanFlagImg from "../public/images/flag_jamaica.jpeg"
import kidsOutsideImg from "../public/images/kids_outside_school.jpeg"
import kidsPlayingImg from "../public/images/kids_playing.jpeg"
import schoolFrontImg from "../public/images/school_front.jpeg"

export default function Home() {
  return (
    <div className={styles.container}>
      <Carousel>
        <CarouselItem src={jamaicanFlagImg}>Item 1</CarouselItem>
        <CarouselItem src={kidsOutsideImg}>Item 2</CarouselItem>
        <CarouselItem src={kidsPlayingImg}>Item 3</CarouselItem>
      </Carousel>
    </div>
  )
}
