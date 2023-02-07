import { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { Color } from "../constent/color";

type props = {
  time: number;
};

export const Timer = ({ time }: props) => {
  const [second, setSecond] = useState(-1);
  const [minute, setMinute] = useState(-1);
  const [hour, setHour] = useState(time);
  useEffect(() => {
    if (second >= 0) {
      setTimeout(() => setSecond(second - 1), 1000);
      // return;
    }
    if (second === -1 && minute > 0) {
      setMinute(minute - 1);
      setSecond(59);
      return;
    }
    if (minute === -1 && hour > 0) {
      setHour(hour - 1);
      setMinute(59);
      setSecond(59);
      return;
    }
  }, [second, minute, hour]);

  const twoDigit = (num: number) => {
    if (num.toString().length < 2) {
      return `0${num}`;
    } else return `${num}`;
  };

  return (
    <View style={style.wrapper}>
      <Text style={style.tooltip}>Remaining time  </Text>
      <Text style={[style.timer, hour < 1 && { color: Color.red700 }]}>
        {twoDigit(hour)}:{twoDigit(minute)}:{twoDigit(second)}
      </Text>
    </View>
  );
};
const style = StyleSheet.create({
  wrapper: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "baseline",
    marginHorizontal: 4,
  },
  tooltip: {
    color: Color.Gray300,
    fontSize: 11,
  },
  timer: {
    color: Color.White500,
    fontWeight: "bold",
    fontSize: 14,
  },
});
