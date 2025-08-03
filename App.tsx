import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import './global.css';
import LibraryScreen from './screens/LibraryScreen';
export default function App() {
  return (
    <SafeAreaView className="flex-1 bg-background">
      <LibraryScreen />
      <StatusBar style="auto" />
    </SafeAreaView>
  );
}
