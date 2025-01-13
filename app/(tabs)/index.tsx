import { Image, StyleSheet, Platform, View, TextInput } from "react-native";

import { ThemedText } from "@/components/ThemedText";
import { ThemedView } from "@/components/ThemedView";
import NewsItem from "@/components/NewsItem";
import { FlatList, ScrollView } from "react-native-gesture-handler";
import { ActivityIndicator, Text } from "react-native-paper";
import useNews from "@/hooks/useNews";
import { useCallback, useEffect, useState } from "react";
import debounce from "lodash/debounce";

export default function HomeScreen() {
  const [query, setQuery] = useState("");
  const [debouncedQuery, setDebouncedQuery] = useState(query);
  const { data, isLoading, error } = useNews(debouncedQuery);

  const debouncedSetQuery = useCallback(
    debounce((q) => setDebouncedQuery(q), 500),
    []
  );

  useEffect(() => {
    debouncedSetQuery(query);
  }, [query, debouncedSetQuery]);

  if (isLoading) {
    // return <ActivityIndicator size="large" color="#0000ff" />;
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
          url={item.url}
        />
      )}
      ListHeaderComponent={
        <View style={styles.header}>
          <ThemedText type="title" style={styles.headerTitle}>
            Read the latest news
          </ThemedText>
          <TextInput
            style={styles.searchBar}
            placeholder="Search news..."
            value={query}
            onChangeText={setQuery}
          />
          {isLoading && <ActivityIndicator size="large" color="#0000ff" />}
        </View>
      }
      keyExtractor={(item, index) => index.toString()}
    />
  );
}

const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
  },
  headerTitle: {
    fontSize: 64,
    lineHeight: 64,
    paddingTop: 120,
  },
  titleContainer: {
    flexDirection: "column",
    alignItems: "center",
    gap: 2,
    padding: 0,
    fontSize: 36,
  },
  stepContainer: {
    gap: 2,
    marginBottom: 8,
  },
  searchBar: {
    height: 40,
    fontSize: 20,
    fontWeight: "500",
    borderRadius: 12,
    borderColor: "gray",
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
});
