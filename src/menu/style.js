import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff',
  },
  formTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  formButton: {
    backgroundColor: 'blueviolet',
    padding: 10,
    borderRadius: 5,
    marginBottom: 10,
    width: 300, 
    alignItems: 'center',
  },
  textButton: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold'
  },
});

export default styles;