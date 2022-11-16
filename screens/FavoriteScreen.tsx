import * as React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import UserItem from "../components/screens/Favorite/components/UserItem";
import { IUser } from "../types/user";

const { results: userData } = require("../mockData.json");

function FavoriteScreen() {
  const renderUserItem = ({ item }: { item: IUser }) => {
    return <UserItem user={item} />;
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={userData}
          renderItem={renderUserItem}
          keyExtractor={(user) => user?.login?.uuid}
        />
      </View>
    </SafeAreaView>
  );
}

export default FavoriteScreen;
