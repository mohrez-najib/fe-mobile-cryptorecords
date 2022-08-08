import { Text, TextInput, TextInputProps, TextInputState, View } from 'react-native'
import React, { FC } from 'react'

interface StyledTextInputProps {
    error?: string,
    label: string,
}

export const StyledTextInput: FC<StyledTextInputProps & TextInputProps> = ({ error, label, ...rest }) => {
    return (
        <View className='w-full max-w-[320px] border-2 border-black mb-3 text-white'>
            {
                error ?
                    <Text className='bg-red-500 p-1 text-red-100 text-xs font-medium'>{error}</Text>
                    :
                    <Text className='w-full  bg-black text-xs text-white p-1'>{label}</Text>

            }
            <TextInput placeholderTextColor='#979797' className='px-2 py-1 text-black' {...rest} />

        </View>
    )
}
