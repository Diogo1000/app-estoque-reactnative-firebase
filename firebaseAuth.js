import { initializeAuth, getReactNativePersistence } from 'firebase/auth';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { app } from '../../firebaseconfig'; // Supondo que 'app' é a instância do Firebase inicializada

// Inicialize o Firebase Auth com AsyncStorage para persistência
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage)
});

export default auth;
