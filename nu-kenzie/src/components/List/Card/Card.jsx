import {CardTransacao, Conteiner, ImgExcluir , ButtonExcluir, DecricaoTitlest, Valor, Tipo, Infos} from "./style"
import Img from "./ButtonTrashexcluirCard.png"

const Card = ({ transaction, index }) => {
  
  const valor = () =>{
    return Number(transaction.value)
  }

  return <CardTransacao key={index}>
    <Conteiner>
      <Infos>
          <DecricaoTitlest>
              {transaction.description}
          </DecricaoTitlest>
          <Valor>
              {valor().toLocaleString("pt-br",{style:"currency", currency:"BRL"})}
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
