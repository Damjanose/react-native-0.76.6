import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './RegisterScreen.styles.ts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { TextInput, TextInputIcon } from '../../../components/TextInput';
import useBlackOrWhite from '../../../hooks/useBlackOrWhite.ts';
import LinearGradient from 'react-native-linear-gradient';
import GoBackHeader from '../../../components/GoBackHeader.tsx';

type NavigationProps = { navigation: NavigationProp<any> };

type RegisterUserPayload = {
  firstName: string;
  lastName: string;
  email: string;
  password: string;
};

const RegisterScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [payload, setPayload] = useState<RegisterUserPayload>({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const [confirmPassword, setConfirmPassword] = useState('');
  const [passwordError, setPasswordError] = useState<string>('');
  const [showPassword, setShowPassword] = useState(true);
  const [showConfirmPassword, setShowConfirmPassword] = useState(true);
  const { whiteOrBlack } = useBlackOrWhite();

  const handleInputChange = (field: keyof RegisterUserPayload) => (value: string) => {
    setPayload(prevState => ({ ...prevState, [field]: value }));
  };

  const handleSubmit = () => {
    if (payload.password !== confirmPassword) {
      setPasswordError('Passwords do not match');
      return;
    } else {
      navigation.navigate('OtpScreen');
    }
  };

  const handlePasswordChange = (value: string) => {
    setPayload(prevState => ({ ...prevState, password: value }));
    setPasswordError('');
  };

  const handleConfirmPasswordChange = (value: string) => {
    setConfirmPassword(value);
    setPasswordError('');
  };

  return (
    <LinearGradient colors={['#000', '#1a1a1a']} style={styles.fullHeight}>
      <SafeAreaView style={styles.fullHeight}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <KeyboardAwareScrollView contentContainerStyle={styles.keyboardScrollContainer}>
            <View style={styles.header}>
              <GoBackHeader />
              <Text style={styles.signUp}>Sign Up</Text>
            </View>
            <View style={styles.container}>
              <View style={styles.inputContainer}>
                <TextInput
                  dense
                  style={styles.input}
                  label="First Name"
                  onChangeText={handleInputChange('firstName')}
                  value={payload.firstName}
                />
                <TextInput
                  dense
                  style={styles.input}
                  label="Last Name"
                  onChangeText={handleInputChange('lastName')}
                  value={payload.lastName}
                />
                <TextInput
                  dense
                  style={styles.input}
                  label="Email"
                  keyboardType={'email-address'}
                  autoComplete={'email'}
                  onChangeText={handleInputChange('email')}
                  value={payload.email}
                />
                <TextInput
                  dense
                  style={styles.input}
                  label="Password"
                  secureTextEntry={!showPassword}
                  onChangeText={handlePasswordChange}
                  value={payload.password}
                  right={
                    <TextInputIcon
                      color={whiteOrBlack}
                      onPress={() => {
                        setShowPassword(!showPassword);
                      }}
                      icon={showPassword ? 'eye' : 'eye-off'}
                    />
                  }
                />
                <TextInput
                  dense
                  style={styles.input}
                  label="Confirm Password"
                  secureTextEntry={!showConfirmPassword}
                  errors={passwordError}
                  onChangeText={handleConfirmPasswordChange}
                  value={confirmPassword}
                  right={
                    <TextInputIcon
                      color={whiteOrBlack}
                      onPress={() => {
                        setShowConfirmPassword(!showConfirmPassword);
                      }}
                      icon={showConfirmPassword ? 'eye' : 'eye-off'}
                    />
                  }
                />
              </View>
              <TouchableOpacity style={styles.button} onPress={handleSubmit}>
                <Text style={styles.buttonText}>Sign Up</Text>
              </TouchableOpacity>
              <Text style={styles.footerText}>
                Already have an account?{' '}
                <Text style={styles.link} onPress={() => navigation.navigate('LoginScreen')}>
                  Sign In
                </Text>
              </Text>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default RegisterScreen;
