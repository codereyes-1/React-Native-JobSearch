import { useState, useEffect } from 'react'

import axios from 'axios'

// import { RAPID_API_KEY } from '@env'

// const rapidApiKey = RAPID_API_KEY
// this is prep to later populate these pieces of data
const useFetch = (endpoint, query) => {
    // state is empty data
    const [data, setData] = useState([])
    // state is false
    const [isLoading, setIsLoading] = useState(false)
    // state is null
    const [error, setError] = useState(null)

    // rapidAPI integration. reuse useFetch hook first for search, later on for job details 
    const options = {
        method: 'GET',
        url: `https://jsearch.p.rapidapi.com/${endpoint}`,
        headers: {
            'X-RapidAPI-Key': 'fa1e2ab96dmsh96bd5cc1ef556a1p119727jsnafad7ef49560',
            'X-RapidAPI-Host': 'jsearch.p.rapidapi.com'
        },
        // pass dynamic query to API, spread query that was passed to this hook
        params: { ...query }
    };

    const fetchData = async () => {
        setIsLoading(true)

        try {
            const response = await axios.request(options)
            setData(response.data.data)
            setIsLoading(false)
        } catch (error) {
            setError(error)
        } finally {
            alert('There is an error')
            setIsLoading(false)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

    const refetch = () => {
        setIsLoading(true)
        fetchData()
    }

    return { data, isLoading, error, refetch }
}


export default useFetch