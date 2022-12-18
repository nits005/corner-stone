import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#FFFFFF",
    position: "relative",
    width: "100%",
    height: "100%",
  }, 
  appName: {
    position: "absolute",
    width: "80%",
    fontSize: 50,
    top: "15%",
    textAlign: "center",
    color: '#004AAD'
  },
  logo: {
    position: "absolute",
    width: "37%",
    height: "20%",
    top: "28%",
    alignContent: "center"
  },
  text: {
    position: "absolute",
    width: "80%",
    top: "53%",
    fontStyle: 'normal',
    fontSize: 28,
    FontFace: 'Inter',
    fontWeight: "400px",
    color: "#666666",
    textAlign: "center"
  }, 
  button: {
    display: "flex",
    position: "absolute",
    padding: "5%",
    gap: "10%",
    width: "80%",
    height: "7%",
    left: "10%",
    top: "75%",
    backgroundColor: "#00B5F8",
    borderRadius: 6,
  },
  buttonText: {
    FontFace: 'Inter',
    fontStyle: 'normal',
    fontWeight: "500px",
    fontSize: 16,
    textAlign: "center",
    color: "#FFFFFF",
  },
  smallText: {
    textAlign: "center",
    width: "60%",
    height: "10%",
    FontFace: 'Inter',
    fontStyle: 'normal',
    fontWeight: "400px",
    fontSize: 16,
    display: "flex",
    color: "#0A0A0A",
    top: "40%",
  }
});