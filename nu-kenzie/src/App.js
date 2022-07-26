import "./App.css";
import {Main, ContainerForm} from "./style";
import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([
    { description: "Salário recebido", type: "entrada", value: 2500 },
    { description: "Conta de luz", type: "saída", value: -150 },
  ]);
  const [statusHomePg, setStatusHomePg] = useState(false);

  return (
    <div className="App">
    {statusHomePg?
      (
      <>
        <div>
          <HomePage setStatusHomePg={setStatusHomePg}/>
        </div>
      </>
      )
      :
      (      
      <>
        <Header setStatusHomePg={setStatusHomePg}/>
        <Main>
          <ContainerForm>
            <Form
              listTransactions={listTransactions}
              setListTransactions={setListTransactions} />
            <TotalMoney listTransactions={listTransactions} />
          </ContainerForm>
          <div>
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions} />
          </div>
        </Main>
      </>
      )
      
    }

    </div>
  );
}

export default App;
