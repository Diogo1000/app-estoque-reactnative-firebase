import { StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    formTitle:{
      fontSize: 36,
      fontWeight: 'bold',
      color: 'blueviolet',
      margin: 10
    },
    item: {
      backgroundColor: '#f5f5f5cf',
      padding: 20,
      marginVertical: 8,
      marginHorizontal: 16,
      fontSize: 20,
      fontWeight:'bold',
      borderRadius: 10,
      width: '65%'
      
    },
    textItem:{
      fontSize: 16,
      fontWeight:'bold',
    },
      formButton:{
        backgroundColor: '#ff0000',
        margin: 10,
        padding: 10,
        width:50,
        height:50,
        borderRadius: 35,
        alignItems: 'center', 
        justifyContent: 'center',
        
    },
    textButton:{
      color: 'white',
      fontSize: 20,
      fontWeight: 'bold',
    },
    viewButton:{
      width:'100%',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center'
    }
    
  
  });

  export default styles