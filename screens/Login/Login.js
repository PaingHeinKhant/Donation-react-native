import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import globalStyle from "../../assets/styles/globalStyle";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import style from "./style";
import { Routes } from "../../navigation/Routes";
import { useLoginMutation } from "../../api/userSlice";

const Login = ({ navigation }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [login, { isLoading, isError, error }] = useLoginMutation();

  const handleLogin = async () => {
    try {
      await login({ username: email, password }).unwrap();
      navigation.navigate(Routes.Home);
    } catch (err) {
      console.error("Login failed: ", err);
    }
  };

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      {isLoading ? (
        <Text>Loading</Text>
      ) : (
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={style.container}
        >
          <View style={globalStyle.marginBottom24}>
            <Header title={"Welcome Back"} />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Input
              label="Email"
              placeholder={"Enter your email .."}
              onChangeText={setEmail}
              keyboardType={"email-address"}
            />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Input
              secureTextEntry={true}
              label="Password"
              placeholder={"******"}
              onChangeText={setPassword}
            />
          </View>
          <View style={globalStyle.marginBottom24}>
            <Button title="Login" onPress={handleLogin} disabled={isLoading} />
          </View>
          {isError && <Text color={"#156CF7"}>{error.data}</Text>}
          <Pressable
            style={style.registerBtn}
            onPress={() => {
              navigation.navigate(Routes.Registration);
            }}
          >
            <Header
              color={"#156CF7"}
              title={"Don't have an account?"}
              type={3}
            />
          </Pressable>
        </ScrollView>
      )}
    </SafeAreaView>
  );
};

export default Login;
