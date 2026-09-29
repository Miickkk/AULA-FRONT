import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { useNavigate } from 'react-router-dom';

import logo from '../assets/icons/logo.png';
import '../App.css';

function Header({ usuario, onLogout }) {

  const navigate = useNavigate();

  return (
    <header className="header">

      <div className="header-logo">
        <img src={logo} alt="Moda Geek" />
      </div>

      <div className="header-frase">
        SUA PAIXÃO
        <br />
        TAMBÉM VESTE.
      </div>

      <div className="header-search">
        <input
          type="text"
          placeholder="Buscar por anime, jogo, personagem..."
        />
        <SearchIcon />
      </div>

      <div className="header-icons">

        <div className="header-user">

          <PersonIcon
            onClick={() => {
              if (!usuario) {
                navigate('/login');
              }
            }}
            style={{ cursor: 'pointer' }}
          />

          {usuario?.email && (
            <>
              <span className="user-email">
                {usuario.email}
              </span>

              <button
                className="logout-button"
                onClick={onLogout}
              >
                Sair
              </button>
            </>
          )}

        </div>

        <ShoppingCartIcon />

      </div>

    </header>
  );
}

export default Header;