import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import { Avatar } from "react-native-paper";

import { MAIN_COLOR } from "../../../../../constants/colors";
import { IUser } from "../../../../../types/user";
import { getFullName } from "../../../../../utils";

interface IUserItemProps {
  user: IUser;
}

function UserItem({ user }: IUserItemProps) {
  const { name, picture } = user;
  const fullName: string = getFullName(name?.first, name?.last);

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Avatar.Image
          size={50}
          source={{
            uri: picture?.thumbnail,
          }}
        />
        <Text style={styles.fullName}>{fullName}</Text>
      </View>
      <TouchableOpacity>
        <Ionicons name="star-outline" size={20} color={MAIN_COLOR} />
      </TouchableOpacity>
    </View>
  );
}

export default UserItem;

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 20,
    paddingVertical: 14,
    backgroundColor: "white",
    borderBottomColor: "#edeef2",
    borderBottomWidth: 1,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 16,
    marginLeft: 10,
  },
});
