import { StyleSheet } from 'react-native';

export default StyleSheet.create({ 
    // heyContainer: {
    //     padding: 0,
    //     gap: "10%",
    //     width: "80%",
    //     height: "65%"
    // },
    avatar: {
        position: "absolute",
        top: "20%"
    },
    input: {
        position: "absolute",
        width: "80%",
        top: "54%",
        height: "7%",
        borderWidth: 1,
        borderColor: "#95DAD7",
        borderRadius: 24,
        paddingLeft: "5%",   
        paddingRight: "5%",  
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