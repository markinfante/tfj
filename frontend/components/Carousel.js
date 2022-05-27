import Image from "next/image";
import React, {useState} from "react";
import styles from "../styles/carousel.module.css";

export const CarouselItem = ({children, src, width}) => {
    return (
        <div className={styles.carouselItem} style={{width: width}}>
            <Image src={src} layout="intrinsic"/>
        </div>
    );
    
}

const Carousel = ({ children }) => {
    const [activeIndex, setActiveIndex] = useState(0);
    const updateIndex = (newIndex) => {
        const index = newIndex % React.Children.count(children);
        if (newIndex < 0) {
            setActiveIndex(React.Children.count(children) - 1);
        } else {
            setActiveIndex(newIndex % React.Children.count(children));
        }
    };
    return (
        <div className={styles.carousel}>
            <div className={styles.inner} style={{transform: `translateX(-${activeIndex * 100}%)`}}>
                {React.Children.map(children, (child, index)=>{
                    return React.cloneElement(child, {width: "100%"});
                })}
            </div>
            <div className={styles.indicators}>
                <button onClick={()=> {
                    updateIndex(activeIndex - 1)
                }}>left</button>
                <button onClick={()=> {
                    updateIndex(activeIndex + 1)
                }}>right</button>
            </div>
        </div>
    );
}

export default Carousel;