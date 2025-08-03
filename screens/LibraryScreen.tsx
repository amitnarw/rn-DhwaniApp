import React from 'react';
import { View, Text, SafeAreaView } from 'react-native';
import AudiobookList from '../components/library/AudiobookList';

const LibraryScreen: React.FC = () => {
  return (
    <SafeAreaView className="flex-1 bg-gray-100">
      <Text className="text-2xl font-bold text-center mt-4 mb-4">Audiobook Library</Text>
      <AudiobookList />
    </SafeAreaView>
  );
};

export default LibraryScreen;