import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";
import { Colors } from 'react-native/Libraries/NewAppScreen';

export default function App() {
  return (
    <View style={styles.container}>
      <Image 
        style={styles.logo}
        source={require('../assets/interna.jpg')}
      />
      <Text style={styles.titulo}>Aulas de Programação com Alexis</Text>
      <Text style={styles.lorem}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris elit neque, 
        efficitur nec posuere eu, mollis eget tortor. Sed viverra condimentum 
        imperdiet. Aliquam bibendum vehicula magna vel tristique. Proin tincidunt non 
        diam eu lobortis. Integer tristique malesuada enim, sit amet tempor nulla
        porta eget. Aenean rutrum justo vel accumsan tempus. Morbi tincidunt erat 
        urna. Vestibulum non odio in risus varius pellentesque. Mauris gravida nisi 
        vel urna pulvinar blandit.
      </Text>
      <View style={styles.buttons}>
        <Link href="/cadastro" style={styles.button}>Cadastro</Link>
        <Link href="/home" style={styles.button}>Home</Link>
      </View>
      
      <StatusBar style="auto" />
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
  titulo:{
    fontSize: 26,
    fontWeight: 'bold',
  },
  logo: {
    width: 300,
    height: 300,
    margin: 10
  },
  lorem:{
    maxWidth: '70%',
    textAlign: 'justify',
    padding: 10
  },
  button:{
    backgroundColor: '#111',
    color: '#fff',
    padding: 10,
    borderRadius: 10,
    margin: 10
  },
  buttons:{
    display: 'flex',
    flexDirection: 'row',
  }
});
