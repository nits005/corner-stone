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
    heyContainer: {
        padding: 0,
        gap: "10%",
        width: "80%",
        height: "65%"
    },
    avatar: {
        position: "absolute",
        top: "20%",
        width: "15%",
        height: "7%"
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
    input: {
        position: "absolute",
        width: "80%",
        top: "54%",
        height: "7%",
        borderWidth: 1,
        borderColor: "#95DAD7",
        borderRadius: 24,
        padding: "5%",    
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
    arrow: {
        FontFace: 'Inter',
        fontStyle: 'normal',
        fontWeight: "500px",
        fontSize: 30,
        textAlign: "center",
        color: "#FFFFFF",
        bottom: "10%"
    },
    smallText: {
        position: "absolute",
        textAlign: "center",
        width: "80%",
        FontFace: 'Inter',
        fontStyle: 'normal',
        fontWeight: "400px",
        fontSize: 12,
        display: "flex",
        color: "#666666",
        top: "85%",
    }

});