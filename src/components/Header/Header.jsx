import styles from './Header.module.css'
import Navbar from '../Navbar/Navbar'
import { useState, useEffect } from 'react';
export default function Header() {
    const [item, setItem] = useState({
        img: '/assets/brown_shoe.png',
        name: "Brown shoe",
        desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s",
        price: "1699"
    })
    const [selectedItem, setSelectedItem] = useState('brown')

    const handleSelection = (evt) => {
        setSelectedItem(evt.target.value)
    }
    
    useEffect(()=>{
        document.documentElement.style.setProperty('--gradient', `var(--gradient-${selectedItem})`)
        document.documentElement.style.setProperty('--nav-color', `var(--nav-color-${selectedItem})`)
        setItem(oldItem => ({...oldItem, img: `/assets/${selectedItem}_shoe.png`, name: `${selectedItem} shoe`}))
        const changeItems = setInterval(()=>{
            setSelectedItem(oldItem => (oldItem==="brown"?"black":"brown"))
        }, 6000)
        return () => clearInterval(changeItems);
    }, [selectedItem])

    return (
        <header className={styles.header}>
            <Navbar/>
            <div className={ 'container ' + styles.header_contents}>
                <img src={item.img} alt="shoe" className={styles.header_image}/>
                <div className={styles.header_description}>
                    <h1 className={styles.header_title}>{item.name}</h1>
                    <p className={styles.header_text}>{item.desc}</p>
                    <div className={styles.header_buy}>
                        <button className={'btn ' + styles.header_btn}>BUY NOW</button>
                        <p className={styles.price}>&#8377;&nbsp;{item.price}</p>
                    </div>
                </div> 
                <div className={styles.selectors}>
                    <label className={styles.selector}>
                        <div className={styles.brown_selector}>
                            <input onChange={handleSelection} type="checkbox" name="shoe" value="brown" style={{display: "none"}}/>
                        </div>
                    </label>
                    <label className={styles.selector}>
                        <div className={styles.black_selector}>
                            <input onChange={handleSelection} type="checkbox" name="shoe" id="" value="black" style={{display: "none"}}/>
                        </div>
                    </label>
                </div>
            </div>
            
        </header>
    );
}