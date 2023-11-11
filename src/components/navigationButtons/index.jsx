import { View } from "react-native";
import stylesButton from "./styles";
import ButtonFirst from "../buttonFirst";
const NavigationButtons = ({ setCurrentView, disabled }) => {
  return (
    <View style={stylesButton.container}>
      <ButtonFirst
        name="Time Main"
        setCurrentView={setCurrentView}
        to={1}
        disabled={disabled}
      />
      <ButtonFirst
        name="Short Rest"
        setCurrentView={setCurrentView}
        to={2}
        disabled={disabled}
      />
      <ButtonFirst
        name="Long Rest"
        setCurrentView={setCurrentView}
        to={3}
        disabled={disabled}
      />
    </View>
  );
};

export default NavigationButtons;
