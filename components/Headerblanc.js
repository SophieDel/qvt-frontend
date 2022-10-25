import styles from '../styles/Headerblanc.module.css';
import { logout } from '../reducers/user';
import { useDispatch, useSelector } from 'react-redux';

function Headerblanc() {

    const user = useSelector((state) => state.user.value);
    const dispatch = useDispatch();
    const handlelogout = () => {
      dispatch(logout());
      window.location.href = "/"
    }

    let userSection;
    if (user.token) {
      userSection = (
        <button type="button" onClick={() => handlelogout()} className={styles.btnlogout}>Deconnexion</button>
      )};

return (
    <div className={styles.main}>
    <img src='qvt.jpeg' className={styles.logo}/>   
    {userSection}
    </div>
);
}

export default Headerblanc;
