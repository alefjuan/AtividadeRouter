import { StyleSheet, Touchable, TouchableOpacity } from 'react-native';
import EditScreenInfo from '@/components/EditScreenInfo';
import { Text, View } from '@/components/Themed';
import { Link, Stack } from 'expo-router';

export default function TabThreeScreen() {
  return (
    <View style={styles.container}>
      <Stack.Screen options={{title:"Terceiraaaaaaaaaaaaaaaaaaaaaaaaaaaaa"}}></Stack.Screen>
      <Text style={styles.title}>Tela 3</Text>
      <Link href="/(tabs)">Ir para primeira tela</Link>
      <Link href="/(tabs)/alef">Ir para segunda tela</Link>
      {/* <TouchableOpacity onPress={}>Ir para a dois usando botão</TouchableOpacity> */}
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
