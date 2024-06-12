import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';
import { updateDoc, doc } from 'firebase/firestore';
import { useNavigation, useRoute } from '@react-navigation/native';
import { db } from '../../../firebaseconfig'; // Importe a instância do Firestore
import styles from './style';



const EditarProduto = () => {
  const navigation = useNavigation();
  const route = useRoute();
  const { produto } = route.params; // Obtenha os detalhes do produto dos parâmetros de navegação

  const [nomeProduto, setNomeProduto] = useState(produto.nomeProduto);
  const [valorProduto, setValorProduto] = useState(produto.valorProduto);
  const [estoqueProduto, setEstoqueProduto] = useState(produto.estoqueProduto);



  
  const handleAtualizarProduto = async () => {
    try {
      // Atualize os detalhes do produto no Firestore
      await updateDoc(doc(db, 'produtos', produto.id), {
        nomeProduto: nomeProduto,
        valorProduto: valorProduto,
        estoqueProduto: estoqueProduto
      });
      
      // Navegue de volta para a tela de lista de produtos após a atualização
      navigation.navigate('buscarProdutos');
      
    } catch (error) {
      console.error('Erro ao atualizar produto:', error);
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Editar Produto</Text>
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
        value={estoqueProduto}
        onChangeText={setEstoqueProduto}
        keyboardType="numeric"
      />
      <Pressable onPress={handleAtualizarProduto} style={styles.formButton}>
        <Text style={styles.textButton}>Atualizar Produto</Text>
      </Pressable>
    </View>
  );
};

export default EditarProduto;