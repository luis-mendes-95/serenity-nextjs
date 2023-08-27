import bowlsImage from './bowls.png';

const Bowls = () => {
  return (
    <ul style={{
        backgroundColor:"black",
        position: "absolute",
        top: "0",
        right:"0",
        zIndex: "-7",
        width: "60%",
        display: "flex",
        justifyContent: "flex-start",
        alignItems: "flex-start",
        overflow: "hidden",
        height: "93vh",
        opacity: "0.7"
    }}>
        <li style={{
            margin: "5% 0 0 0",
            padding: "2%",
            gap: "5%",
            backgroundColor:"green",
            width:"85%",
            display: "flex",
            borderRadius:"5%",
            flexWrap: "wrap"

        }}>
            <img src={bowlsImage} style={{
                height:"90px",
            }} />
            <p style={{
                color:"white",
                textShadow:"1pt 1pt 1pt black",
                fontSize:"18pt"
            }}>Necessidades Básicas</p>
            <p style={{
                color:"white",
                fontSize: "18pt"
            }}>
                R$ 12.375,60
            </p>
        </li>
    </ul>
  )
}

export default Bowls