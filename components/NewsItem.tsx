import React from "react";
import { StyleSheet } from "react-native";
import { Card, Title, Paragraph } from "react-native-paper";
import { useTheme } from "react-native-paper";

interface NewsItemProps {
  title: string;
  description: string;
  imageUrl: string;
}

const NewsItem: React.FC<NewsItemProps> = ({
  title,
  description,
  imageUrl,
}) => {
  const { colors } = useTheme();

  return (
    <Card style={[styles.card, { backgroundColor: colors.background }]}>
      <Card.Cover source={{ uri: imageUrl }} />
      <Card.Content>
        <Title>{title}</Title>
        <Paragraph>{description}</Paragraph>
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
