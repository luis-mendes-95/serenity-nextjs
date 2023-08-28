import bowlsImage from './bowls.png';

const userLoggedIn = false;

const main_bowls = [
  { name: 'Necessidades Básicas', id: "1" },
  { name: 'Diversão', id: "2" },
  { name: 'Longo Prazo', id: "3" },
  { name: 'Educação', id: "4" },
  { name: 'Doação', id: "5" },
  { name: 'Liberdade Financeira', id: "6" }
];

const Bowls = () => {
  return (
    <ul style={{
      position: "absolute",
      backgroundColor: 'rgb(153, 228, 243)',
      top: "0",
      right: "0",
      zIndex: "-7",
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "flex-end",
      justifyContent: "center",
      overflow: "hidden",
      height: "100vh",
      margin: "0"
    }}>
      {userLoggedIn ? (
        main_bowls.map((bowl) => (
          <li key={bowl.id} style={{
            margin: "1%",
            padding: "1%",
            backgroundColor: "green",
            opacity: "0.8",
            width: "200px",
            display: "flex",
            flexDirection: "column",
            borderRadius: "5%",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <img src={bowlsImage} style={{
              height: "40px",
              marginRight: "1%"
            }} alt={`Imagem de ${bowl.name}`} />
            <p style={{
              color: "white",
              textShadow: "1pt 1pt 1pt black",
              fontSize: "13pt",
              margin: "0"
            }}>{bowl.name}</p>
            <p style={{
              color: "lightblue",
              fontSize: "12pt",
              margin: "0",
              textShadow: "1pt 1pt 1pt black",
            }}>
              R$ 12.375,60
            </p>
          </li>
        ))
      ) : (
        <>
          <iframe style={{
            position:"absolute",
            right:"-15%",
            width: "100%",
            top: "0"
            
          }} src="https://giphy.com/embed/72HahsJD4atSE" width="70%" height="360" frameBorder="0" allowFullScreen></iframe>
          <li style={{
            color: "black",
            listStyle: "none",
            textAlign: "center",
            width: "100%"
          }}>
            <p style={{
              position: "absolute",
              bottom: "0%",
              width: "55%",
              right: "10%",
              fontFamily:"serif",
              fontSize: "14pt",
              color: "black",
              textShadow: "1pt 1pt 2pt white"
            }}>
              "Descubra o poder de transformar seus sonhos financeiros em realidade com Serenity, seu aliado na jornada para a riqueza e prosperidade, inspirado na sabedoria dos 'potinhos' do livro 'Segredos da Mente Milionária'. Desbloqueie uma nova mentalidade financeira e conquiste a paz financeira que você merece."
            </p>
          </li>
        </>
      )}
    </ul>
  );
};

export default Bowls;
