import { Link } from "expo-router";
import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useTheme } from "react-native-paper";
import { Chip } from "react-native-paper";

interface NewsItemProps {
  title: string;
  description: string;
  imageUrl: string;
  source: string;
  publishedAt: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  imageUrl,
  source,
  publishedAt,
}) => {
  const { colors } = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: colors.background }]}>
      <Card.Cover
        source={{ uri: imageUrl }}
        resizeMode="cover"
        style={{ width: "100%" }}
      />
      <Card.Content>
        <Title style={{ fontWeight: "bold" }}>{title}</Title>
        <Paragraph>
          {new Date(publishedAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </Paragraph>
        <Paragraph style={{ marginVertical: 10 }}>{description}</Paragraph>
        <Chip>{source}</Chip>
      </Card.Content>
    </Card>
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
