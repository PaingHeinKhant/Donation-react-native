import { View, Text, SafeAreaView, ScrollView, Pressable } from "react-native";
import React, { useState } from "react";
import globalStyle from "../../assets/styles/globalStyle";
import Input from "../../components/Input/Input";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
import BackButton from "../../components/BackButton/BackButton";
import style from "./style";

const Registration = ({navigation}) => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  console.log("email", email);

  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <View style={style.backButton}>
        <BackButton onPress={() => navigation.goBack()} />
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={style.container}
      >
        <View style={globalStyle.marginBottom24}>
          <Header title={"Hello And Welcome"} />
        </View>
        <View style={globalStyle.marginBottom24}>
          <Input
            label="First and Last Name"
            placeholder={"Enter your Full Name"}
            onChangeText={setFullName}
          />
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
          <Button title="Register" />
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Registration;
