
import { StyleSheet, Text, View, TextInput, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.nav} >
        <Text style={{color: '#FFFFFF'}}>MI PRIMERA APP</Text>
        <TextInput placeholder='Busqueda' placeholderTextColor={'#cccccc'} style={{height: 40, borderColor: 'gray', borderWidth: 1, width: 200, backgroundColor: 'white',padding: 10}}>Busqueda</TextInput>
        <Button title="BUSCAR" />
      
      </View>
      <View style={styles.container} >
        <Text>CONTENIDO PRINCIPAL</Text>
      </View>
      <View style={styles.containerGray} >
        <Text>🏠🧑⚙️</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  nav: {
    flex: 1,
    backgroundColor: '#314c53',
    color: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: '50px',
  },
  containerGray: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
  }

});
