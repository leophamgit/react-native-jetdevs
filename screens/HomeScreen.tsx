import * as React from "react";
import { View, SafeAreaView, FlatList, StyleSheet } from "react-native";
import UserItem from "../components/screens/Home/components/UserItem";
import { IUser } from "../types/user";

const { results: userData } = require("../mockData.json");

function HomeScreen() {
  const renderUserItem = ({ item }: { item: IUser }) => {
    return <UserItem user={item} />;
  };

  return (
    <SafeAreaView>
      <View style={styles.container}>
        <FlatList
          data={userData}
          renderItem={renderUserItem}
          keyExtractor={(user) => user?.login?.uuid}
        />
      </View>
    </SafeAreaView>
  );
}

export default HomeScreen;

const styles = StyleSheet.create({
  container: { padding: 20 },
});
