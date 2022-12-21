import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  appName: {
    position: "absolute",
    width: "80%",
    fontSize: 50,
    top: "15%",
    textAlign: "center",
    color: '#004AAD'
  },
  logoCircle: {
    position: "absolute",
    width: "49%",
    height: "22%",
    top: "25%",
    alignContent: "center",
    //elevation: 2,
    borderWidth: 1,
    borderColor: "#00000029",
    borderRadius: 100,
  },
  logo: {
    width: "56%",
    height: "67.5%",
    top: "16%",
    left: "18%",
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