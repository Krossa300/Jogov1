import { Outlet } from 'react-router-dom';

const BasePaginaJogo = () => {
    return (    
            <div style={{ backgroundColor: '#fad503ff', margin: '20px',
             width: '500px', height: '100vh', padding: '10px',
             border: '10px solid black', borderRadius: '8px' }}>
                 <Outlet />
            </div>
            
    );
};

export default BasePaginaJogo;
