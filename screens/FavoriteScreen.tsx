import * as React from "react";
import { View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import { Text } from "react-native-paper";
import { useSelector } from "react-redux";
import UserItem from "../components/screens/Favorite/components/UserItem";
import { selectUser } from "../redux/user/userReducer";
import { IUser } from "../types/user";

function FavoriteScreen() {
  const { value: users } = useSelector(selectUser);
  const favoriteUsers: IUser[] = users.filter((user) => user.isFavorite);

  function renderUserItem({ item }: { item: IUser }) {
    return <UserItem user={item} />;
  }

  return (
    <SafeAreaView>
      <View>
        <FlatList
          data={favoriteUsers}
          renderItem={renderUserItem}
          keyExtractor={(user) => user?.login?.uuid}
          ListEmptyComponent={
            <View style={styles.container}>
              <Text>No Data</Text>
            </View>
          }
        />
      </View>
    </SafeAreaView>
  );
}

export default FavoriteScreen;

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: "center",
    justifyContent: "center",
  },
});
