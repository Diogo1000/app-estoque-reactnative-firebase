import { StatusBar } from 'expo-status-bar';
import { Text, View, TextInput,Pressable } from 'react-native';
import styles from './style';
import { useState } from 'react';
import { auth } from '../../firebaseconfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useNavigation } from '@react-navigation/native';



export default function TelaLogin() {
  const [userMail, setUserMail] = useState('');
  const [userPassword, setUserPassword] = useState('');
  const navigation = useNavigation();
  async function userLogin() {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, userMail, userPassword);
      const user = userCredential.user;
      // navegar Menu
      navigation.navigate('Menu');
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      alert(errorMessage);
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.formMarca}>EstoqueCell</Text>
      <Text style={styles.formTitle}>Login no sistema</Text>
      <StatusBar style="auto" />

      <TextInput style={styles.formInput}
        placeholder="Informe o E-mail"
        keyboardType="email-address"
        autoCapitalize="none"
        autoComplete="email"
        value={userMail}
        onChangeText={setUserMail}
      />
      <TextInput style={styles.formInput}
        placeholder="Informe a senha"
        autoCapitalize="none"
        secureTextEntry
        value={userPassword}
        onChangeText={setUserPassword}
      />
    

      <Pressable style={styles.formButton} 
        onPress={userLogin}>
        <Text style={styles.textButton}>Logar</Text>
      </Pressable>
      <View style={styles.subContainer}>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Esqueci a senha</Text>
        </Pressable>
        <Pressable style={styles.subButton}>
          <Text style={styles.subTextButton}>Novo usuário</Text>
        </Pressable>
      </View>
    </View>
  );
}