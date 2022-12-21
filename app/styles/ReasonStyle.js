import { StyleSheet } from 'react-native';

export default StyleSheet.create({
    heading: {
        position: "absolute",
        width: "80%",
        top: "8%",
        fontStyle: 'normal',
        fontSize: 32,
        FontFace: 'Inter',
        fontWeight: "400px",
        color: "#0A0A0A",
        textAlign: "center"
    },
    list: {
        top: "22%",
       // width: "80",
        marginHorizontal: "4%",
         flex: 1,
        //flexGrow: 1
    },
    button: {
        paddingHorizontal: "6%",
        paddingVertical: "10%",
        backgroundColor: "#FCF2EC",
        alignSelf: "flex-start",
        marginHorizontal: "2%",
        marginVertical: "2%",
        minWidth: "45%",
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
        paddingBottom: "2%"
    },
    arrowBtn: {
        width: "11%",
        height: "5%",
        top: "200%",
        backgroundColor: "#00B5F8",
        borderRadius: 35,
    },
});