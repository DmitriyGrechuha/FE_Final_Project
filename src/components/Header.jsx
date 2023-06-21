import '../Style/Header.css';
import imageBlock from '../../src/Image/BG_Image.png';
function Header() {
  return (
    <div className="Header">
      <div>
        <h1 className="Header-title"> SMART MUSIC BOX </h1>
        <p className="Header-text">Welcome to the world {'\n'}of smart music</p>
      </div>
      <div className="image-block">
        <img src={imageBlock} className="img" alt="background" />
      </div>
    </div>
  );
}

export default Header;
