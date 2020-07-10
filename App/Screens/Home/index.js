import React from 'react';
import { StyleSheet, Button, View, SafeAreaView, Text, Alert } from 'react-native';
import Constants from 'expo-constants';

function Separator() {
  return <View style={styles.separator} />;
}

export default function Home({navigation}) {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.title}>
          Esta é a tela inicial, clique no botão para ir para tela home secundária, onde há menu de navegação 
          botton tab navigatior do native-paper. 
        </Text>
        <Button
          title="Go to TABS"
          onPress={() => navigation.navigate('Tabs')}
        />
      </View>
      <Separator />
      <View>
        <Text style={styles.title}>
          All interaction for the component are disabled.
        </Text>
      </View>
      <Separator />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: Constants.statusBarHeight,
    marginHorizontal: 16,
  },
  title: {
    textAlign: 'center',
    marginVertical: 8,
  },
  fixToText: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  separator: {
    marginVertical: 8,
    borderBottomColor: '#737373',
    borderBottomWidth: StyleSheet.hairlineWidth,
  },
});