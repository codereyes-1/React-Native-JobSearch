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

