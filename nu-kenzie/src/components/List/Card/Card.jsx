import {CardTransacao, Conteiner, ImgExcluir , ButtonExcluir, DecricaoTitlest, Valor, Tipo, Infos} from "./style"
import Img from "./ButtonTrashexcluirCard.png"

const Card = ({ transaction, index }) => {
  return <CardTransacao key={index}>
    <Conteiner>
      <Infos>
          <DecricaoTitlest>
              {transaction.description}
          </DecricaoTitlest>
          <Valor>
              <span>{transaction.value.toLocaleString("pt-br",{style:"currency", currency:"BRL"})}</span>
          </Valor>
      </Infos>
      <ButtonExcluir>
        <ImgExcluir src={Img}alt="excluir card"/>
      </ButtonExcluir>
    </Conteiner>
    <Tipo>{transaction.type}</Tipo>
  </CardTransacao>;
};

export default Card;
