import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        style={styles.logo}
        source={require('../assets/interna.jpg')}
      />
      <Text style={styles.titulo}>Aulas de Programação com Alexis</Text>
      <Text style={styles.lorem}>
      Vestibulum consequat nisl id nibh dignissim viverra. Suspendisse vulputate turpis nec justo efficitur, fringilla cursus velit imperdiet. In a metus eu erat posuere lacinia eu vitae dolor. Ut lorem justo, interdum eget mattis non, faucibus vitae tellus. Morbi semper auctor turpis, id ultricies est malesuada eget. Duis aliquam magna metus, non auctor massa auctor non. Nunc fringilla velit eu orci convallis malesuada. Pellentesque habitant morbi tristique senectus et netus et malesuada fames ac turpis egestas. Nulla et hendrerit dolor.
      </Text>

      <View style={styles.buttons}>
        <Link href="/" style={styles.button}>Voltar para Index</Link>
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
  logo:{
    width: 300,
    height: 300
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
