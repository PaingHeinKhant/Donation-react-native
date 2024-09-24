import { View, Text, Image, Pressable } from "react-native";
import React from "react";
import PropTypes from "prop-types";
import Badge from "../Badge/Badge";
import Header from "../Header/Header";
import style from "./style";

const SingleDonationItem = (props) => {
  const handlePress = () => {
    props.onPress(props.donationItemId);
  };

  return (
    <Pressable onPress={handlePress}>
      <View>
        <View style={style.badgeContainer}>
          <Badge title={props.badgeTitle} />
        </View>
        <Image
          resizeMode="cover"
          source={{ uri: props.uri }}
          style={style.image}
        />
      </View>
      <View style={style.donationInfoContainer}>
        <Header
          type={3}
          title={props.donationTitle}
          color={"#0A043C"}
          numberOfLines={1}
        />
        <View style={style.priceContainer}>
          <Header type={3} title={`$${props.price}`} color={"#156CF7"} />
        </View>
      </View>
    </Pressable>
  );
};

SingleDonationItem.defaultProps = {
  onPress: () => {},
};

SingleDonationItem.propTypes = {
  donationItemId: PropTypes.number.isRequired,
  uri: PropTypes.string.isRequired,
  badgeTitle: PropTypes.string.isRequired,
  donationTitle: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  onPress: PropTypes.func,
};

export default SingleDonationItem;
