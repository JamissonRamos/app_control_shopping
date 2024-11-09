//Hooks
import { Route, Routes } from 'react-router-dom';

// Pages
import { Pages } from '../pages';

//Components


const AppContent = () => {

    return (
        <>  
            <Routes>
                <Route 
                    path='/'
                    element={<Pages.Home />}
                /> 
                <Route 
                    path='/splash'
                    element={<Pages.Splash />}
                /> 
                <Route 
                    path='/product'
                    element={<Pages.Product />}
                /> 
            </Routes>
        </>
    );
};

export default AppContent;

/* 

*/

