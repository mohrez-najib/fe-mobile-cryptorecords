import { View, Text, KeyboardAvoidingView, TouchableOpacity } from 'react-native'
import React, { FC } from 'react'
import { StyledTextInput } from '../../components/StyledTextInput'
import { RootTabScreenProps } from '../../types'
import { StyledButton } from '../../components/StyledButton'
import { useForm, Controller } from "react-hook-form";
import { loginRules } from '../../validations/rules/login'
import type { LoginValues } from './@types'
import { useLogin } from './hooks/useLogin'
import AuthenticatedScreen from '../../hoc/AuthenticatedScreen'


const defaultValues: LoginValues = {
    email: 'test1@test.com',
    password: '12345678'
}
function LoginScreen({ navigation }: RootTabScreenProps<'Login'>) {
    const { control, handleSubmit, formState: { errors } } = useForm<LoginValues>({
        defaultValues,
        mode: 'all',
    });
    const { onLogin, isLoading } = useLogin()
    const onSubmit = (values: LoginValues) => onLogin(values);
    return (
        <View className='flex-1 justify-center items-center bg-white'>
            <KeyboardAvoidingView behavior='height'>
                <View className='w-72 space-y-2'>
                    <View className='w-full'>
                        <Text className='font-bold text-black text-lg'>
                            Login
                        </Text>
                        <Text className='font-light text-black text-md'>
                            Sign in to your account
                        </Text>
                    </View>
                    <View>
                        <Controller
                            control={control}
                            name="email"
                            rules={loginRules.email}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledTextInput
                                    textContentType='emailAddress' label='Email' placeholder='Email'
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
                            rules={loginRules.password}
                            render={({ field: { onChange, onBlur, value } }) => (
                                <StyledTextInput
                                    secureTextEntry
                                    textContentType='password' label='Password' placeholder='Password'
                                    onBlur={onBlur}
                                    onChangeText={onChange}
                                    value={value}
                                    error={errors.password?.message}
                                />
                            )}
                        />
                    </View>
                    <View className='space-y-1 items-center mb-1'>
                        <View className='border-b-2 border-black w-24' />
                        <View className='h-1 w-16 border-b-2 border-black' />
                    </View>
                    <StyledButton disabled={isLoading} onPress={handleSubmit(onSubmit)} >
                        SIGNIN
                    </StyledButton>
                    <View className='items-center justify-between mb-2'>
                        <View>
                            <Text onPress={() => navigation.replace('Register')} className='text-black'>
                                Create a new account
                            </Text>
                        </View>

                    </View>
                </View>
            </KeyboardAvoidingView >
        </View >
    )
}
export default AuthenticatedScreen(LoginScreen)
