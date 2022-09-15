import Card from "./Card/Card";
import { CardList, Buttons, Button01, Button02 } from "./style";

const List = ({
  listTransactions,
  setListTransactions,
  setFilterList,
  filterList,
}) => {
  function filtrar(tipo) {
    const listaFiltrada = listTransactions.filter((item) => {
      if (tipo === "todos") {
        return item;
      } else {
        return item.type === tipo;
      }
    });
    setFilterList(listaFiltrada);
  }
  return (
    <>
      <Buttons>
        <Button01 onClick={() => filtrar("entrada")}>Entradas</Button01>
        <Button01 onClick={() => filtrar("saida")}>Saídas</Button01>
        <Button02 onClick={() => filtrar("todos")}>Todos</Button02>
      </Buttons>
      <CardList>
        {filterList.map((transaction, index) => (
          <Card
            transaction={transaction}
            key={index}
            setListTransactions={setListTransactions}
            listTransactions={listTransactions}
            setFilterList={setFilterList}
          />
        ))}
      </CardList>
    </>
  );
};

export default List;
