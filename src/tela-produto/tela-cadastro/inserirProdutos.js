
import { Text, TextInput, View, Pressable } from 'react-native';
import React, { useState } from 'react';
import { styles } from './style.js';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import firebase from '../../../firebaseconfig';
import { useNavigation } from '@react-navigation/native';


export default function InserirProdutos() {
    const navigation = useNavigation();
    const [nomeProduto, setNomeProduto] = useState('');
    const [valorProduto, setValorProduto] = useState('');
    const [quantidadeProduto, setQuantidadeProduto] = useState('');

    const addProduto = async () => {
        try {
            const db = getFirestore(firebase);

            // Adicionando um produto com os dados inseridos
            const docRef = await addDoc(collection(db, 'produtos'), {
                nomeProduto: nomeProduto,
                valorProduto: valorProduto,
                estoqueProduto: quantidadeProduto
            });

            console.log('Produto adicionado com ID: ', docRef.id);
            // Limpar os campos após a submissão bem-sucedida
            setNomeProduto('');
            setValorProduto('');
            setQuantidadeProduto('');
        } catch (error) {
            console.error('Erro ao adicionar produto: ', error);
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.formTitle}> Cadastrar produto</Text>

            <TextInput
                style={styles.formInput}
                placeholder="Nome do produto"
                value={nomeProduto}
                onChangeText={setNomeProduto}
            />
            <TextInput
                style={styles.formInput}
                placeholder="Preço do produto"
                value={valorProduto}
                onChangeText={setValorProduto}
                keyboardType='numeric'
            />
            <TextInput
                style={styles.formInput}
                placeholder="Quantidade em estoque"
                value={quantidadeProduto}
                onChangeText={setQuantidadeProduto}
                keyboardType="numeric"
            />
            <Pressable
                style={styles.formButton}
                onPress={addProduto}
            >
                <Text style={styles.textButton}>Cadastrar</Text>
            </Pressable>
        </View>
    );
}
