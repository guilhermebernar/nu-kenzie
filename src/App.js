import "./App.css";
import {Main, ContainerForm, ContainerList, CardVazio1, CardVazio2, CardVazio3} from "./style";
import { useState } from "react";
import Form from "./components/Form/Form";
import Header from "./components/Header/Header";
import List from "./components/List/List";
import TotalMoney from "./components/TotalMoney/TotalMoney";
import HomePage from "./components/HomePage/HomePage";

function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filterList, setFilterList] = useState([]);
  const [statusHomePg, setStatusHomePg] = useState(true);
  const [filterEntrada, setFilterEntrada] = useState(false)
  const [filterSaida, setFilterSaida] = useState(false)

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
              setFilterList={setFilterList}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions} />
            <TotalMoney listTransactions={listTransactions} />
          </ContainerForm>
          <ContainerList>
            {listTransactions.length===0?
            (
              <>
              <CardVazio1/>
              <CardVazio2/>
              <CardVazio3/>
              </>
            ):
            (
              <List
              setFilterList={setFilterList}
              filterList={filterList}
              listTransactions={listTransactions}
              setListTransactions={setListTransactions} />
            )
            }
          </ContainerList>
        </Main>
      </>
      )
      
    }

    </div>
  );
}

export default App;
