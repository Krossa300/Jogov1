import { Outlet } from 'react-router-dom';

const BasePaginaMenu = () => {
    return (    
            <div style={{ backgroundColor: '#c98cfcff', margin: '20px', fontFamily: 'Arial, sans-serif', width: '1500px', height: '100vh', padding: '10px' }}>
                 <ul>
                     <li>Item 1</li>
                     <li>Item 2</li>
                     <li>Item 3</li>
                 </ul>
                 <Outlet />
            </div>
            
    );
};

export default BasePaginaMenu;
