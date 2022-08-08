import { useNavigation, useRoute } from '@react-navigation/native'
import React, { ReactNode, useLayoutEffect, useState } from 'react'
import { storage } from '../utils/storage'


const AuthenticatedScreen = (Screen: any) => {

  return (props: any) => {
    const { name } = useRoute()
    const { navigate } = useNavigation();
    console.log('name', name);

    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false)

    useLayoutEffect(() => {
      const checkAuthentication = async () => {
        const hasToken = await storage.get('@access_token')
        // setIsAuthenticated(Boolean(hasToken))
        if (hasToken && (name === 'Login' || name === 'Register')) {
          navigate('Contracts')
        }
      }
      checkAuthentication()
    }, [])
    return (
      <Screen {...props} />
    )
  }
}

export default AuthenticatedScreen