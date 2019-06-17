import { 
    StyleSheet
 } from 'react-native';

export const styles = StyleSheet.create({
    //==================Common style============================//
    backGround:{
        height:"100%",
        width:"100%",
        flex:1,
    },
    //==================Sign up style============================//

    //==================Login style=============================//

    //==================Home style==============================//

    //==================Order style=============================//

    //==================Product style===========================//

    //==================Modal style===========================//
    modalContainer:{
        height:"100%",
        width:"100%",
        flex:1,
        backgroundColor:"#E8E8E8"
    },
    modalHeader:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    modalBody:{
        flex:5,
    },
    modalForm:{
        flex:3,
        height:"100%",
        width:"85%",
        marginLeft:30,
        marginRight: 40,
    },
    modalButton:{
        flex:2,
        justifyContent: 'center',
        width:"85%",
        marginLeft:30,
    },

    headerTitle:{
        fontSize:25,
        fontFamily:'Open Sans',
        fontWeight:'500',
    },

    infoInput:{
        height:"20%",
        width:"85%",
        borderBottomWidth:1,
        borderBottomColor: 'gray',
        fontSize:16,
    },
    amount:{
        width:"30%",
    },
    formLoading:{

    },

    button:{
        width: "88%",
        height: 50,
        borderRadius: 10,
        marginTop:5,
        marginLeft: 16,
        shadowColor: '#464646', //Set color
        shadowOffset: {
            width: 0,     //Set width and height for shadow
            height: 2
        },
        shadowRadius: 5,   //Set radius
        shadowOpacity: 1.0, //Set Opacity
        elevation: 3, // Set elevation - A must have for android 5+
    },
    buttonTitle:{
        fontSize:18,
        fontWeight:'500',
        textAlign:'center',
        marginTop:13,
    }


    //==================Other style=============================//
})