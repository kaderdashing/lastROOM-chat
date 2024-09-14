export default {
  expo: {
    name: "auth",
    slug: "auth",
    version: "1.0.0",
    orientation: "portrait",
    icon: "./assets/icon.png",
    userInterfaceStyle: "light",
    splash: {
      image: "./assets/splash.png",
      resizeMode: "contain",
      backgroundColor: "#ffffff",
    },
    plugins: ["@react-native-google-signin/google-signin"],
    ios: {
      supportsTablet: true,
      bundleIdentifier: "com.tiggers.roomapp",
    },
    android: {
      adaptiveIcon: {
        foregroundImage: "./assets/adaptive-icon.png",
        backgroundColor: "#ffffff",
      },
      package: "com.tiggers.roomapp",
      googleServicesFile: process.env.GOOGLE_SERVICES_JSON,
      permissions: ["INTERNET"],
    },
    web: {
      favicon: "./assets/favicon.png",
    },
    extra: {
      eas: {
        projectId: "58d55d5d-aa37-40f2-a6cb-5274d94fac2e",
      },
    },
  },
};
