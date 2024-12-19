import React, {useState} from 'react';
import {
  View,
  TextInput,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from 'react-native';

const SimpleForm = () => {
  const [input1, setInput1] = useState('');
  const [input2, setInput2] = useState('');

  const handleButtonPress = () => {
    const output = JSON.stringify({input1, input2});
    console.log(output);
  };

  return (
    <SafeAreaView style={styles.safeContainer}>
      <View style={styles.container}>
        <Text style={styles.title}>Simple Form</Text>
        <TextInput
          style={styles.input}
          placeholder="Enter value for Input 1"
          value={input1}
          onChangeText={setInput1}
          testID="input1"
        />
        <TextInput
          style={styles.input}
          placeholder="Enter value for Input 2"
          value={input2}
          onChangeText={setInput2}
          testID="input2"
        />
        <TouchableOpacity
          testID="submitButton"
          style={[
            styles.buttonContainer,
            !(input1 && input2) && styles.buttonDisabled,
          ]}
          onPress={handleButtonPress}
          disabled={!(input1 && input2)}>
          <Text style={styles.buttonTitle}>Submit</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeContainer: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  container: {
    flex: 1,
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 30,
    color: '#333',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    marginBottom: 20,
    elevation: 1,
  },
  buttonContainer: {
    marginTop: 20,
    backgroundColor: '#6200EE',
    paddingVertical: 15,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 3,
  },
  buttonTitle: {
    color: '#fff',
    fontSize: 18,
    fontWeight: 'bold',
  },
  buttonDisabled: {
    backgroundColor: '#ccc',
  },
});

export default SimpleForm;
