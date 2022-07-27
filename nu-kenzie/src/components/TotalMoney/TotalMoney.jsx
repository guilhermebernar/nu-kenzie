import { Conteiner, Total, Comment, IntroValor, Valor } from "./style";

const TotalMoney = ({ listTransactions }) => {
  const total = () => {
    return listTransactions.reduce((p, c) => p + Number(c.value), 0);
  };

  return (
    <>
      {total() > 0 ? (
        <Conteiner>
          {total() > 0 && (
            <Total>
              <IntroValor>Valor total:</IntroValor>
              <Valor>
                {total().toLocaleString("pt-br", {
                  style: "currency",
                  currency: "BRL",
                })}
              </Valor>
            </Total>
          )}
          <div>
            <Comment>O valor se refere ao seu saldo</Comment>
          </div>
        </Conteiner>
      ) : (
        <></>
      )}
    </>
  );
};

export default TotalMoney;
