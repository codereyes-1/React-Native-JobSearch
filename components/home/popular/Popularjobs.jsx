import { useState } from 'react'
import { View, Text, TouchableOpacity, FlatList, ActivityIndicator } from 'react-native'

import { useRouter } from 'expo-router'

import styles from './popularjobs.style'

import { COLORS, SIZES } from '../../../constants'
import PopularJobCard from '../../common/cards/popular/PopularJobCard'
import useFetch from '../../../hook/useFetch'


const Popularjobs = () => {
  const router = useRouter()
  // useFetch takes endpoing and query
  const [selectedJob, setSelectedJob] = useState()
    const handleCardPress = (item) => {
    router.push(`/job-details/${item.job_id}`);
    setSelectedJob(item.job_id);
    };
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1 
  })

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Popular Jobs</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Text>Show All</Text>
        </TouchableOpacity>
      </View>

      <View style={styles.cardsContainer}>
        {isLoading ? (
          <ActivityIndicator size="large" colors={COLORS.primary} />
        ) : error ? (
          <Text>Something went wrong</Text>
          ) : (
              <FlatList
                // 2 get data for pop jobs 1-4 destructure within callback function in renderItem
                data={data}
                renderItem={({ item }) => (
                  <PopularJobCard
                    item={item}
                    selectedJob={selectedJob}
                    handleCardPress={handleCardPress}
                  />
                )}
                keyExtractor={item => item?.job_id}
                contentContainerStyle={{ columnGap: SIZES.medium }}
                horizontal
              />
        ) }
      </View>
    </View>
  )
}

export default Popularjobs
