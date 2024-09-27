import { View, Text, SafeAreaView, ScrollView, Image } from "react-native";
import React from "react";
import { useSelector } from "react-redux";
import BackButton from "../../components/BackButton/BackButton";
import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import Badge from "../../components/Badge/Badge";
import Header from "../../components/Header/Header";
import Button from "../../components/Button/Button";
const SingleDonationItem = ({ navigation, route }) => {
  const donationItemInformation = useSelector(
    (state) => state.donations.selectDonationInformation
  );

  const categoryInfo = route.params.categoryInformation;
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false} style={style.container}>
        <BackButton onPress={() => navigation.goBack()} />
        <Image
          source={{ uri: donationItemInformation.image }}
          style={style.image}
        />
        <View style={style.badgeContainer}>
          <Badge title={categoryInfo.name} />
        </View>
        <Header title={donationItemInformation.name} type={1} />
        <Text style={style.description}>
          {donationItemInformation.description}{" "}
          {donationItemInformation.description}
          {donationItemInformation.description}{" "}
          {donationItemInformation.description}{" "}
          {donationItemInformation.description}
        </Text>
      </ScrollView>
      <View style={style.button}>
        <Button title="Donate" />
      </View>
    </SafeAreaView>
  );
};

export default SingleDonationItem;
