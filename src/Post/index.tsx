import React, {FC} from 'react';
import {Text, View} from 'react-native';
import styles from './styles';

type Props = {
  title: string;
  body: string;
};

const Post: FC<Props> = ({title, body}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>

      <Text>{body}</Text>
    </View>
  );
};

export default Post;
