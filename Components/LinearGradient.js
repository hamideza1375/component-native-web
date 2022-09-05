import React from 'react';
import { View } from 'react-native-web';

export default function LinearGradient({children,colors=[],start={}}) {
  return (
    <View style={{ backgroundImage: `linear-gradient( ${start.x}deg, ${colors} ) ` }}>
      {children}
    </View>
  );
}
