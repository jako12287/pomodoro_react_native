import { StyleSheet } from "react-native";
import { ThemeMain } from "./src/theme";

export const stylesMain = StyleSheet.create({
  container: {
    paddingTop: 50,
    backgroundColor: "#1F4172",
    height: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
  },
  title: {
    alignItems: "center",
    fontSize: 3,
  },
  navLink: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "bold",
  },
  text: {
    fontSize: 50,
    fontWeight: "bold",
    color: ThemeMain.color.primary,
  },
  containerClock: {
    backgroundColor: "red",
    width: 250,
    height: 250,
    borderRadius: 200,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: 3,
  },
  textClock: {
    color: "#fff",
    fontSize: 50,
  },
  buttomPlayPause: {
    backgroundColor: "#ffffff80",
    width: 40,
    height: 40,
    justifyContent: "center",
    alignItems: "center",
    borderWidth: .5,
    borderRadius: 200,
    marginTop:12
  },
  textbuttomPlayPause: {
    color: "#00ff26",
  },
});
