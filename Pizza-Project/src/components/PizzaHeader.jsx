const styles = {
    header: {
      background: "#CE2829",
      padding: "25px 40px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "20px",
    },
    logo: {
      fontFamily: "'Barlow', serif",
      fontSize: "30px",
      fontWeight: "700",
      color: "#FAF7F2",
      margin: 0,
    },
  };
  
  export default function PizzaHeader() {
    return (
      <header style={styles.header}>
        <h1 style={styles.logo}>Teknolojik Yemekler</h1>
      </header>
    );
  }