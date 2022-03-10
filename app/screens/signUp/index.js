import React, {useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../authentication/authProvider';

import FormInput from '../../components/formInput';
import FormButton from '../../components/formButton';
import SocialButton from '../../components/socialButton';

function SignupScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState();

  const {register} = useContext(AuthContext)

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Create an account</Text>
      <FormInput
        labelValue={email}
        onChangeText={userEmail => setEmail(userEmail)}
        placeholderText="Email"
        iconType="user"
        keyboardtype="email-address"
        autoCapitalize="none"
        autoCorrect={false}
      />
      <FormInput
        labelValue={password}
        onChangeText={userPassword => setPassword(userPassword)}
        placeholderText="Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormInput
        labelValue={confirmPassword}
        onChangeText={userConfirmPassword =>
          setConfirmPassword(userConfirmPassword)
        }
        placeholderText="Confirm Password"
        iconType="lock"
        secureTextEntry={true}
      />
      <FormButton
        buttonTitle="Sign Up"
        onPress={() => {register(email, password)}}
      />
      <View style={styles.textPrivate}>
        <Text style={styles.color_textPrivate}>
          By registering, you confirm that you accept our
        </Text>
        <TouchableOpacity onPress={() => alert('Terms and Conditions')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Terms of Service
          </Text>
        </TouchableOpacity>
        <Text style={styles.color_textPrivate}> and </Text>
        <TouchableOpacity onPress={() => alert('Privacy Policy')}>
          <Text style={[styles.color_textPrivate, {color: '#e88832'}]}>
            Privacy Policy
          </Text>
        </TouchableOpacity>
      </View>
      <SocialButton
        buttonTitle="Sign up with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => alert('Facebook')}
      />
      <SocialButton
        buttonTitle="Sign up with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => alert('Google')}
      />
      <TouchableOpacity
        style={styles.navButton}
        onPress={() => navigation.navigate('Login')}>
        <Text style={styles.navButtonText}>
          Have an account? Sign In
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default SignupScreen;
