import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image } from 'react-native';
import { Link } from "expo-router";

export default function App() {
    return (
        <View style={styles.container}>
            <View style={styles.um}>
                <View style={styles.esquerda}>
                    <Image
                        style={styles.logo}
                        source={require('../assets/interna.jpg')}
                    />
                    <Image
                        style={styles.logo}
                        source={require('../assets/interna.jpg')}
                    />
                    <Image
                        style={styles.logo}
                        source={require('../assets/interna.jpg')}
                    />
                    <Image
                    style={styles.logo}
                    source={require('../assets/interna.jpg')}
                    />
                </View>
                <View>
                    <Image
                        style={styles.logo}
                        source={require('../assets/interna.jpg')}
                    />
                    <Image
                        style={styles.logo}
                        source={require('../assets/interna.jpg')}
                    />
                    <Image
                        style={styles.logo}
                        source={require('../assets/interna.jpg')}
                    />
                    <Image
                        style={styles.logo}
                        source={require('../assets/interna.jpg')}
                    />
                </View>

            </View>


            <Text style={styles.titulo}>Aulas de Programação com Alexis</Text>

            <View style={styles.buttons}>
                <Link href="/cadastro" style={styles.button}>Voltar para Index</Link>
                <Link href="/" style={styles.button}>Sobre</Link>
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
    titulo: {
        fontSize: 26,
        fontWeight: 'bold',
    },
    logo: {
        width: 200,
        height: 200
    },
    um: {
        display: 'flex',
        flexDirection: 'row',
        marginTop: 10
    },
    esquerda:{
        position: 'relative',
        float: 'left'
    },
    buttons:{
        display: 'flex',
        flexDirection: 'row'
    },
    button:{
        margin: 10,
        backgroundColor: '#111',
        color: '#fff',
        padding: 10,
        borderRadius: 10
    }
});
