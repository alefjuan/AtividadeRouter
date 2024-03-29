import { StyleSheet } from 'react-native';

import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link, useGlobalSearchParams, useRouter } from 'expo-router';

export default function TabTwoScreen() {
  const router = useRouter();
  const {nome} = useGlobalSearchParams();
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tela 2</Text>
      <Link href="/three">Ir para Terceira tela, {nome}</Link>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },
});
