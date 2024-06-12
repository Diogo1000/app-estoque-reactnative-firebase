import { StatusBar } from 'expo-status-bar';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native'; 
import { createStackNavigator } from '@react-navigation/stack';
import TelaLogin from './src/telalogin/TelaLogin';
import Menu from './src/menu/Menu';
import InserirProdutos from './src/tela-produto/tela-cadastro/inserirProdutos';
import EditarProdutos from './src/tela-produto/tela-editar/editarProdutos';
import BuscarProdutos from './src/tela-produto/tela-buscar/buscarProduto';


const Stack = createStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
         <Stack.Screen name="Login" component={TelaLogin} />
         <Stack.Screen name="Menu" component={Menu} />
         <Stack.Screen name="inserirProdutos" component={InserirProdutos} />
         <Stack.Screen name="editarProdutos" component={EditarProdutos} />
         <Stack.Screen name="buscarProdutos" component={BuscarProdutos} />
         
         
      </Stack.Navigator>
    </NavigationContainer>
  );
}