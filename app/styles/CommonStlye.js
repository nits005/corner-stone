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
  heading: {
    position: "absolute",
    width: "80%",
    top: "27%",
    fontStyle: 'normal',
    fontSize: 32,
    FontFace: 'Inter',
    fontWeight: "400px",
    color: "#0A0A0A",
    textAlign: "center"
  },
  content: {
    position: "absolute",
    display: "flex",
    width: "70%",
    top: "37%",
    fontStyle: 'normal',
    fontSize: 16,
    FontFace: 'Inter',
    fontWeight: "400px",
    color: "#666666",
    textAlign: "center"
  },
  arrowBtn: {
    position: 'absolute',
    width: "11%",
    height: "5%",
    top: "70%",
    backgroundColor: "#00B5F8",
    borderRadius: 35,
  },
  arrowImg: {
    width: "50%",
    height: "50%",
    top: "25%",
    left: "20%"
  },
  disableBtn: {
    backgroundColor: "#E0E0E0"
  }
  // arrow: {
  //   FontFace: 'Inter',
  //   fontStyle: 'normal',
  //   fontWeight: "500px",
  //   fontSize: 30,
  //   textAlign: "center",
  //   color: "#FFFFFF",
  //   bottom: "10%"
  // },
});