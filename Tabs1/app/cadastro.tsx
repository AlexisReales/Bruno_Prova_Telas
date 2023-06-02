import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, TextInput, TouchableOpacity} from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/interna.jpg')}
      />
      <Text style={styles.titulo}>Aulas de Programação com Alexis</Text>

      <TextInput
        style={styles.input}
        placeholder='Nome'
        placeholderTextColor={'#fff'}
      />
      <TextInput
        style={styles.input}
        placeholder='Email'
        placeholderTextColor={'#fff'}
      />
      <TextInput
        style={styles.input}
        placeholder='Data atual: dd/mm/aa'
        placeholderTextColor={'#fff'}
      />
      <TextInput
        style={styles.input}
        placeholder='CPF'
        placeholderTextColor={'#fff'}
      />
      <View style={styles.div}>
        <TouchableOpacity style={styles.tocavel}>
          <Text style={styles.tocavelText}>
            Salvar
          </Text>
        </TouchableOpacity>

        <Link href="/" style={styles.voltar}>Voltar Index</Link>
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
  logo:{
    width: 300,
    height: 300
  },
  input:{
    backgroundColor: '#444',
    padding: 10,
    margin: 5,
    borderRadius: 10,
  },
  tocavel:{
    backgroundColor: '#111',
    padding: 10,
    margin: 10,
    borderRadius: 10,
  },
  tocavelText:{
    color: '#fff'
  },
  div:{
    display: 'flex',
    flexDirection: 'row'
  },
  voltar:{
    backgroundColor: '#111',
    color: '#fff',
    padding: 10,
    alignSelf: 'center',
    borderRadius: 10
  }
});
