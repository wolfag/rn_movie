import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

export default function Genres({ genres }) {
  return (
    <View style={styles.genres}>
      {genres?.map((item) => (
        <View style={styles.genre} key={item}>
          <Text style={styles.genreText}>{item}</Text>
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  genres: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginVertical: 4,
  },
  genre: {
    paddingHorizontal: 6,
    paddingVertical: 2,
    borderWidth: 1,
    borderRadius: 14,
    borderColor: '#ccc',
    marginRight: 4,
    marginBottom: 4,
  },
  genreText: {
    fontSize: 9,
    lineHeight: 9,
    opacity: 0.4,
    textAlign: 'center',
    textAlignVertical: 'center',
  },
});
