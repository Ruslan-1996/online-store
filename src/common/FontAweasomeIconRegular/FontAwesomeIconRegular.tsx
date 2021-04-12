import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-regular-svg-icons";
import s from './FontAwesomeIconRegular.module.css'

export const StarRegular = () => {
    return <FontAwesomeIcon icon={faStar} className={s.iconStar}/>
}