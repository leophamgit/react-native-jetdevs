import * as React from "react";
import { View, SafeAreaView, FlatList } from "react-native";
import { useSelector } from "react-redux";
import UserItem from "../components/screens/Favorite/components/UserItem";
import { selectUser } from "../redux/user/userReducer";
import { IUser } from "../types/user";

function FavoriteScreen() {
  const { value: users } = useSelector(selectUser);

  const renderUserItem = ({ item }: { item: IUser }) => {
    return <UserItem user={item} />;
  };

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={users}
          renderItem={renderUserItem}
          keyExtractor={(user) => user?.login?.uuid}
        />
      </View>
    </SafeAreaView>
  );
}

export default FavoriteScreen;
