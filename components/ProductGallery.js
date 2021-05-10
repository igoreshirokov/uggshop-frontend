import { PUBLIC_URL } from '../store/CatalogContext'
import styles from '../styles/ProductGallery.module.sass'
import { useState, useEffect } from 'react'
import { Loading } from './Loading'
import Image from 'next/image'
import getRandom from '../functions/getRandom'
import { CSSTransition, TransitionGroup } from 'react-transition-group'

export default function ProductGallery({ images }) {

    const [gallery, setGallery] = useState(images.map((image, index) => {
        return {
            id: index,
            href: image,
            active: index === 0 ? true : false
        }
    }))
    const activeItemHref = gallery.filter(item => item.active === true).map(item => item.href)[0]
    const [active, setActive] = useState(activeItemHref[0])
    const nonActiveItems = gallery.filter(item => item.active === false)

    const activationImage = (index) => {
        setGallery(gallery.map(image => {
            index === image.id ? image.active = true : image.active = false
            return image
        }))
        setActive(activeItemHref)
    }
    const activeItem = gallery.filter(item => item.active === true).map(item => item.active)



    const defaultStyle = {
        transition: `opacity 300ms ease-in-out`,
        opacity: 0,
    }

    const transitionStyles = {
        entering: { opacity: 1 },
        entered: { opacity: 1 },
        exiting: { opacity: 0 },
        exited: { opacity: 0 },
    };


    return (
        <>
            <div className={styles.gallery}>
                <div className={styles.wrapper}>
                    <TransitionGroup>
                        <CSSTransition key={active} classNames="gallery" timeout={{ enter: 1000, exit: 0 }} >
                            <div className={styles.active}>
                                <img src={`/images${activeItemHref}`} />
                                {/* <Image src={`/images${activeItemHref}`} width={`500`} height={`500`} layout="responsive" /> */}
                            </div>
                        </CSSTransition>
                    </TransitionGroup>


                    <div className={styles.thumbnails}>
                        {nonActiveItems.map(image => {
                            return (
                                <div key={image.id.toString()} onClick={() => activationImage(image.id)} className={styles.thumb}>
                                    <Image src={`/images${image.href}`} width={`50`} height={`50`} layout="intrinsic" />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>
        </>
    )
}



// // console.log(content)
// const [images, setImages] = useState(false)
// const [gallery, setGallery] = useState({
//     active: 0,
//     isOne: true,
//     isLoading: true
// })

// useEffect(() => {
//     content !== undefined ? setImages(JSON.parse(content)) : null
// }, [content])

// useEffect(() => {
//     if (images.length > 1) {
//         setGallery({
//             active: 0,
//             isOne: false,
//             isLoading: false
//         })
//     } else {
//         setGallery({
//             active: 0,
//             isOne: true,
//             isLoading: false
//         })
//     }
// }, [images])

// if (gallery.isLoading) {
//     return (
//         <div>
//             <Loading color={'#734C2F'} type={'spin'} />
//         </div>
//     )
// }

// if (gallery.isOne) {
//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.active}>
//                 <img src={PUBLIC_URL + images[0]} />
//             </div>
//         </div>
//     )
// } else {
//     return (
//         <div className={styles.gallery}>
//             <div className={styles.wrapper}>
//                 <div className={styles.active}>
//                 <Image src={`/images${images[0]}`} width={`500`} height={`500`} layout="responsive" />
//                 </div>
//                 <div className={styles.thumbnails}>
//                     {images.map(image => {

//                         return (
//                             <Image className={styles.thumbnail} key={getRandom()} src={`/images${image}`} width={`50`} height={`50`}  />
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
