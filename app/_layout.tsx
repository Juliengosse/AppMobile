import { Stack } from "expo-router";
import { View, ActivityIndicator } from "react-native";
import { useFonts } from "expo-font";

export default function Layout() {
  
  const [fontsLoaded] = useFonts({
    'SpaceMono-Regular': require('../assets/fonts/SpaceMono-Regular.ttf'),
  });

  //  Afficher un loader pendant le chargement des polices
  if (!fontsLoaded) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  // 🌍 Gestion automatique des écrans avec Expo Router
  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#6200ea" }, // 🎨 Couleur du header
        headerTintColor: "#fff", // 🎨 Couleur du texte du header
        headerTitleAlign: "center", // 🏷️ Centrer le titre
      }}
    />
  );
}
