import { View, Text, TouchableOpacity, ActivityIndicator } from 'react-native'

import { useRouter } from 'expo-router'

import styles from './nearbyjobs.style'
import { COLORS } from '../../../constants'
import NearbyJobCard from '../../common/cards/nearby/NearbyJobCard'
import useFetch from '../../../hook/useFetch'


const Nearbyjobs = () => {
  //here just need router and call to useFetch function
  const router = useRouter()
  // useFetch takes endpoing and query
  const { data, isLoading, error } = useFetch('search', {
    query: 'React Developer',
    num_pages: 1 
  })

  console.log(data)

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Nearby Jobs</Text>
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
              data?.map((job) => (
                <NearbyJobCard
                  job={job}
                  key={`neaby-job-${job?.job_id}}`}
                  handleNavigate={() => router.push(`/job-details/${job.job_id}`)}
                />
              ))
        ) }
      </View>
    </View>
  )
}

export default Nearbyjobs
