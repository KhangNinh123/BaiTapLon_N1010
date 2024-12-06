import React, { useState } from 'react';
import { SafeAreaView, View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

export default function RegisterScreen({ navigation }) {
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
  const [username, setUsername] = useState('');
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showInputs, setShowInputs] = useState(false); // Trạng thái nút toggle

<<<<<<< HEAD
  const isFormComplete = email && password && confirmPassword;
=======
<<<<<<< HEAD
  const isFormComplete = email && password && confirmPassword;
=======
  const isFormComplete = username && email && password && confirmPassword;
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9

  const handleSignUp = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
<<<<<<< HEAD
    alert('Sign Up Successful!');
=======
<<<<<<< HEAD
    alert('Sign Up Successful!');
=======
    alert(`Sign Up Successful!\nUsername: ${username}\nEmail: ${email}`);
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    navigation.navigate('Login');
  };

  return (
    <LinearGradient
      colors={['#4423a3', '#aa63cb']}
      style={styles.background}
    >
      <SafeAreaView style={styles.container}>
        <Text style={styles.title}>SIGN UP</Text>
        <TextInput
<<<<<<< HEAD
=======
<<<<<<< HEAD
=======
          placeholder="Username"
          style={styles.input}
          value={username}
          onChangeText={setUsername}
        />
        <TextInput
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
          placeholder="Email"
          style={styles.input}
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
        />
        <TextInput
          placeholder="Password"
          style={styles.input}
          value={password}
          onChangeText={setPassword}
          secureTextEntry
        />
        <TextInput
          placeholder="Confirm Password"
          style={styles.input}
          value={confirmPassword}
          onChangeText={setConfirmPassword}
          secureTextEntry
        />
        <View style={styles.checkContainer}>
          <TouchableOpacity
            style={[styles.checkButton, showInputs && styles.checkButtonActive]}
            onPress={() => setShowInputs(!showInputs)}
          >
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
            {showInputs && <Text style={styles.checkMark}>✔</Text>}
          </TouchableOpacity>
          <Text style={styles.textCheck}>Teacher</Text>
        </View>
        {showInputs && (
          <View style={styles.inputsContainer}>
            <TextInput
              style={styles.input}
              placeholder="Expertise"
            />
            <TextInput
              style={styles.input}
              placeholder="Certificate"
            />
          </View>
        )}

<<<<<<< HEAD
=======
=======
          {showInputs && <Text style={styles.checkMark}>✔</Text>}
          </TouchableOpacity>
            <Text style={styles.textCheck}>Teacher</Text>
          </View>
          {showInputs && (
            <View style={styles.inputsContainer}>
              <TextInput
                style={styles.input}
                placeholder="Expertise"
              />
              <TextInput
                style={styles.input}
                placeholder="Certificate"
              />
            </View>
          )}
        
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
        <TouchableOpacity
          style={[styles.btn, isFormComplete ? styles.btnActive : styles.btnInactive]}
          onPress={handleSignUp}
          disabled={!isFormComplete}
        >
          <Text style={[styles.textBtn, isFormComplete && styles.textActive]}>Sign Up</Text>
        </TouchableOpacity>

        <View style={styles.footer}>
          <Text style={styles.link} onPress={() => navigation.navigate('Login')}>
            Already have an account? Login.
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontFamily: 'Roboto',
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: 'center',
    color: '#ffffff',
  },
  input: {
    fontFamily: 'Roboto',
    borderWidth: 1,
    height: 50,
    width: '80%',
    borderColor: '#ccc',
    borderRadius: 5,
    marginBottom: 15,
    paddingHorizontal: 10,
    color: '#ffffff',
    fontSize: 14,
  },
  inputsContainer: {
<<<<<<< HEAD
=======
<<<<<<< HEAD
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    width: '100%',
    marginLeft: 65,
    justifyContent: 'center',
    alignContent: 'center',
<<<<<<< HEAD
=======
=======
    width:'100%',
    marginLeft:65,
    justifyContent:'center',
    alignContent:'center',
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
  },
  btn: {
    borderWidth: 1,
    height: 50,
    width: '80%',
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  btnInactive: {
    borderColor: '#D1D1D1',
  },
  btnActive: {
    borderColor: 'white',
  },
  textBtn: {
    fontFamily: 'Roboto',
    fontSize: 14,
    textAlign: 'center',
    color: '#D1D1D1',
  },
  textActive: {
    color: 'white',
  },
  link: {
    fontFamily: 'Roboto',
    marginTop: 20,
    textAlign: 'center',
<<<<<<< HEAD
    justifyContent: 'center',
=======
<<<<<<< HEAD
    justifyContent: 'center',
=======
    justifyContent:'center',
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    color: 'white',
  },
  footer: {
    borderTopWidth: 1,
    borderColor: 'white',
    width: '100%',
    position: 'absolute',
    bottom: 15,
    alignSelf: 'center',
  },
<<<<<<< HEAD
  checkContainer: {
    flexDirection: 'row',
=======
<<<<<<< HEAD
  checkContainer: {
    flexDirection: 'row',
=======
  checkContainer:{
    flexDirection:'row',
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    alignSelf: 'flex-end',
    marginRight: 35,
  },
  checkButton: {
    borderWidth: 1,
<<<<<<< HEAD
    height: 15,
    width: 15,
=======
<<<<<<< HEAD
    height: 15,
    width: 15,
=======
    height:15,
    width:15,
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    borderColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkButtonActive: {
    backgroundColor: '#fff',
  },
  checkMark: {
    color: '#4423a3',
    fontSize: 18,
    fontWeight: 'bold',
  },
<<<<<<< HEAD
  textCheck: {
    marginLeft: 10,
=======
<<<<<<< HEAD
  textCheck: {
    marginLeft: 10,
=======
  textCheck:{
    marginLeft:10,
>>>>>>> e4b4ccc6effd90b572f6128ca3eae48b84280466
>>>>>>> ecc8853b142553b8fc055a4d856cfc7e2f867fd9
    fontFamily: 'Roboto',
    textAlign: 'center',
    color: 'white',
  },
});
