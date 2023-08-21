import { StyleSheet } from 'react-native';

import EditScreenInfo from '../../components/EditScreenInfo';
import { AnimatedHeaderScrollView } from "../../components/Header";
import { Text, View } from '../../components/Themed';

export default function TabOneScreen() {
  return (
    <AnimatedHeaderScrollView
      header={{
        startOffset: 0,
        endOffset: 200,
      }}
      style={styles.container}
    >
      <Text style={styles.title}>Tab One</Text>
      <View
        style={styles.separator}
        lightColor="#eee"
        darkColor="rgba(255,255,255,0.1)"
      />
      <EditScreenInfo path="app/(tabs)/index.tsx" />
    </AnimatedHeaderScrollView>
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
