import styles from './Footer.module.css'
export default function Footer () {
    return (
        <div className={styles.footer}>
            <div className={styles.footer_contents}>
                <div className={styles.address}>
                    <h3 className={styles.title}>Address</h3>
                    <h6>123, abc street,</h6>
                    <h6>my city.</h6>
                    <h6>Pin: 123 456</h6>
                    <h6>contact@apshop.com </h6>
                    
                </div>
                <div className={styles.newsletter}>
                    <h3>Stay upto date</h3>
                    <input type="text" placeholder='email' />
                    <button className="btn">Subscribe</button>
                </div>
            </div>
        </div>
    )
}