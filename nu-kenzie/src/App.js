import "./App.css";
import {Main, ContainerForm, ContainerList} from "./style";
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
  const [statusHomePg, setStatusHomePg] = useState(true);

  return (
    <div className="App">
    {statusHomePg?
      (
      <>
        <HomePage setStatusHomePg={setStatusHomePg}/>
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
          <ContainerList>
            <List
              listTransactions={listTransactions}
              setListTransactions={setListTransactions} />
          </ContainerList>
        </Main>
      </>
      )
      
    }

    </div>
  );
}

export default App;
