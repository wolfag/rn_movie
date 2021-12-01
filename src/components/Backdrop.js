import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Animated, Dimensions, FlatList, Image, View } from 'react-native';

const { width, height } = Dimensions.get('window');
const BACKDROP_HEIGHT = height * 0.65;

export default function Backdrop({ movieList, scrollX, itemSize }) {
  return (
    <View style={{ height: BACKDROP_HEIGHT, width, position: 'absolute' }}>
      <FlatList
        data={movieList.reverse()}
        keyExtractor={(item) => item.key}
        removeClippedSubviews={false}
        contentContainerStyle={{ width, height: BACKDROP_HEIGHT }}
        renderItem={({ item, index }) => {
          if (!item.backdrop) {
            return null;
          }
          const translateX = scrollX.interpolate({
            inputRange: [(index - 2) * itemSize, (index - 1) * itemSize],
            outputRange: [0, width],
          });

          return (
            <Animated.View
              removeClippedSubviews={false}
              style={{
                position: 'absolute',
                width: translateX,
                height,
                overflow: 'hidden',
              }}
            >
              <Image
                source={{ uri: item.backdrop }}
                style={{ width, height: BACKDROP_HEIGHT, position: 'absolute' }}
              />
            </Animated.View>
          );
        }}
      />
      <LinearGradient
        colors={['rgba(0, 0, 0, 0)', 'white']}
        style={{
          height: BACKDROP_HEIGHT,
          width,
          position: 'absolute',
          bottom: 0,
        }}
      />
    </View>
  );
}
