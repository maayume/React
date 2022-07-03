import Header from "../../componentes/Header";
import "../../../src/styles/global.css";
import Box from "../../componentes/Box";

function Home() {
  const sendEmail = () =>{
    alert("Email enviado com sucesso!");
  }

  return (
    <div className="Home">
      <Header />
      <main>
        <Box background="claro">
          <h1>Educação Financeira é tudo de bom
              <a>Vem comigo que te mostro por onde começar</a>
              <button className="button" onClick={sendEmail}>Quero saber mais</button>
          </h1>
        </Box>
        <Box background="escuro"></Box>
      </main> 
    </div>
  );
}

export default Home;
