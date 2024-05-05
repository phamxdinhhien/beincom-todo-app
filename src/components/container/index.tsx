import React from 'react';
import {ReactNode} from 'react';
import {Platform, StatusBar, View, ViewStyle} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IContainerProps {
  children: ReactNode | undefined;
  style?: ViewStyle;
}

export const Container = ({children, style}: IContainerProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={[
        style,
        {
          paddingTop: Platform.select({
            ios: top,
            default: 10,
          }),
        },
      ]}>
      <StatusBar backgroundColor="white" barStyle="dark-content" />
      {children}
    </View>
  );
};
