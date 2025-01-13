import { StyleSheet, Image, Platform, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import { IconSymbol } from "@/components/ui/IconSymbol";

export default function TabTwoScreen() {
  return (
    <View>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">My saved news</ThemedText>
      </ThemedView>
      <ThemedText>Read the latest news that you saved for later.</ThemedText>
    </View>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: "#808080",
    bottom: -90,
    left: -35,
    position: "absolute",
  },
  titleContainer: {
    flexDirection: "row",
    gap: 8,
  },
});
