import { useState } from "react";
import { FormAddTransacao, Descricao, Grid, CampoInput, Selecao } from "./style";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [type, setType] = useState();

  const handleSubmit = (event) => {
    event.preventDefault();

    setListTransactions(...listTransactions, {
      description: description,
      value: value,
      type: type,
    });
  };

  return (
    <div>
      <FormAddTransacao onSubmit={(event) => handleSubmit(event)}>
        <Descricao>
          <label htmlFor="descricao">Descrição</label>
          <CampoInput
            name="descricao"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          />
          <span>Ex. Compra de roupas</span>
        </Descricao>

        <Grid>
          <Descricao>
            <label htmlFor="valor">Valor</label>
            <CampoInput
              name="valor"
              type="number"
              onChange={(event) => setValue(event.target.value)}
            />
          </Descricao>
          
          <Descricao>
            <label htmlFor="tipo">Tipo</label>
            <Selecao name="tipo" onChange={(event) => setType(event.target.value)}>
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </Selecao>
          </Descricao>
        </Grid>

        <button type="submit">Enviar</button>
      </FormAddTransacao>
    </div>
  );
};

export default Form;
