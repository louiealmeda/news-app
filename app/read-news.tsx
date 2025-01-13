import React, { useEffect } from "react";
import {
  View,
  Text,
  Image,
  StyleSheet,
  Dimensions,
  Platform,
} from "react-native";

import { LinearGradient } from "expo-linear-gradient";

import { RouteProp, useRoute } from "@react-navigation/native";

import { useNavigation } from "expo-router";
import { ThemedText } from "@/components/ThemedText";

const screenHeight = Dimensions.get("window").width;
const screenWidth = Dimensions.get("window").width;

const ReadNews = () => {
  const navigation = useNavigation();
  const route =
    useRoute<RouteProp<{ params: { url: string; title: string } }, "params">>();
  const { url, title } = route.params;
  // const { data, isLoading, isError } = useNewsArticle(url);

  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <div style={{ width: "100%", height: "100%" }}>
        <iframe
          src={url}
          title={title}
          style={{ width: "100%", height: "100%", border: "none" }}
        />
      </div>
    </div>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 16,
    minHeight: screenHeight,
    paddingBottom: screenHeight,
  },
  header: {
    alignItems: "center",
    marginBottom: 0,
    height: 250,
    width: screenWidth,
    display: "flex",
    justifyContent: "flex-end",
  },
  gradient: {
    position: "absolute",
    zIndex: 1,
    width: "100%",
    height: "100%",
    backgroundImage:
      "linear-gradient(0deg, rgba(0,0,0,0.5) 0%, rgba(0,0,0,0) 100%)",
  },
  image: {
    position: "absolute",
    width: screenWidth,
    height: "100%",
    // gradient from transparent to black top to bottom
  },
});

export default ReadNews;
