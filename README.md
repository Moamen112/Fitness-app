# FitFlow - Your Personal Fitness Companion

<p align="center">
  <img src="https://img.shields.io/badge/React%20Native-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" alt="React Native" />
  <img src="https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white" alt="Expo" />
  <img src="https://img.shields.io/badge/TypeScript-007ACC?style=for-the-badge&logo=typescript&logoColor=white" alt="TypeScript" />
  <img src="https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white" alt="Tailwind CSS" />
  <img src="https://img.shields.io/badge/Sanity-F03E2F?style=for-the-badge&logo=sanity&logoColor=white" alt="Sanity" />
  <img src="https://img.shields.io/badge/Clerk-6C47FF?style=for-the-badge&logo=clerk&logoColor=white" alt="Clerk" />
</p>

<p align="center">
  A cross-platform mobile application built with React Native and Expo to help you track your workouts, discover new exercises, and achieve your fitness goals.
</p>

<!-- You can add a screenshot or GIF of the application here -->
<!-- <p align="center">
  <img src="link-to-your-screenshot.png" alt="FitFlow App Screenshot" width="300"/>
</p> -->

## ✨ Features

- **User Authentication:** Secure sign-in and sign-up functionality using Clerk.
- **Exercise Library:** Browse a comprehensive list of exercises with detailed descriptions, difficulty levels, and demonstrative images/videos.
- **Workout Tracking:** Create and log your workout sessions, including exercises, sets, reps, and weights.
- **Active Workout Mode:** An interactive interface to guide you through your workout in real-time, with timers and set tracking.
- **Workout History:** View a detailed history of your past workouts to track your progress over time.
- **AI-Powered Assistance:** (If applicable) Leverage AI to generate personalized workout plans or get exercise recommendations.
- **User Profile:** A dedicated screen for users to manage their profile information.

## 🚀 Tech Stack

### Frontend

- **Framework:** React Native & Expo
- **Routing:** Expo Router
- **Styling:** NativeWind & Tailwind CSS
- **State Management:** Zustand
- **Language:** TypeScript

### Backend & CMS

- **Content Management:** Sanity.io
- **Query Language:** GROQ

### Services

- **Authentication:** Clerk
- **AI:** Google Generative AI / OpenAI

## Getting Started

### Prerequisites

- Node.js (LTS version recommended)
- Expo CLI
- An account with Sanity.io and Clerk.

### Installation & Setup

1.  **Clone the repository:**

    ```bash
    git clone https://github.com/your-username/fitflow.git
    cd fitflow
    ```

2.  **Install dependencies:**

    ```bash
    npm install
    ```

3.  **Set up environment variables:**

    You will need to create a `.env` file in the root of the project and add the following environment variables:

    ```
    EXPO_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_publishable_key
    EXPO_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
    EXPO_PUBLIC_SANITY_DATASET=your_sanity_dataset
    ```

4.  **Run the application:**
    ```bash
    npm start
    ```
    This will start the Metro bundler. You can then run the app on an emulator or a physical device using the Expo Go app.

## 📂 Project Structure

The project is organized into the following main directories:

- `src/`: Contains the core application code.
  - `app/`: The main application screens and navigation, structured using Expo Router.
  - `components/`: Reusable UI components.
  - `lib/`: Utility functions and libraries, including the Sanity client.
- `sanity/`: The Sanity.io studio configuration and content schemas.
- `store/`: Zustand store for global state management.
