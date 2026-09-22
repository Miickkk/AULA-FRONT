import SearchIcon from '@mui/icons-material/Search';
import PersonIcon from '@mui/icons-material/Person';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import logo from '../assets/icons/logo.png';
import '../App.css';

function Header() {
  return (
    <header className="header">

      <div className="header-logo">
        <img
          src={logo}
          alt="Moda Geek"
        />
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
        <PersonIcon />
        <ShoppingCartIcon />
      </div>

    </header>
  );
}

export default Header;