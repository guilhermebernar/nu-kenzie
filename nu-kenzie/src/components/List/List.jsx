import Card from "./Card/Card";
import {CardList} from "./style"

const List = ({ listTransactions }) => {
  return (
    <CardList>
      {listTransactions.map((transaction, index) => (
        <Card transaction={transaction} key={index} />
      ))}
    </CardList>
  );
};

export default List;
