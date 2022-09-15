import {CardTransacao, Conteiner, ImgExcluir , ButtonExcluir, DecricaoTitlest, Valor, Tipo, Infos} from "./style"
import Img from "./ButtonTrashexcluirCard.png"

const Card = ({ transaction, index, listTransactions, setListTransactions, setFilterList }) => {
  
  const valor = () =>{
    return Number(transaction.value)
  }

  function excluir(){
    const newList = listTransactions.filter(item => item !== transaction)
    setListTransactions(newList)
    setFilterList(newList)
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
      <ButtonExcluir onClick={()=>excluir()}>
        <ImgExcluir src={Img}alt="excluir card"/>
      </ButtonExcluir>
    </Conteiner>
    <Tipo>{transaction.type}</Tipo>
  </CardTransacao>;
};

export default Card;
