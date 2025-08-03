import React from 'react';
import { View, Text, FlatList } from 'react-native';
import { mockAudiobooks } from '../../data/audiobooks';
import { Audiobook } from '../../types/Audiobook';

const AudiobookList: React.FC = () => {
  const renderItem = ({ item }: { item: Audiobook }) => (
    <View className="p-4 border-b border-gray-200">
      <Text className="text-lg font-bold">{item.title}</Text>
    </View>
  );

  return (
    <View className="flex-1 bg-white dark:bg-gray-800">
      <FlatList
        data={mockAudiobooks}
        renderItem={renderItem}
        keyExtractor={(item) => item.id}
      />
    </View>
  );
};

export default AudiobookList;
