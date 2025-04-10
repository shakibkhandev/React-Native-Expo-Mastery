# Camera Demo App

A React Native Expo application that demonstrates camera functionality including photo capture, video recording, and media library integration.

## Features

- 📸 Take photos with front/back camera
- 🎥 Record videos
- 🔄 Switch between front and back cameras
- 💾 Save photos to device gallery
- 📱 Modern and intuitive UI
- 🔒 Proper permission handling

## Prerequisites

- Node.js (v14 or higher)
- npm or yarn
- Expo CLI
- iOS Simulator or Android Emulator (for testing)

## Step-by-Step Setup Guide

1. Create a new Expo project:

```bash
npx create-expo-app@latest camera-demo
cd camera-demo
```

2. Install required dependencies:

```bash
npx expo install expo-camera expo-image expo-media-library
```

3. Start the development server:

```bash
npx expo start
```

## Usage

1. Launch the app on your device or emulator
2. Grant camera and media library permissions when prompted
3. Use the camera interface to:
   - Take photos by tapping the capture button
   - Record videos by switching to video mode
   - Switch between front and back cameras
   - Save captured photos to your device's gallery

## Project Structure

- `/app/index.tsx` - Main application code containing camera implementation
- Dependencies:
  - expo-camera: For camera functionality
  - expo-image: For image handling
  - expo-media-library: For saving to device gallery

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is licensed under the MIT License - see the LICENSE file for details.
