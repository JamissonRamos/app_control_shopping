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
                        path='/product/create'
                        element={<Pages.ProductCreate />}
                    /> 
                    <Route 
                        path='/product/update'
                        element={<Pages.ProductUpdate />}
                    /> 
                </Routes>
            </main>
        </>
    );
};

export default AppContent;

/* 

*/

