import { TouchableOpacity, Button, ButtonProps, TouchableOpacityProps, Text } from 'react-native'
import React, { FC, ReactNode } from 'react'

interface StyledButtonProps {
    children: ReactNode
}
export const StyledButton: FC<StyledButtonProps & TouchableOpacityProps> = ({ children, ...rest }) => {
    return (
        <TouchableOpacity className='flex justify-center items-center w-full h-14 bg-black'  {...rest} >
            <Text className='text-white font-bold'>
                {children}
            </Text>
        </TouchableOpacity>
    )
}