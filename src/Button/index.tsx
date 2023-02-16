import React, {FC} from 'react';
import {Pressable, Text} from 'react-native';
import styles from './styles';

type Props = {onPress: () => void};

const Button: FC<Props> = ({onPress}) => {
  return (
    <Pressable onPress={onPress} style={styles.container}>
      <Text style={styles.text}>Fetch Posts</Text>
    </Pressable>
  );
};

export default Button;
