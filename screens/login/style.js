import { StyleSheet } from 'react-native'


const styles = StyleSheet.create({
    container: {
        position: 'relative',
        flex:1,
        backgroundColor:'#FFFFFF'
    },
    img2: {
        width: 147.17,
        height: 200,
        top:100,
    },
    titleHeading: {
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        top:100,
        fontSize: 16,
        lineHeight: 19,
        display: 'flex',
        textAlign:'center',
        color: '#000000'
    },
    textInput:{
        width: 252,
        height: 39,
        top: 120,
        borderWidth:1,
        borderColor:'#E2E2E2',
        borderRadius: 6
    },
    textInput2:{
        width: 252,
        height: 39,
        top: 140,
        borderWidth:1,
        borderColor:'#E2E2E2',
        borderRadius: 6
    },
    loginBtn:{
        width: 111,
        height: 42,
        backgroundColor:'#114BDF',
        borderRadius:24,
        top:160
    },
    btnText:{
        top:10,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        display: 'flex',
        alignItems: 'center',
        textAlign:'center',
        color:'#FFFFFF',  
    },
    colorContainer:{
        width: "100%",
       height: 212,
       top:180,
       opacity: 0.6,
    },
  
    // LinearGradient1:{
    //    width:"100%",
    //    height: 187,
    //    position:'absolute',
    //    transform: [{ skewY: "20deg" }]
    
      
    // },
    // LinearGradient2:{
    //     width:"100%",
    //     height: 219.16,
    //     position:'absolute',
    //     transform: [{ skewY: "20deg" }]
     
    //  },
    //  LinearGradient3:{
    //     width:"100%",
    //     height: 22,
    //     position:'absolute',
    //     transform: [{ skewX: "20deg" }]
     
    //  },
    //  LinearGradient4:{
    //     width:"100%",
    //     height: 212,
    //     position:'absolute',
    //     transform: [{ skewY: "30deg" }]
    //  },
    
     backImg:{
         width:"100%",
         height:212,

     },
     contentContainer:{
        display:'flex',
        alignItems:'center',
       justifyContent:'center'
     },
     subContainer:{
        display:'flex',
        alignItems:'center',
        justifyContent:'center'
     },
   


})
export default styles