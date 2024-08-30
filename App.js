import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [age, setAge] = useState('');
  const [limits, setLimits] = useState('');

  const Calculate = () => {
    const numericAge = parseFloat(age.replace(',', '.'));
    if (!isNaN(numericAge)) {
      const lower = (220 - numericAge) * 0.65;
      const upper = (220 - numericAge) * 0.85;
      setLimits(`${lower.toFixed(2)} - ${upper.toFixed(2)}`);
    } else {
      setLimits('');
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.field}>Age</Text>
      <TextInput 
        style={styles.input}
        value={age}
        onChangeText={text => setAge(text)}
        keyboardType='decimal-pad'
      />

      <Text style={styles.field}>Limits</Text>
      <Text style={styles.result}>{limits}</Text>

      <Button title='Calculate' onPress={Calculate} />

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'flex-start',
    paddingTop: 40,
    margin: 8,
  },
  field: {
    marginTop: 8,
    marginBottom: 8,
  },
  result: {
    marginTop: 8,
    marginBottom: 8
  }
});
