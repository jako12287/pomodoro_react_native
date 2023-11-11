import { Text, TouchableHighlight } from "react-native";
import stylesButton from "./styles";

const ButtonFirst = ({ name = "", setCurrentView, to, disabled }) => {
  return (
    <TouchableHighlight
      style={disabled ? stylesButton.buttonDisabled : stylesButton.button}
      onPress={() => setCurrentView(to)}
      disabled={disabled}
    >
      <Text style={disabled ? stylesButton.textDisabled : stylesButton.text}>
        {name}
      </Text>
    </TouchableHighlight>
  );
};

export default ButtonFirst;
