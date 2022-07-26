const HomePage = ({setStatusHomePg}) => {
    
    
    return(
        <div>
            <div>
                <img src="" alt="Logo" />
                <h1>Centralize o controle de suas finanças</h1>
                <span>de forma rápida e segura</span>
                <button onClick={()=>setStatusHomePg(true)}>Iniciar</button>
            </div>
            <div>
                <img src="" alt="Exemplo de interface"/>
            </div>
        </div>
    )
}

export default HomePage