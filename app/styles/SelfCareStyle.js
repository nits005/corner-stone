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
  button:(workType)=> ({
    paddingHorizontal: "6%",
    paddingVertical: "10%",
    backgroundColor: workType === "self-care" ? "#E7E7F3" : "#DBECEF",
    alignSelf: "flex-start",
    marginHorizontal: "2%",
    minWidth: "45%",
    textAlign: "center",
  }),
  selected: {
    borderColor: "#004AAD",
    borderWidth: 1
  },
  avatar: {
    alignSelf: "center",
  },
  cardTitle: {
    alignSelf: "center",
    paddingTop: "5%"
  },
});