import React, {FC, useState} from 'react';
import {TextInput, View, FlatList} from 'react-native';
import Post from '../Post';
import {PostType} from '../types';
import styles from './styles';

type Props = {
  posts: PostType[];
};

const List: FC<Props> = ({posts}) => {
  const [filterText, setFilterText] = useState('');

  return (
    <View style={styles.container}>
      <TextInput
        value={filterText}
        onChangeText={setFilterText}
        style={styles.input}
      />

      <FlatList
        data={posts.filter(
          post =>
            post.title.includes(filterText) || post.body.includes(filterText),
        )}
        renderItem={({item}) => <Post title={item.title} body={item.body} />}
        keyExtractor={item => `${item.id}`}
        style={styles.list}
      />
    </View>
  );
};

export default List;
