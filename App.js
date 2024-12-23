import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.textTengah}>Teks di Tengah Layar</Text>

      {/* Tata letak dua kotak */}
      <View style={styles.tataLetak}>
        <View style={styles.kotak1}></View>
        <View style={styles.kotak2}></View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#D3D3D3", 
  },

  textTengah: {
    fontSize: 24,
    color: "#1E90FF", 
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    backgroundColor: "rgba(0, 0, 0, 0.1)", 
    padding: 12,
    borderRadius: 8,
    overflow: "hidden",
    fontStyle: "italic", 
  },

  tataLetak: {
    flexDirection: "row",
    justifyContent: "space-evenly", 
    alignItems: "center",
    width: "75%", 
  },

  kotak1: {
    width: 100,
    height: 100,
    backgroundColor: "#8A2BE2", 
    borderRadius: 12, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 4,
  },

  kotak2: {
    width: 100,
    height: 100,
    backgroundColor: "#FFD700",
    borderRadius: 12, 
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.7,
    shadowRadius: 6,
    elevation: 4,
  },
});
