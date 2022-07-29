import { useState } from "react";
import { FormAddTransacao, Descricao, Grid, CampoInput1, CampoInput2, Selecao, ButtonPink, LabelText, LabelComment } from "./style";

const Form = ({ listTransactions, setListTransactions }) => {
  const [description, setDescription] = useState();
  const [value, setValue] = useState();
  const [type, setType] = useState("entrada");

  const handleSubmit = (event) => {
    event.preventDefault();

    setListTransactions([...listTransactions, {
      description: description,
      type: type,
      value: value,
    }]);
  };

  return (
    <div>
      <FormAddTransacao onSubmit={(event) => handleSubmit(event)}>
        
        <Descricao>
          
          <LabelText htmlFor="descricao">Descrição</LabelText>
          <CampoInput1
            name="descricao"
            type="text"
            onChange={(event) => setDescription(event.target.value)}
          />
          <LabelComment>Ex. Compra de roupas</LabelComment>
        
        </Descricao>

        <Grid>
          
          <Descricao>
          
            <LabelText htmlFor="valor">Valor</LabelText>
            <CampoInput2
              name="valor"
              type="number"
              onChange={(event) => setValue(event.target.value)}
            />
            <LabelComment>Indicar negativo com sinal de menos.</LabelComment>
          
          </Descricao>
          
          <Descricao>
            
            <LabelText htmlFor="tipo">Tipo</LabelText>
            <Selecao name="tipo" onChange={(event) => setType(event.target.value)}>
              <option value="entrada">Entrada</option>
              <option value="saida">Saída</option>
            </Selecao>
          
          </Descricao>
        
        </Grid>

        <ButtonPink type="submit">Enviar</ButtonPink>
      </FormAddTransacao>
    </div>
  );
};

export default Form;
