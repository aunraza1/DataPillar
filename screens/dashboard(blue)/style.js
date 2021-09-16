import { StyleSheet, Dimensions } from 'react-native'

const { width, height } = Dimensions.get('screen')
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: '#EBEDEF',    
        padding:20            
    },    
    quickStart: {
        height: 207,
        width: width * 0.9,
        borderRadius: 13,
        display: 'flex',
        flexDirection: 'row',
    },
    profileCard: {
        height: 207,
        backgroundColor: '#FFFFFF',
        borderTopStartRadius: 13,
        borderTopRightRadius: 0,
        borderTopEndRadius: 0,
        borderTopLeftRadius: 13,
        elevation: 5,
        shadowColor: 'rgba(0, 0, 0, 0.12)', 
        display:'flex',
   
        
    },
    rectangle11: {
        width: 163.5,
        height: 31,
        backgroundColor: '#114BDF',
        borderTopStartRadius: 13,
        display:'flex',
        alignItems:'center',
    
     
    },
    giveMeMore: {
        height: 16,
        marginTop:width*0.02,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,        
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: -0.05,
        color: "#FFFFFF"
    },
    profilePic: {
        width: 76,
        height: 76,
        marginTop:width*0.02
     
    },
    Name: {
        height: 19,
        top: 15,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 16,
        lineHeight: 19,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.5
    },
    details: {
        height: 19,
        top: 20,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '300',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.5
    },
    editBtn: {
        width: 107.95,
        height: 30,
        display:'flex',
        alignSelf:'center',
        borderWidth:1,
        borderColor:'#D5E0FF',
        backgroundColor: '#D5E0FF',
        borderRadius: 15,
        marginTop:width*0.06
    },
    editBtnText: {
        height: 16.8,
        marginTop:width*0.02,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    profileCard2: {
        height: 207,
        width: (width * 0.9) / 2,
        backgroundColor: '#FFFFFF',
        borderTopRightRadius: 13,
        display:'flex',
    
    },
    summary: {
        borderBottomWidth: 1,
        height: 31,
        borderColor: '#EBEBEB'
    },
    summaryTxt: {
        height: 16.8,
        marginTop:width*0.025,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        textAlign: 'center',
        letterSpacing: 0.5,
    },
    previousWeek: {
        marginTop:10,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.5,
        color: '#757575'
    },
    time: {
        marginTop:4,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.5,
        color: '#757575'
    },
    week: {
        borderBottomWidth: 1,
        borderColor: '#EBEBEB',
        height:60,
        flexDirection: 'row',
        justifyContent: 'space-evenly' 
    },
    column:{
        flexDirection:'column'
    },
    circle: {
        marginTop:10,
        width: 40,
        height: 40,
        alignSelf:'flex-end',
        borderRadius: 20,
        borderColor: '#C8D7FC',
        borderWidth: 7,
    },
    textPercentage: {
        fontSize: 9,
        textAlign: 'center',
        top: 5
    },
    estimatedTimes: {
        width: width * 0.90,
        marginTop:20,
        height: 173,
        backgroundColor: '#FFFFFF',
        borderRadius: 13,
    },
    btnCurrent: {
        width: 100.18,
        height: 30,
        backgroundColor: '#E2E2E2',
        borderWidth: 1,
        borderBottomStartRadius: 24,
        borderTopStartRadius: 24,
        borderColor: '#E2E2E2'
    },
    btnNext: {
        width: 100.18,
        height: 30,
        backgroundColor: '#E2E2E2',
        borderWidth: 1,
        borderBottomEndRadius: 24,
        borderTopEndRadius: 24,
        backgroundColor: '#FFFFFF',
        borderColor: '#E2E2E2'
    },
    textCurrent: {
        width: 74.41,
        height: 14,
        textAlign: 'center',
        marginTop:5,
        marginLeft:4,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.5,
        color: '#757575'
    },
    textNext: {
        width: 74.41,
        height: 14,
        textAlign: 'center',
        marginTop:6,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 12,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        letterSpacing: -0.5,
        color: '#757575'
    },
    content: {
        height: 14,
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 14,
        display: 'flex',
    },
    matterContainer: {
        height: 65,
        borderBottomWidth: 1,
        borderColor: '#EBEBEB',
        display:'flex',
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
    },
    add:{
        backgroundColor:'#114BDF',
        borderRadius:15,
        width:72,
        height:30,
    },
    save:{
        backgroundColor:'#2DB954',
        borderRadius:15,
        width:72,
        height:30, 
        marginLeft:10

    },
    addText:{
        height: 20,
        marginTop:5,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 14,
        display: 'flex',
        color:"#FFFFFF"
    },
    saveText:{
        height: 20,
        marginTop:5,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: '500',
        fontSize: 14,
        lineHeight: 14,
        display: 'flex',
        alignItems: 'center',
        color:"#FFFFFF"
    },
    estimatedTimesTxt:{
        fontSize: 18,
         fontWeight: 'bold',
         marginTop:10
    },
    CurrentNext:{
        display: 'flex',
         flexDirection: 'row', 
         justifyContent:'center',
         alignItems:'center', 
         height: 60,
          borderBottomWidth: 1,
           borderColor: '#EBEBEB' 
    },
    addSave:{
        display: 'flex', 
        flexDirection: 'row',
         justifyContent:'center',
         height:50,
         alignItems:'center'
    },
    cardContainer:{
        display:'flex',
        flexDirection:'row',
        backgroundColor:'#FFEEDA',
        borderRadius:13,
        height:50,
        marginLeft:9,
        marginTop:15,

    },
    cardTxt:{
        justifyContent:'space-evenly',
        marginLeft:10,
        flexDirection:'row',
        alignItems:'center'
    },
    namesTxt:{
        height: 16,
        width:120,
        marginTop:5,
        textAlign: 'center',
        fontFamily: 'Roboto',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 14,
        lineHeight: 16,
        display: 'flex',
        alignItems: 'center',
        color:"#000000"
    },
    circle2:{
        marginTop:5,
        height:14,
        width:14,
        borderRadius:7,
        backgroundColor:"#FF7A00"
    },
    vector15:{
        width: 5.75,
        height: 11.5,
        borderStyle:'solid',
        borderWidth:1.6428,
        transform:[{rotate: "100deg" }]


    }
  


})
export default styles