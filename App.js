import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

export default function App() {
  return (
    <View style={styles.container}>
      {/* Teks di tengah layar */}
      <Text style={styles.texttengah}>teks di tengah layar</Text>

      {/* Tata letak dua kotak */}
      <View style={styles.tataletak}>
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
    backgroundColor: "#F5F5F5", // Warna latar belakang abu-abu terang
  },

  texttengah: {
    fontSize: 24,
    color: "#0000FF",
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 30,
    backgroundColor: "rgba(0, 0, 0, 0.3)", // Opsi transparansi latar belakang teks
    padding: 10,
    borderRadius: 10,
    overflow: "hidden",
    fontStyle: "italic",
  },

  tataletak: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
  },

  kotak1: {
    width: 100,
    height: 100,
    backgroundColor: "#FF6F61",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },

  kotak2: {
    width: 100,
    height: 100,
    backgroundColor: "#50C878",
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
});
