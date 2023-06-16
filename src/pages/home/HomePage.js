import { Link } from 'react-router-dom/cjs/react-router-dom.min';
import hero from '../../assets/hero.png'

const HomePage = () => {

    /*JSX Return statement */
    return(
        <div>
            <img src={hero} height={'300px'}/>
            <h1>Can’t get seem to get your project started? Let us help you Crack-It</h1>
            <h2>Free project and task organization</h2>
            <h2>
                <Link to={'/register'}>sign up here</Link>
            </h2>
        </div>
    );
}

export default HomePage