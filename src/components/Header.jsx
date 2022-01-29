
import ironHackLogo from '../images/ironhack-logo.png'
import menuIcon from '../images/menu-icon.png'

function Header() {
  return (
    <div className="App-header">
      <div>
          <img src={ironHackLogo} alt='ironHackLogo' />
          <img src={menuIcon} alt='menuIcon' />
      </div>      
      <h1>Say hello to ReactJS</h1>
      <p>You will learn how to use the most popular frontend library and become a super Ninja developer.</p>
      <button className='button'>Awesome!</button>
    </div>
  );
}

export default Header;