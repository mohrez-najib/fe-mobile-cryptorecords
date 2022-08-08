import React from 'react'
import { Text, View } from 'react-native'
import { useCreatedContracts } from '../hooks/useCreatedContracts'

const CreadtedContracts = () => {
    const { data } = useCreatedContracts()
    console.log('data' , data);
    
    return (
        <View>
            {
                data?.map((contract : any) => <Text key={contract.id}>{contract.createdAt}</Text>)
            }
        </View>
    )
}

export default CreadtedContracts