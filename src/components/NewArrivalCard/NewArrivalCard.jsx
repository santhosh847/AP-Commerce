import styles from "./NewArrivalCard.module.css"
export default function NewArrivalCard({image, name="PRODUCT NAME", price=1699}) {
   
    return (
                <div className={styles.card}>
                        <img className={styles.image} src={image} alt=""></img>
                        <div className={styles.description}>
                            <h3>{name}</h3>
                            <p>₹{price}</p>
                            <button className={styles.card_button}>SHOP NOW</button>
                        </div>
                </div>
    );
}