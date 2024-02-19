import { MdSupervisedUserCircle } from "react-icons/md"
import styles from "./card.module.css"

const Card = () => {
  return (
    <div className={styles.container}>
      <MdSupervisedUserCircle size={23}/>
      <div className={styles.texts}>
        <span className={styles.title}>Total Users</span>
        <span className={styles.number}>11.1112</span>
        <span className={styles.detail}><span className={styles.positive}>11%</span> more than last week</span>
      </div>
    </div>
  )
}

export default Card