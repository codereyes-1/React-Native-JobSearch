import React from 'react'
import { useState } from 'react'

import {
    View,
    Text,
    TextInput,
    TouchableOpacity,
    Image,
    FlatList
} from 'react-native'

import { useRouter } from 'expo-router'

import styles from './welcome.style'
import { icons, SIZES } from '../../../constants'

const jobTypes = ["Full-time", "Part-time", "Contactor"]

const Welcome = ({searchTerm, setSearchTerm, handleClick}) => {
  const router = useRouter()
  const [activeJobType, setActiveJobType] = useState('Full-time')

  return (
    <View>
      <View style={styles.container}>
        <Text style={styles.userName}>Hello Julio</Text>
        <Text style={styles.welcomeMessage}>Find your perfect job</Text>
      </View>
      <View style={styles.searchContainer}>
        <View style={styles.searchWrapper}>
          <TextInput
            style={styles.searchInput}
            value={searchTerm}
            // onChange not exist in react native
            onChangeText={(text) => setSearchTerm(text)}
            placeholder="What are you looking for?"
          />
        </View>

        <TouchableOpacity style={styles.searchBtn} onPress={handleClick}>
          <Image
            source={icons.search}
            resizeMode="contain"
            style={styles.searchBtnImage} />
        </TouchableOpacity>
      </View>
      {/* show jobs here */}
      <View style={styles.tabsContainer}>
        <FlatList
          // pass job types to flatlist as data
          // destrucutre each item
          // each card will be a touchable opacity so we can click it
          data={jobTypes}
          renderItem={({ item }) => (
            // can switch between activeJobType
            <TouchableOpacity
              style={styles.tab(activeJobType, item)}
              onPress={() => {
                setActiveJobType(item)
                router.push(`/search/${item}`)
              }}>
              
              <Text>{item}</Text>
            </TouchableOpacity>
          )}
          keyExtractor={item => item}
          contentContainerStyle={{ columnGap: SIZES.small }}
          horizontal
        />
      </View>
    </View>
  )
}

export default Welcome