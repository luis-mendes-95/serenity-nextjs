import React from 'react';
import bowlsImage from './bowls.png';

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
      top: "0",
      right: "0",
      zIndex: "-7",
      width: "80%",
      display: "flex",
      flexDirection: "column", // Mudamos para uma coluna
      alignItems: "flex-start",
      justifyContent:"center",
      overflow: "hidden",
      height: "93vh",
      opacity: "0.7"
    }}>

      {main_bowls.map((bowl) => {
        return (
          <li key={bowl.id} style={{
            margin: "3%", // Espaçamento superior e inferior menor
            padding: "1%", // Espaçamento interno menor
            backgroundColor: "green",
            width: "90%", // Largura de 100% para ocupar toda a largura do container
            display: "flex",
            flexDirection: "row",
            borderRadius: "5%",
            justifyContent: "space-between",
            alignItems: "center"
          }}>
            <img src={bowlsImage} style={{
              height: "40px",
              marginRight: "1%" // Adicionado espaço à direita da imagem
            }} alt={`Imagem de ${bowl.name}`} />
            <p style={{
              color: "white",
              textShadow: "1pt 1pt 1pt black",
              fontSize: "13pt",
              margin: "0" // Removido espaço inferior
            }}>{bowl.name}</p>
            <p style={{
              color: "white",
              fontSize: "12pt",
              margin: "0",
              
            }}>
              R$ 12.375,60
            </p>
          </li>
        );
      })}

    </ul>
  );
};

export default Bowls;
