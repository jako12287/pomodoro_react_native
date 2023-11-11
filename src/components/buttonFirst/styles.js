import { StyleSheet } from "react-native";
import { ThemeMain } from "../../theme";

const stylesButton = StyleSheet.create({
  button: {
    backgroundColor: "#fff",
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#000",
    fontWeight: "bold",
  },
  buttonDisabled: {
    backgroundColor: "#776B5D",
    width: 100,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
  textDisabled: {
    color: "#000",
    fontWeight: "bold",
  },
});

export default stylesButton;
