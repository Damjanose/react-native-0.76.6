import React, { useState } from 'react';
import { SafeAreaView, Text, TouchableOpacity, View } from 'react-native';
import { NavigationProp } from '@react-navigation/native';
import { OtpInput } from 'react-native-otp-entry';
import LinearGradient from 'react-native-linear-gradient';
import { styles } from './OtpScreen.styles.ts';
import useAuth from '../../../providers/hooks/useAuth.ts';
import { HeaderBackButton } from '@react-navigation/elements';

export type NavigationProps = { navigation: NavigationProp<any> };

const OtpScreen: React.FC<NavigationProps> = ({ navigation }) => {
  const [otp, setOtp] = useState<string>('');
  const { setIsSignedIn } = useAuth();

  const handleOtpChange = (value: string) => setOtp(value);

  const handleSubmitOtp = () => {
    console.log('OTP submitted:', otp);
  };

  return (
    <LinearGradient colors={['#000', '#1a1a1a']} style={styles.fullHeight}>
      <SafeAreaView style={styles.fullHeight}>
        <View style={styles.header}>
          <HeaderBackButton onPress={() => navigation.goBack()} tintColor="#fff" displayMode="minimal" />
          <Text style={styles.topTitle}>OTP</Text>
        </View>
        <View style={styles.container}>
          <Text style={styles.title}>Enter OTP</Text>
          <View style={styles.inputContainer}>
            <OtpInput
              numberOfDigits={6}
              focusColor="#3498db"
              autoFocus={false}
              hideStick={true}
              placeholder="******"
              blurOnFilled={true}
              disabled={false}
              type="numeric"
              secureTextEntry={false}
              focusStickBlinkingDuration={500}
              onTextChange={text => handleOtpChange(text)}
              onFilled={() => setIsSignedIn(true)}
              textInputProps={{
                accessibilityLabel: 'One-Time Password',
              }}
              theme={{
                containerStyle: styles.otpContainer,
                inputsContainerStyle: styles.otpInputsContainer,
                pinCodeContainerStyle: styles.otpPinCodeContainer,
                pinCodeTextStyle: styles.otpPinCodeText,
                focusStickStyle: styles.otpFocusStick,
                focusedPinCodeContainerStyle: styles.otpFocusedPinCodeContainer,
              }}
            />
          </View>
          <TouchableOpacity style={styles.button} onPress={handleSubmitOtp}>
            <Text style={styles.buttonText}>Verify OTP</Text>
          </TouchableOpacity>
          <Text style={styles.footerText}>
            Didn’t receive OTP?{' '}
            <Text style={styles.link} onPress={() => {}}>
              Resend OTP
            </Text>
          </Text>
        </View>
      </SafeAreaView>
    </LinearGradient>
  );
};

export default OtpScreen;
