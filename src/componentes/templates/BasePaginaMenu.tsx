import { Outlet } from 'react-router-dom';
import BotaoDeInicio from '../BotaoDeInicio';

const BasePaginaMenu = () => {
    return (    
            <div
                id="base-pagina-menu"
                style={{
                    backgroundColor: '#ffadb1ff',
                    margin: '20px',
                    fontFamily: 'Arial, sans-serif',
                    width: '1800px',
                    height: '100vh',
                    padding: '10px',
                    borderRadius: '20px',
                }}
            >
                <BotaoDeInicio />
                <Outlet />
            </div>
            
    );
};

export default BasePaginaMenu;
