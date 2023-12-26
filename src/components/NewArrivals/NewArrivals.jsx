import { useState } from "react";
import NewArrivalCard from '../NewArrivalCard/NewArrivalCard'
import styles from './NewArrivals.module.css'
export default function NewArrival() {
    const [items, setItems] = useState([
        {
            id: 1,
            image: "https://s3-alpha-sig.figma.com/img/54a1/70af/ff1750a509646fda6068014d22173190?Expires=1704067200&Signature=eNK5W8AGjGaGbZ3PGMBrpEGitxEn6K0iA3JQkkLdNNiOvNPMwLlSoZpKENG9GYiUZDfWsOw-5x7K0svAbgVopUdUBE0FQ4Ge-wHuCozT0qsVR1xssYsKKRLQ6xC1dTrfsgsqmEJm39bANINOPW1-cYkrComOwin7B48zml04-SZb~O6OatDtElcFtQskybB~sCqmh277FHwiu8rTlaMT9naS~gXGWTLy-eyHg7SVEUNYgrmKG0mp3YbIUYg6BbPDyCPh3WHZo1fZB4LXUVpK0prxA-G63C8kGVI1x8cdrEYF0kON-xR7Il3-Tkciao~3ZAgkNIHd5slUwXry5rmpog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            name: "PRODUCT NAME",
            price: 1699
        },
        {
            id: 2,
            image: "https://s3-alpha-sig.figma.com/img/54a1/70af/ff1750a509646fda6068014d22173190?Expires=1704067200&Signature=eNK5W8AGjGaGbZ3PGMBrpEGitxEn6K0iA3JQkkLdNNiOvNPMwLlSoZpKENG9GYiUZDfWsOw-5x7K0svAbgVopUdUBE0FQ4Ge-wHuCozT0qsVR1xssYsKKRLQ6xC1dTrfsgsqmEJm39bANINOPW1-cYkrComOwin7B48zml04-SZb~O6OatDtElcFtQskybB~sCqmh277FHwiu8rTlaMT9naS~gXGWTLy-eyHg7SVEUNYgrmKG0mp3YbIUYg6BbPDyCPh3WHZo1fZB4LXUVpK0prxA-G63C8kGVI1x8cdrEYF0kON-xR7Il3-Tkciao~3ZAgkNIHd5slUwXry5rmpog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            name: "PRODUCT NAME",
            price: 1699
        },
        {
            id: 3,
            image: "https://s3-alpha-sig.figma.com/img/54a1/70af/ff1750a509646fda6068014d22173190?Expires=1704067200&Signature=eNK5W8AGjGaGbZ3PGMBrpEGitxEn6K0iA3JQkkLdNNiOvNPMwLlSoZpKENG9GYiUZDfWsOw-5x7K0svAbgVopUdUBE0FQ4Ge-wHuCozT0qsVR1xssYsKKRLQ6xC1dTrfsgsqmEJm39bANINOPW1-cYkrComOwin7B48zml04-SZb~O6OatDtElcFtQskybB~sCqmh277FHwiu8rTlaMT9naS~gXGWTLy-eyHg7SVEUNYgrmKG0mp3YbIUYg6BbPDyCPh3WHZo1fZB4LXUVpK0prxA-G63C8kGVI1x8cdrEYF0kON-xR7Il3-Tkciao~3ZAgkNIHd5slUwXry5rmpog__&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4",
            name: "PRODUCT NAME",
            price: 1699
        },
    ])
    return (
        <div className={"container " + styles.newarrival}>
            <h2 className={styles.heading}>new Arrivals</h2>
            <div className={styles.new_arrival_cards}>
                {items.map(item => <NewArrivalCard key={item.id} name={item.name} price={item.price} image={item.image}/>)}
            </div>
        </div>
    )
}