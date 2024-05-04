import React from 'react';
import {ReactNode} from 'react';
import {View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';

interface IContainerProps {
  children: ReactNode | undefined;
}

export const Container = ({children}: IContainerProps) => {
  const {top} = useSafeAreaInsets();
  return (
    <View
      style={{
        marginTop: top,
      }}>
      {children}
    </View>
  );
};
