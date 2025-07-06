<<<<<<< HEAD
# React Native JobSearch

**Find your next role—anywhere, anytime.**

**JobSearch** is a cross‑platform mobile application (iOS · Android · Web) built with **React Native + Expo Router** that lets users discover and explore job opportunities via the *JSearch* API (RapidAPI Hub). Clean UI components, smooth navigation, and real‑time data fetching deliver a recruiter‑grade experience on the go.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Usage](#usage)
- [License](#license)

## Features

- **Global job search** – query thousands of listings across roles, locations, and contract types.
- **Detail‑rich job cards** – tap a result to view full description, qualifications, salary range, and an external apply link.
- **Persistent search history** – recently viewed queries cached locally for quick recall (AsyncStorage).
- **Responsive interface** – adaptive layouts for phones, tablets, and the mobile web via React Native Web.
- **Configurable API key** – store your RapidAPI key securely with `react-native-dotenv`.

## Tech Stack

| Layer               | Technologies                                                   |
| ------------------- | -------------------------------------------------------------- |
| **Core**            | React 18 · React Native 0.71 · Expo SDK 48                     |
| **Navigation**      | **Expo Router** (file‑based)                                   |
| **Networking**      | Axios · RapidAPI *JSearch* endpoint                            |
| **State & Hooks**   | React Hooks (`useState`, `useEffect`) · Custom `useFetch` hook |
| **Styling**         | React Native StyleSheet · Google Fonts (Expo Font)             |
| **Animations & UX** | React Native Reanimated · Gesture Handler · Safe Area Context  |
| **Tooling**         | Metro Bundler · Babel 7 · Expo Go for live reload              |

## Installation

### Prerequisites

- **Node.js 14+** and **npm** or **Yarn**
- **Expo CLI** (optional) for local builds: `npm install ‑g expo-cli`
- A valid **RapidAPI** account & API key for *JSearch*

### Quick Start

```bash
# 1 · Clone repository
$ git clone https://github.com/codereyes-1/React-Native-JobSearch.git
$ cd React-Native-JobSearch

# 2 · Install dependencies
$ npm install   # or yarn

# 3 · Configure environment variables
#   Create a file named .env at project root and add:
RAPID_API_KEY=<your‑rapidapi‑key>

# 4 · Run the development server (interactive menu)
$ npm start     # Expo CLI opens http://localhost:19002

# 5 · Launch on device/emulator
#   - Press “i” to run on iOS Simulator
#   - Press “a” to run on Android emulator
#   - Or scan the QR code with Expo Go app
```

## Usage

1. **Search** – enter job title, technology, or keyword; results load instantly.
2. **Browse** – swipe or scroll through cards; tap any card for details.
3. **Apply** – follow the “Apply Now” button to the external listing.
4. **Refresh** – pull down to trigger the custom `useFetch().refetch()` function.

## License

Released under the **MIT License**. See the [`LICENSE`](LICENSE) file for full terms.

=======
<div align="center">
  <br />
    <a href="https://youtu.be/mJ3bGvy0WAY?feature=shared" target="_blank">
      <img src="https://github.com/adrianhajdin/project_react_native_jobs/assets/151519281/e7514725-0706-4080-bee4-b042554dabf7" alt="Project Banner">
    </a>
  <br />

  <div>
    <img src="https://img.shields.io/badge/-React_Native-black?style=for-the-badge&logoColor=white&logo=react&color=61DAFB" alt="react.js" />
    <img src="https://img.shields.io/badge/-Expo-black?style=for-the-badge&logoColor=white&logo=expo&color=000020" alt="expo" />
  </div>

  <h3 align="center">React Native Job Finder App</h3>

   <div align="center">
     Build this project step by step with our detailed tutorial on <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a> YouTube. Join the JSM family!
    </div>
</div>

## 📋 <a name="table">Table of Contents</a>

1. 🤖 [Introduction](#introduction)
2. ⚙️ [Tech Stack](#tech-stack)
3. 🔋 [Features](#features)
4. 🤸 [Quick Start](#quick-start)
5. 🕸️ [Snippets](#snippets)
6. 🔗 [Links](#links)
7. 🚀 [More](#more)

## 🚨 Tutorial

This repository contains the code corresponding to an in-depth tutorial available on our YouTube channel, <a href="https://www.youtube.com/@javascriptmastery/videos" target="_blank"><b>JavaScript Mastery</b></a>. 

If you prefer visual learning, this is the perfect resource for you. Follow our tutorial to learn how to build projects like these step-by-step in a beginner-friendly manner!

<a href="https://youtu.be/mJ3bGvy0WAY?feature=shared" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/1736fca5-a031-4854-8c09-bc110e3bc16d" /></a>

## <a name="introduction">🤖 Introduction</a>

A hands-on experience in React Native development, from understanding the basics to building a feature-rich app with a focus on UI/UX, external data integration, and best practices.

If you're getting started and need assistance or face any bugs, join our active Discord community with over 27k+ members. It's a place where people help each other out.

<a href="https://discord.com/invite/n6EdbFJ" target="_blank"><img src="https://github.com/sujatagunale/EasyRead/assets/151519281/618f4872-1e10-42da-8213-1d69e486d02e" /></a>

## <a name="tech-stack">⚙️ Tech Stack</a>

- Node.js
- React Native
- Axios
- Expo
- Stylesheet

## <a name="features">🔋 Features</a>

👉 **Visually Appealing UI/UX Design**: Develop an aesthetically pleasing user interface using React Native components.

👉 **Third Party API Integration**: Fetch data from an external API and seamlessly integrate it into the app.

👉 **Search & Pagination Functionality**: Implement search functionality and pagination for efficient data navigation.

👉 **Custom API Data Fetching Hooks**:Create custom hooks for streamlined and reusable API data fetching.

👉 **Dynamic Home Page**: Explore diverse jobs from popular and nearby locations across different categories.

👉 **Browse with Ease on Explore Page**: Page: Navigate through various jobs spanning different categories and types.

👉 **Detailed Job Insights**: View comprehensive job details, including application links, salary info, responsibilities, and qualifications.

👉 **Tailored Job Exploration**: Find jobs specific to a particular title 

👉 **Robust Loading and Error Management**: Ensure effective handling of loading processes and error scenarios. 

👉 **Optimized for All Devices**: A responsive design for a seamless user experience across various devices.

and many more, including code architecture and reusability 

## <a name="quick-start">🤸 Quick Start</a>

Follow these steps to set up the project locally on your machine.

**Prerequisites**

Make sure you have the following installed on your machine:

- [Git](https://git-scm.com/)
- [Node.js](https://nodejs.org/en)
- [npm](https://www.npmjs.com/) (Node Package Manager)

**Cloning the Repository**

```bash
git clone https://github.com/adrianhajdin/project_react_native_jobs.git
cd project_react_native_jobs
```

**Installation**

Install the project dependencies using npm:

```bash
npm install
```

**Set Up Environment Variables**

Create a new file named `.env` in the root of your project and add the following content:

```env
X-RapidAPI-Key=
```

Replace the placeholder values with your actual credentials. You can obtain these credentials by signing up on the [RapidAPI website](https://rapidapi.com/letscrape-6bRBa3QguO5/api/jsearch).

**Running the Project**

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) in your browser to view the project.

## <a name="snippets">🕸️ Snippets</a>

<details>
<summary><code>Search.js</code></summary>

```javascript
import React, { useEffect, useState } from 'react'
import { ActivityIndicator, FlatList, Image, TouchableOpacity, View } from 'react-native'
import { Stack, useRouter, useSearchParams } from 'expo-router'
import { Text, SafeAreaView } from 'react-native'
import axios from 'axios'

import { ScreenHeaderBtn, NearbyJobCard } from '../../components'
import { COLORS, icons, SIZES } from '../../constants'
import styles from '../../styles/search'

const JobSearch = () => {
    const params = useSearchParams();
    const router = useRouter()

    const [searchResult, setSearchResult] = useState([]);
    const [searchLoader, setSearchLoader] = useState(false);
    const [searchError, setSearchError] = useState(null);
    const [page, setPage] = useState(1);

    const handleSearch = async () => {
        setSearchLoader(true);
        setSearchResult([])

        try {
            const options = {
                method: "GET",
                url: `https://jsearch.p.rapidapi.com/search`,
                headers: {
                    "X-RapidAPI-Key": '',
                    "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
                },
                params: {
                    query: params.id,
                    page: page.toString(),
                },
            };

            const response = await axios.request(options);
            setSearchResult(response.data.data);
        } catch (error) {
            setSearchError(error);
            console.log(error);
        } finally {
            setSearchLoader(false);
        }
    };

    const handlePagination = (direction) => {
        if (direction === 'left' && page > 1) {
            setPage(page - 1)
            handleSearch()
        } else if (direction === 'right') {
            setPage(page + 1)
            handleSearch()
        }
    }

    useEffect(() => {
        handleSearch()
    }, [])

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.lightWhite }}>
            <Stack.Screen
                options={{
                    headerStyle: { backgroundColor: COLORS.lightWhite },
                    headerShadowVisible: false,
                    headerLeft: () => (
                        <ScreenHeaderBtn
                            iconUrl={icons.left}
                            dimension='60%'
                            handlePress={() => router.back()}
                        />
                    ),
                    headerTitle: "",
                }}
            />

            <FlatList
                data={searchResult}
                renderItem={({ item }) => (
                    <NearbyJobCard
                        job={item}
                        handleNavigate={() => router.push(`/job-details/${item.job_id}`)}
                    />
                )}
                keyExtractor={(item) => item.job_id}
                contentContainerStyle={{ padding: SIZES.medium, rowGap: SIZES.medium }}
                ListHeaderComponent={() => (
                    <>
                        <View style={styles.container}>
                            <Text style={styles.searchTitle}>{params.id}</Text>
                            <Text style={styles.noOfSearchedJobs}>Job Opportunities</Text>
                        </View>
                        <View style={styles.loaderContainer}>
                            {searchLoader ? (
                                <ActivityIndicator size='large' color={COLORS.primary} />
                            ) : searchError && (
                                <Text>Oops something went wrong</Text>
                            )}
                        </View>
                    </>
                )}
                ListFooterComponent={() => (
                    <View style={styles.footerContainer}>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('left')}
                        >
                            <Image
                                source={icons.chevronLeft}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                        <View style={styles.paginationTextBox}>
                            <Text style={styles.paginationText}>{page}</Text>
                        </View>
                        <TouchableOpacity
                            style={styles.paginationButton}
                            onPress={() => handlePagination('right')}
                        >
                            <Image
                                source={icons.chevronRight}
                                style={styles.paginationImage}
                                resizeMode="contain"
                            />
                        </TouchableOpacity>
                    </View>
                )}
            />
        </SafeAreaView>
    )
}

export default JobSearch
```
</details>


>>>>>>> 327da8b68d76b8d21b27d2f3d6cac361e7f4d1de
