import React, { createContext, useContext } from "react";
import { CurrentUserContext } from "./CurrentUserContexts";

//creating current project context
export const CurrentProjectContext = createContext();
export const SetCurrentProjectContext = createContext();

export const useCurrentProject = () => usecContext(CurrentProjectContext);
export const useSetCurentProject = () => useContext(SetCurrentProjectContext);

// Project export 

export const ProjectContext = ({children}) => {
    //setstate statements
    const [currentProject, setCurrentProject] = useState({
        projectDetails: {results: []},
        projectLists: {restuls: []},
    });

    const currentUser = useCurrentContext():

    

  return (
    
  )
}
