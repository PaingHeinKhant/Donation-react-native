import { View, Text, TextInput } from "react-native";
import { React, useRef, useState } from "react";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import style from "./style";
import { scaleFontSize } from "../../assets/styles/scaling";
import propTypes from "prop-types";

const Search = ({ onSearch = () => {} }) => {
  const [search, setSearch] = useState("");
  const textInputRef = useRef(null);
  const handleFocus = () => {
    textInputRef.current.focus();
  };
  const handleSearch = (searchValue) => {
    setSearch(searchValue);
    onSearch(searchValue);
  };

  return (
    <View style={style.searchInputContainer} onPress={handleFocus}>
      <FontAwesomeIcon
        icon={faSearch}
        color="#25C0FF"
        size={scaleFontSize(22)}
      />
      <TextInput
        placeholder="Search"
        ref={textInputRef}
        style={style.searchInput}
        value={search}
        onChangeText={(value) => {
          handleSearch(value);
        }}
      />
    </View>
  );
};

Search.propTypes = {
  onSearch: propTypes.func,
  placeholder: propTypes.string,
};

export default Search;
