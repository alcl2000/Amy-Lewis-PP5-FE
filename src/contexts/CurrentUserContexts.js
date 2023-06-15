import { createContext, useEffect, useState } from 'react';
import axios from 'axios';

export const currentUserContext = createContext();
export const SetCurrentUserContext = createContext();

export const CurrentUserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null)

    const handleMount = async () => {
        try {
            const {data} = await axios.get('dj-rest-auth/user/')
            setCurrentUser(data)
        } catch (err){
            console.log(err)
        }
    };

    useEffect(() => {
        handleMount()
    }, []);
    /*JSX return */
    return(
        <CurrentUserContext.Provider value={currentUser}>
            <SetCurrentUserContext.Provider value={currentUser}>
                {children}
            </SetCurrentUserContext.Provider>
        </CurrentUserContext.Provider>
    );

};