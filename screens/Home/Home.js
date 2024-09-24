import React, { useEffect, useState } from "react";
import {
  View,
  Text,
  SafeAreaView,
  ScrollView,
  Image,
  Pressable,
  FlatList,
} from "react-native";
import globalStyle from "../../assets/styles/globalStyle";
import style from "./style";
import Header from "../../components/Header/Header";
import SingleDonationItems from "../../components/SingleDonationItem/SingleDonationItem";
import Search from "../../components/Search/Search";
import { useDispatch, useSelector } from "react-redux";
import Tab from "../../components/Tab/Tab";
import { updateSelectedCategoryId } from "../../redux/reducers/Categories";

const Home = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user);
  const categories = useSelector((state) => state.categories);
  const donations = useSelector((state) => state.donations);

  console.log("donations", donations);

  const [categoryPage, setCategoryPage] = useState(1);
  const [categoryList, setCategoryList] = useState([]);
  const [isLoadingCategories, setIsLoadingCategories] = useState(false);
  const [donationItems, setDonationItems] = useState([]);

  const categoryPageSize = 4;

  console.log("donationItems", donationItems);

  useEffect(() => {
    setIsLoadingCategories(true);
    setCategoryList(
      pagination(categories.categories, categoryPage, categoryPageSize)
    );
    setCategoryPage((prev) => prev + 1);
    setIsLoadingCategories(false);
  }, []);

  useEffect(() => {
    const items = donations.items.filter((value) =>
      value.categoryIds.includes(categories.selectedCategoryId)
    );
    setDonationItems(items);
  }, [categories.selectedCategoryId]);

  const pagination = (items, pageNumber, pageSize) => {
    const startIndex = (pageNumber - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    if (startIndex >= items.length) {
      return [];
    }
    return items.slice(startIndex, endIndex);
  };
  return (
    <SafeAreaView style={[globalStyle.backgroundWhite, globalStyle.flex]}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={style.header}>
          <View>
            <Text style={style.headerIntroText}>Hello ,</Text>
            <View style={style.userName}>
              <Header title={user.firstName + " " + user.lastName[0] + ".👋"} />
            </View>
          </View>
          <Image
            source={{ uri: user.profileImage }}
            style={style.profileImage}
            resizeMode="contain"
          />
        </View>
        <View style={style.searchContainer}>
          <Search />
        </View>
        <Pressable style={style.hightLightContainer}>
          <Image
            source={require("../../assets/images/highlighted_image.png")}
            style={style.hightLightImage}
            resizeMode="contain"
          />
        </Pressable>
        <View style={style.categoriesContainer}>
          <Header title={"Select Categories"} type={2} />
        </View>
        <View style={style.categories}>
          <FlatList
            onEndReachedThreshold={0.5}
            onEndReached={() => {
              if (isLoadingCategories) {
                return;
              }
              setIsLoadingCategories(true);
              let newData = pagination(
                categories.categories,
                categoryPage,
                categoryPageSize
              );
              if (newData.length > 0) {
                setCategoryList((prevState) => [...prevState, ...newData]);
                setCategoryPage((prevState) => prevState + 1);
              }
              setIsLoadingCategories(false);
            }}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
            data={categoryList}
            renderItem={({ item }) => (
              <View style={style.categoryItems} key={item.categoryId}>
                <Tab
                  tabId={item.categoryId}
                  onPress={(value) => dispatch(updateSelectedCategoryId(value))}
                  title={item.name}
                  isInactive={item.categoryId !== categories.selectedCategoryId}
                />
              </View>
            )}
          />
        </View>
        {donationItems.length > 0 && (
          <View style={style.donationsItemsContainer}>
            {donationItems.map((item) => (
              <View key={item.donationItemsId} style={style.donationsItems}>
                <SingleDonationItems
                  donationItemId={item.donationItemId}
                  price={parseFloat(item.price)}
                  uri={item.image}
                  badgeTitle={
                    categories.categories.filter(
                      (value) =>
                        value.categoryId === categories.selectedCategoryId
                    )[0].name
                  }
                  onPress={(value) => console.log(value)}
                  donationTitle={item.name}
                />
              </View>
            ))}
          </View>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;
