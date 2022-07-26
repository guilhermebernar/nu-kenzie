import logo from "./KenzielogoWhite.png";
import art from "./imagehomeImage.svg";
import { MainApp, LogoBranca , Container, Art, Div1, Div2, FraseDestaque, FraseSecundaria, ButtonPink} from "./style";

const HomePage = ({ setStatusHomePg }) => {
  return (
    <MainApp>
      <Container>
        <Div1>
          <LogoBranca src={logo} alt="Logo" />
          <FraseDestaque>Centralize o controle de suas finanças</FraseDestaque>
          <FraseSecundaria>de forma rápida e segura</FraseSecundaria>
          <ButtonPink onClick={() => setStatusHomePg(false)}>Iniciar</ButtonPink>
        </Div1>
        <Div2>
          <Art src={art} alt="Exemplo de interface" />
        </Div2>
      </Container>
    </MainApp>
  );
};

export default HomePage;
