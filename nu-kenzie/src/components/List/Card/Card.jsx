const Card = ({ transaction, index }) => {
  return <li key={index}>
    <div>
        <div>
            <h1>{transaction.description}</h1>
        </div>
        <div>
            <span>{transaction.value}</span>
        </div>
    </div>
    <div>
        <span>{transaction.type}</span>
    </div>
  </li>;
};

export default Card;
