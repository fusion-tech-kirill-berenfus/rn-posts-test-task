import React, {useState} from 'react';
import {SafeAreaView} from 'react-native';
import Button from './Button';
import List from './List';
import {PostType} from './types';

const App = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const hasPosts = !!posts.length;

  const handleButtonPress = async () => {
    const json = await fetch('https://jsonplaceholder.typicode.com/posts');
    const result = (await json.json()) as PostType[];

    setPosts(result);
  };

  return (
    <SafeAreaView>
      {!hasPosts && <Button onPress={handleButtonPress} />}

      {hasPosts && <List posts={posts} />}
    </SafeAreaView>
  );
};

export default App;
