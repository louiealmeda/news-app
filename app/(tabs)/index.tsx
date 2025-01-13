import { Image, StyleSheet, Platform, View } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import NewsItem from "@/components/NewsItem";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, Text } from "react-native-paper";
import useNews from "@/hooks/useNews";

export default function HomeScreen() {
  const { data, isLoading, error } = useNews();

  if (isLoading) {
    return <ActivityIndicator size="large" color="#0000ff" />;
  }

  if (error) {
    return (
      <View>
        <Text>Error fetching news: {error.message}</Text>
      </View>
    );
  }

  return (
    <FlatList
      data={data}
      renderItem={({ item }) => (
        <NewsItem
          title={item.title}
          description={item.description}
          imageUrl={item.urlToImage}
        />
      )}
      ListHeaderComponent={
        <ThemedText type="title">Read the latest news</ThemedText>
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: 0,
  },
  stepContainer: {
    gap: 2,
    marginBottom: 8,
  },
  reactLogo: {
    height: 178,
    width: 290,
    bottom: 0,
    left: 0,
    position: "absolute",
  },
});
