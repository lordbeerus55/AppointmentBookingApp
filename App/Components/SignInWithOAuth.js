import React from "react";
import * as WebBrowser from "expo-web-browser";
import {StyleSheet, Button, Dimensions, Text, TouchableOpacity } from "react-native";
import { useOAuth } from "@clerk/clerk-expo";
import { useWarmUpBrowser } from "../../hooks/warmUpBrowser";
import Colors from "../../assets/Shared/Colors";



WebBrowser.maybeCompleteAuthSession();
 
const SignInWithOAuth = () => {
  // Warm up the android browser to improve UX
  // https://docs.expo.dev/guides/authentication/#improving-user-experience
  useWarmUpBrowser();
 
  const { startOAuthFlow } = useOAuth({ strategy: "oauth_google" });
 
  const onPress = React.useCallback(async () => {
    try {
      const { createdSessionId, signIn, signUp, setActive } =
        await startOAuthFlow();
 
      if (createdSessionId) {
        setActive({ session: createdSessionId });
      } else {
        // Use signIn or signUp for next steps such as MFA
      }
    } catch (err) {
      console.error("OAuth error", err);
    }
  }, []);
 
  return (
    <TouchableOpacity 
    onPress={onPress}
    style={{
        padding: 16,
        backgroundColor:'#0047AB',
        borderRadius: 90,
        alignItems: 'center',
        marginTop: 20,
        width:Dimensions.get('screen').width*0.8,
    }}>
        <Text style={{fontSize:18,color:Colors.white}}>Login with Google</Text>
    </TouchableOpacity>
  );
}
export default SignInWithOAuth;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  setFontSize: {
    fontSize: 20,
    fontWeight : 'bold' 
  },
  setColorRed : {
    color: '#f44336'
  },
  setColorPink :{
    color: '#e91e63'
  },
  setColorPurple :{
    color: '#9c27b0'
  },
  setColorBlue :{
    color: '#2196f3'
  },
});