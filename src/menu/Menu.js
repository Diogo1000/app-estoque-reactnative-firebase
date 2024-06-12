import { Text, View, Pressable } from 'react-native';
import styles from './style';
import { useNavigation } from '@react-navigation/native';
import React from 'react';

const Menu = () => {
    const navigation = useNavigation();

    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}>Menu do sistema</Text>
            
            <Pressable
                onPress={() => navigation.navigate('inserirProdutos')}
                style={styles.formButton}
            >
                <Text style={styles.textButton}>Cadastrar</Text>
            </Pressable>
                
            
            <Pressable
                onPress={() => navigation.navigate('buscarProdutos')}
                style={styles.formButton}
            >
                <Text style={styles.textButton}>Listar produtos</Text>
            </Pressable>

        

        </View>
    );
}

export default Menu;