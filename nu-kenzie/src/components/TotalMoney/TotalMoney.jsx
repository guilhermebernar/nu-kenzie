const TotalMoney = ({ listTransactions }) => {
  const total = () => {
    return listTransactions.reduce((p, c) => p + Number(c.value), 0).toFixed(2).toString();
  }; 

  return (
    <>
      {total() > 0 && (
        <div>
          <span>Valor total:</span>
          <span>R$ {total()}</span>
        </div>
      )}
    </>
  );
};

export default TotalMoney;
