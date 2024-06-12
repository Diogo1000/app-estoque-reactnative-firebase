import React, { useState, useEffect } from 'react';
import { Text, View, FlatList, StyleSheet, Pressable, Alert } from 'react-native';
import { useNavigation  } from '@react-navigation/native';
import { getFirestore, collection, getDocs, deleteDoc, doc } from 'firebase/firestore';
import styles from './style'; // Importe seus estilos aqui

const ListarProdutos = () => {
  const navigation = useNavigation();
  const [produtos, setProdutos] = useState([]);



  const carregarProdutos = async () => {
    try {
      const db = getFirestore();
      const produtosRef = collection(db, 'produtos');
      const querySnapshot = await getDocs(produtosRef);
      const listaProdutos = [];
      querySnapshot.forEach((doc) => {
        listaProdutos.push({ id: doc.id, ...doc.data() });
      });
      setProdutos(listaProdutos);
    } catch (error) {
      console.error('Erro ao carregar produtos:', error);
    }
  };

  useEffect(() => {
    // Carregar os produtos quando o componente executado
    carregarProdutos();
  }, []);
 


  
  //Função excluir produto

  const handleExcluirProduto = async (id) => {
    Alert.alert(
      'Confirmar exclusão',
      'Tem certeza que deseja excluir este produto?',
      [
        {
          text: 'Cancelar',
          style: 'cancel',
        },
        {
          text: 'Excluir',
          onPress: async () => {
            try {
              const db = getFirestore();
              await deleteDoc(doc(db, 'produtos', id));
              Alert.alert('Produto excluído com sucesso');
              carregarProdutos();
            } catch (error) {
              console.error('Erro ao excluir produto:', error);
            }
          },
        },
      ],
      { cancelable: true }
    );
  };

  const Separator = () => <View style={localStyles.separator} />;

  const handleEditarProduto = (produto) => {
    navigation.navigate('editarProdutos', { produto });
  };

  return (
    <View style={styles.container}>
      <Text style={styles.formTitle}>Lista de Produtos</Text>
      <FlatList
        showsVerticalScrollIndicator={false}
        data={produtos}
        renderItem={({ item }) => (
          <View style={styles.viewButton}>
            <Pressable onPress={() => handleEditarProduto(item)} style={styles.item}>
              <Text style={styles.textItem}>{item.nomeProduto}</Text>
              <Text style={styles.textItem}>Valor: R$ {item.valorProduto}</Text>
              <Text style={styles.textItem}>Estoque: {item.estoqueProduto}</Text>
            </Pressable>

            <Pressable 
            style={styles.formButton}
            onPress={() =>{handleExcluirProduto(item.id)}
              } >
              <Text style={styles.textButton}>X</Text>
            </Pressable>
          </View>
        )}
        keyExtractor={(item) => item.id}
        ItemSeparatorComponent={Separator}
      />
    </View>
  );
};
const localStyles = StyleSheet.create({
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  separator: {
    height: 1,
    width: '100%',
    backgroundColor: 'gray',
  },
});

export default ListarProdutos;
