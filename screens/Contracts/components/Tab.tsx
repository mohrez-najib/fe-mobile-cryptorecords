import React from 'react'
import { Text, View } from 'react-native'

interface ContractTabsProps {
    active: number
}
const Tabs = [
    {
        id: 'created',
        title: 'Created',
    },
    {
        id: 'party',
        title: 'Party',
    },
    {
        id: 'witness',
        title: 'Witness',
    },
]
interface ContractTabsProps {
    active: number
}
const ContractTabs = ({ active }: ContractTabsProps) => {

    return (
        <View className='flex w-full flex-row justify-center'>
            {
                Tabs.map(({ title }, index) => {
                    return <View className={`cursor-pointer w-1/3 border-2 p-4 border-black ${index === 0 && 'border-r-0'} ${index === 2 && 'border-l-0'} ${index === active && 'bg-black'} w-ful justify-center items-center`}><Text className={`${index === active && 'text-white'}`}>{title}</Text></View>
                })
            }
        </View>
    )
}

export default ContractTabs