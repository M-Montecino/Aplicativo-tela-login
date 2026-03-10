import { Image, StyleSheet, Text, View } from "react-native";

import { Input } from "@/components/input";

export default function Index() {
  return (
    <View style={styles.container}>
      <Image source={require("@/assets/img1.jpg")} style={styles.images} />

      <Text style={styles.title}>Entrar</Text>
      <Text style={styles.subtitle}>Acesse sua conta com e-mail e senha</Text>

      <View>
        <Input placeholder="E-mail" keyboardType="email-address" />
        <Input placeholder="Senha" secureTextEntry />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fdfdfd",
    padding: 32,
  },
  images: {
    width: "100%",
    height: 330,
    borderWidth: 4,
    borderColor: "#537E72",
    resizeMode: "contain",
    marginTop: 32,
  },
  title: {
    fontSize: 32,
    fontWeight: "bold",
    color: "#122B1D",
  },
  subtitle: {
    fontSize: 20,
  },
  forms: {
    marginTop: 24,
    gap: 12,
  },
});
