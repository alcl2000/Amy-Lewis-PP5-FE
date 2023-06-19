import hero from '../../assets/hero.png';
import { SideBar } from '../../components/SideBar';
import { useCurrentUser } from '../../contexts/CurrentUserContexts';
import styles from '../../styles/HomePage.css';
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

const HomePage = () => {
    // User Context
    const currentUser = useCurrentUser()
    
    const loggedInContent = (
        <>
        <SideBar />
        </>
    );
    const loggedOutContent = (
        <>
            <img src={hero} height={'300px'}/>
            <h1 className={styles.HeroText}>Can’t get seem to get your project started? Let us help you Crack-It</h1>
            <h2 className={styles.HeroText}>Free project and task organization</h2>
            <h2  className={styles.HeroText}>
                <Link to={'/register'}>sign up here</Link>
            </h2>
        </>
    );

    /*JSX Return statement */
    return(
        <div>
            {currentUser ? loggedInContent : loggedOutContent}
        </div>
    );
}

export default HomePage