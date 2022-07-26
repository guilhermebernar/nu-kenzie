import logo from "./logo.png";
import {HeaderContainer, LogoImg, Button} from "./style.js"

const Header = ({setStatusHomePg}) => {
  return (
    <HeaderContainer>
      <LogoImg src={logo} alt="logo"/>
      <Button onClick={()=>setStatusHomePg(true)}>Inicio</Button>
    </HeaderContainer>
  );
};

export default Header;