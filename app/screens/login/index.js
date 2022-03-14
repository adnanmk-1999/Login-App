import React, {useState, useContext} from 'react';
import {View, Text, Image, TouchableOpacity} from 'react-native';
import styles from './styles';
import {AuthContext} from '../../authentication/authProvider';

import logo from '../../assets/images/logoFinal.png';

import FormInput from '../../components/formInput';
import FormButton from '../../components/formButton';
import SocialButton from '../../components/socialButton';

function LoginScreen({navigation}) {
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  const {login, googlelogin, fblogin} = useContext(AuthContext);

  return (
    <View style={styles.container}>
      <Image source={logo} style={styles.logo}></Image>
      <Text style={styles.text}>EM-Urgency</Text>
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
      <FormButton
        buttonTitle="Sign In"
        onPress={() => login(email, password)}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => alert('Forgor Password')}>
        <Text style={styles.navButtonText}>Forgot Password?</Text>
      </TouchableOpacity>
      <SocialButton
        buttonTitle="Sign In with Facebook"
        btnType="facebook"
        color="#4867aa"
        backgroundColor="#e6eaf4"
        onPress={() => fblogin()}
      />
      <SocialButton
        buttonTitle="Sign In with Google"
        btnType="google"
        color="#de4d41"
        backgroundColor="#f5e7ea"
        onPress={() => googlelogin()}
      />
      <TouchableOpacity
        style={styles.forgotButton}
        onPress={() => navigation.navigate('Signup')}>
        <Text style={styles.navButtonText}>
          Don't have an account? Create here
        </Text>
      </TouchableOpacity>
    </View>
  );
}
export default LoginScreen;
