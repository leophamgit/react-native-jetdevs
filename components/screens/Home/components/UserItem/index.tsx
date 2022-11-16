import * as React from "react";
import { View, Text, StyleSheet } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";
import Ionicons from "react-native-vector-icons/Ionicons";
import AntDesignIcon from "react-native-vector-icons/AntDesign";
import { Avatar } from "react-native-paper";

import { MAIN_COLOR } from "../../../../../constants/colors";
import { IUser } from "../../../../../types/user";
import { getFullName } from "../../../../../utils";

interface IUserItemProps {
  user: IUser;
}

function UserItem({ user }: IUserItemProps) {
  const { name, location, picture } = user;
  const fullName: string = getFullName(name?.first, name?.last);
  const address: string = `${location?.city ?? ""}, ${location?.state ?? ""}`;

  return (
    <View style={styles.container}>
      <Avatar.Image
        style={styles.avatar}
        size={50}
        source={{
          uri: picture?.thumbnail,
        }}
      />
      <View style={styles.contentContainer}>
        <View>
          <Text style={styles.fullName}>{fullName}</Text>
          <View style={styles.addressInfo}>
            <AntDesignIcon name="enviroment" color={"gray"} size={14} />
            <Text style={styles.address}>{address}</Text>
          </View>
        </View>
        <TouchableOpacity>
          <Ionicons name="star-outline" size={20} color={MAIN_COLOR} />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default UserItem;

const styles = StyleSheet.create({
  container: {
    position: "relative",
    flexDirection: "row",
    alignItems: "center",
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    position: "relative",
    padding: 20,
    paddingLeft: 50,
    marginLeft: 20,
    backgroundColor: "white",
    borderRadius: 10,
    marginVertical: 10,
    flex: 1,
  },
  fullName: {
    fontWeight: "bold",
    fontSize: 16,
  },
  addressInfo: {
    flexDirection: "row",
    alignItems: "center",
  },
  address: {
    color: "gray",
    marginLeft: 4,
  },
  avatar: {
    position: "absolute",
    zIndex: 99,
  },
});
