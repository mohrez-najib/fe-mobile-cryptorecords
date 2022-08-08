import { View, Text, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import { StyledTextInput } from '../../components/StyledTextInput'
import { RootTabScreenProps } from '../../types'
import { StyledButton } from '../../components/StyledButton'
import type { RegisterValues } from './@types'
import { Controller, useForm } from 'react-hook-form'
import { registerRules } from '../../validations/rules/register'
import { useRegister } from './hooks/useRegister'


const defaultValues: RegisterValues = {
    firstName: 'Moahammad reza',
    lastName: 'Najib',
    email: 'reza.najibf@gmail.com',
    password: '12345678',
    confirmPassword: '12345678'
}
export default function RegisterScreen({ navigation }: RootTabScreenProps<'Register'>) {
    const { control, handleSubmit, formState: { errors } } = useForm<RegisterValues>({
        defaultValues,
        mode: 'all',
    });
    const { onRegister, isLoading } = useRegister()
    const onSubmit = (values: RegisterValues) => onRegister(values);

    return (
        <View className='flex-1 justify-center items-center bg-white'>
            <KeyboardAvoidingView behavior='height'>

                <View className='w-72 space-y-2'>
                    <View className='w-full'>
                        <Text className='font-bold text-black text-lg'>
                            Registration
                        </Text>
                        <Text className='font-light text-black text-md'>
                            Create a new account
                        </Text>
                    </View>
                    <View className='bg-transparent'>
                        <Controller
                            control={control}
                            name="firstName"
                            rules={registerRules.firstName}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledTextInput
                                    label='Fistname' placeholder='Fistname'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.firstName?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="lastName"
                            rules={registerRules.lastName}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledTextInput
                                    label='Lastname' placeholder='Lastname'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.lastName?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="email"
                            rules={registerRules.email}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledTextInput
                                    textContentType='emailAddress'
                                    label='Email' placeholder='Email'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.email?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="password"
                            rules={registerRules.password}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledTextInput
                                    textContentType='password'
                                    secureTextEntry
                                    label='Password' placeholder='Password'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.password?.message}
                                />
                            )}
                        />
                        <Controller
                            control={control}
                            name="confirmPassword"
                            rules={registerRules.confirmPassword}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledTextInput
                                    textContentType='password'
                                    secureTextEntry
                                    label='Confirm password' placeholder='Confirm password'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.confirmPassword?.message}
                                />
                            )}
                        />
                    </View>
                    <View className='space-y-1 items-center mb-1'>
                        <View className='border-b-2 border-black w-24' />
                        <View className='h-1 w-16 border-b-2 border-black' />
                    </View>
                    <StyledButton disabled={isLoading} onPress={handleSubmit(onSubmit)} >
                        SIGNUP
                    </StyledButton>
                    <View className='items-center justify-between  mb-2'>
                        <View>
                            <Text onPress={() => navigation.replace('Login')} className='text-black'>
                                Already have an account?
                            </Text>
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView >
        </View >
    )
}

