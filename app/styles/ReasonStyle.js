import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    list: {
        top: "22%",
       // width: "80",
        marginHorizontal: "4%",
         flex: 1,
        //flexGrow: 1
    },
    button: {
        paddingHorizontal: "3%",
        paddingVertical: "7%",
        backgroundColor: "#FCF2EC",
        alignSelf: "flex-start",
        marginHorizontal: "2%",
        marginVertical: "2%",
        width: "45%",
        textAlign: "center",
    },
    selected: {
        borderColor: "#ED6F85",
        borderWidth: 1
    },
    avatar: {
        alignSelf: "center",
    },
    cardTitle: {
        alignSelf: "center",
        paddingBottom: "5%",
        flexWrap: "wrap",
        minHeight: "5%"
    },
    arrowBtn: {
        width: "11%",
        height: "5%",
        top: "200%",
        backgroundColor: "#00B5F8",
        borderRadius: 35,
    },
});