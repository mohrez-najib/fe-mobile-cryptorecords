import React from 'react'
import { SafeAreaView, Text, View } from 'react-native'
import CreadtedContracts from './components/CreadtedContracts'
import ContractTabs from './components/Tab'

const ContractsList = () => {
    return (
        <View className='w-full flex-1 items-center'>
            <SafeAreaView />
            <View className='w-72'>
                <ContractTabs active={0} />
                <CreadtedContracts />
            </View>
        </View>

    )
}

export default ContractsList