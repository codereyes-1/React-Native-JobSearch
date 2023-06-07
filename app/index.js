import { useState } from 'react'
// react-native components 

import { View, ScrollView, SafeAreaView } from 'react-native'
// like react router
import { Stack, useRouter } from 'expo-router'

// import contants to style 
import { COLORS, icons, images, SIZES } from '../constants'

// import components. cmd+click to confirm scope 
import { Nearbyjobs, Popularjobs, ScreenHeaderBtn, Welcome } from '../components'

// const home = functional component where we can return view with text inside
const Home = () => {
    const router = useRouter();
    
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn iconUrl={icons.menu} dimension='60%' />
                    ),
                    headerRight: () => (
                        <ScreenHeaderBtn iconUrl={images.profile} dimension='60%' />
                    ),
                    headerTitle: ""
                }}
            />

            <ScrollView showsVerticalScrollIndicator={false}>
                <View
                    style={{
                        flex: 1,
                        padding: SIZES.medium
                    }}>
                    <Welcome
                    
                    />
                    <Popularjobs />
                    <Nearbyjobs/>

                </View>
            </ScrollView>
        </SafeAreaView>
    )
}



export default Home;