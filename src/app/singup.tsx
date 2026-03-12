import { Link } from "expo-router";
import { useState } from "react";
import {
    Alert,
    Image,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    View,
} from "react-native";

import { Button } from "@/components/Button";
import { Input } from "@/components/Input";

export default function SingUp() {
  const [name, SetName] = useState("");
  const [email, SetEmail] = useState("");
  const [password, SetPassword] = useState("");
  const [confirmPassword, SetConfimPassword] = useState("");

  function handleRegister() {
    if (
      !name.trim() ||
      !email.trim() ||
      !password.trim() ||
      !confirmPassword.trim()
    )
      return Alert.alert("Cadastrar", "Favor preeencher todos os campos");

    Alert.alert("Bem-vindo", `Cadastro realisado com: ${email}`);
  }

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.select({ ios: "padding", android: "height" })}
    >
      <ScrollView
        contentContainerStyle={{ flexGrow: 1 }}
        keyboardShouldPersistTaps="handled"
      >
        <View style={styles.container}>
          <Image source={require("@/assets/img2.jpg")} style={styles.images} />

          <Text style={styles.title}>Cadastre-se</Text>
          <Text style={styles.subtitle}>Crie sua conta com e-mail e senha</Text>

          <View>
            <Input placeholder="Nome" onChangeText={SetName} />
            <Input
              placeholder="E-mail"
              keyboardType="email-address"
              onChangeText={SetEmail}
            />
            <Input
              placeholder="Senha"
              secureTextEntry
              onChangeText={SetPassword}
            />
            <Input
              placeholder="Confirme sua senha"
              secureTextEntry
              onChangeText={SetConfimPassword}
            />
            <Button label="Cadastrar" onPress={handleRegister} />
          </View>
          <Text style={styles.footerText}>
            Já possuí conta?{" "}
            <Link href={"/"} style={styles.footerLink}>
              Entre aqui.
            </Link>
          </Text>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#cddecb",
    padding: 32,
  },
  images: {
    width: "100%",
    height: 330,
    borderWidth: 4,
    resizeMode: "contain",
    marginTop: 32,
    borderColor: "#537e72",
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
  footerText: {
    textAlign: "center",
    marginTop: 24,
    color: "#537e72",
  },
  footerLink: {
    fontStyle: "italic",
    fontWeight: "700",
  },
});
