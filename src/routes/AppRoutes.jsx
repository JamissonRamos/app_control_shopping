//Hooks
import { Route, Routes } from 'react-router-dom';

// Pages
import { Pages } from '../pages';

//Components


const AppContent = () => {

    return (
        <>  
            <main>
                <Routes>
                    <Route 
                        path='/home'
                        element={<Pages.Home />}
                    /> 
                    <Route 
                        path='/'
                        element={<Pages.Splash />}
                    /> 
                    <Route 
                        path='/product'
                        element={<Pages.Product />}
                    /> 
                </Routes>
            </main>
        </>
    );
};

export default AppContent;

/* 

*/

