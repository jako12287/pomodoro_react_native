import React from "react";
import { Text, TouchableHighlight, View } from "react-native";
import NavigationButtons from "./src/components/navigationButtons";
import { stylesMain } from "./stylesMain";
import { useTimer } from "./src/hooks/useTimer";
import { formatTime } from "./src/helpers/formatTime";

const Main = () => {
  const { time, start, currentView, toggleTimer, setCurrentView } = useTimer();

  const navLinkText =
    currentView === 1
      ? "TIME MAIN"
      : currentView === 2
      ? "SHORT REST"
      : "LONG REST";

  const playPauseText = start ? "Stop" : "Start";

  return (
    <View style={stylesMain.container}>
      <View style={stylesMain.title}>
        <Text style={stylesMain.text}>POMODOR🍅</Text>
      </View>
      <View>
        <Text style={stylesMain.navLink}>{navLinkText}</Text>
      </View>
      <View style={stylesMain.containerClock}>
        <Text style={stylesMain.textClock}>{formatTime(time)}</Text>
        <TouchableHighlight
          onPress={toggleTimer}
          style={stylesMain.buttomPlayPause}
        >
          <Text style={stylesMain.textbuttomPlayPause}>{playPauseText}</Text>
        </TouchableHighlight>
      </View>
      <NavigationButtons setCurrentView={setCurrentView} disabled={start} />
    </View>
  );
};

export default Main;
