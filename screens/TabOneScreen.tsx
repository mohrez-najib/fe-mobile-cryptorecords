import { Text, View } from 'react-native';
import { RootTabScreenProps } from '../types';


export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {
  return (
    <View className='flex-1 h-full items-center justify-center'>
      <Text className='text-xl font-bold'>Tab 1</Text>
    </View>
  );
}
