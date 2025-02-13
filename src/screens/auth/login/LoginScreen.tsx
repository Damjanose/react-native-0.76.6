import React, { useState } from 'react';
import { SafeAreaView, ScrollView, Text, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { styles } from './LoginScreen.styles.ts';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import LinearGradient from 'react-native-linear-gradient';
import { TextInput, TextInputIcon } from '../../../components/TextInput';
import useBlackOrWhite from '../../../hooks/useBlackOrWhite.ts';
import useAuth from '../../../providers/hooks/useAuth.ts';
import { LoginPayload } from '../../../services/auth/types.ts';
import { SubmitButton } from '../../../components/SubmitButton';

type NavigationProps = { navigation: NavigationProp<any> };

const LoginScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const { login, clearFieldError, getError, isLoading } = useAuth();
  const { whiteOrBlack } = useBlackOrWhite();

  const [payload, setPayload] = useState<LoginPayload>({
    username: '',
    password: '',
  });
  const [showPassword, setShowPassword] = useState(false);

  const handleInputChange = (field: keyof LoginPayload) => (value: string) => {
    setPayload(prevState => ({ ...prevState, [field]: value }));
    clearFieldError(field);
  };

  const handleSubmit = async () => await login(payload);

  return (
    <LinearGradient colors={['#000', '#1a1a1a']} style={styles.fullHeight}>
      <SafeAreaView style={styles.fullHeight}>
        <ScrollView contentContainerStyle={styles.scrollContainer}>
          <KeyboardAwareScrollView contentContainerStyle={styles.keyboardScrollContainer}>
            <View style={styles.header}>
              <View style={styles.logoWrapper}>
                <View style={styles.innerLogo}>
                  <View style={styles.darkContainer} />
                </View>
              </View>
            </View>

            <View style={styles.container}>
              <Text style={styles.title}>Login</Text>
              <View style={styles.inputContainer}>
                <TextInput
                  dense
                  style={styles.input}
                  label="Email"
                  keyboardType={'email-address'}
                  autoComplete={'username'}
                  errors={getError('username')}
                  onChangeText={handleInputChange('username')}
                  value={payload.username}
                />
                <TextInput
                  dense
                  style={styles.input}
                  label="Password"
                  secureTextEntry={!showPassword}
                  onChangeText={handleInputChange('password')}
                  value={payload.password}
                  errors={getError('password')}
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
              </View>

              <SubmitButton loading={isLoading} style={styles.button} onPress={handleSubmit} disabled={isLoading}>
                <Text style={styles.buttonText}>Log In</Text>
              </SubmitButton>

              <Text style={styles.footerText}>
                Don’t have an account?{' '}
                <Text style={styles.link} onPress={() => navigation.navigate('RegisterScreen')}>
                  Sign Up
                </Text>
              </Text>
            </View>
          </KeyboardAwareScrollView>
        </ScrollView>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default LoginScreen;
