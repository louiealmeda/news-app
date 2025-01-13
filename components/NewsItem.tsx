import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useTheme } from "react-native-paper";

interface NewsItemProps {
  title: string;
  description: string;
  imageUrl: string;
  url: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  imageUrl,
  url,
}) => {
  const { colors } = useTheme();

  return (
    <Link href={{ pathname: "/read-news", params: { url: url } }}>
      <Card style={[styles.card, { backgroundColor: colors.background }]}>
        <Card.Cover
          source={{ uri: imageUrl }}
          resizeMode="cover"
          style={{ width: "100%" }}
        />
        <Card.Content>
          <Title>{title}</Title>
          <Paragraph>{description}</Paragraph>
        </Card.Content>
      </Card>
    </Link>
  );
};

const styles = StyleSheet.create({
  card: {
    marginVertical: 10,
    marginHorizontal: 20,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 7,
    elevation: 2,
  },
});

export default NewsItem;
