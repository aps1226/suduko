import * as React from "react";
import { StyleSheet, View } from "react-native";
import { Children, cloneElement, isValidElement } from "react";

type Props = {
  children: any,
  color: string,
  stroke: number
}
const styles = StyleSheet.create({
  outline: {
    position: 'absolute'
  },
});

export default function TextStroke(props:Props){
  const createClones = (w: number, h: number, color?: string) => {
    const { children } = props;
    return Children.map(children, child => {
      const currentProps = child.props as any;
      const currentStyle = (currentProps.style || {});
      const newProps = {
        ...currentProps,
        style: {
          ...currentStyle,
          textShadowOffset: {
            width: w,
            height: h
          },
          textShadowColor: color,
          textShadowRadius: 1
        }
      }
      return cloneElement(child, newProps)
    });
  }

  const {color, stroke, children} = props;
  const strokeW = stroke;
  const top = createClones(0, -strokeW * 1.2, color);
  const topLeft = createClones(-strokeW, -strokeW, color);
  const topRight = createClones(strokeW, -strokeW, color);
  const right = createClones(strokeW, 0, color);
  const bottom = createClones(0, strokeW, color);
  const bottomLeft = createClones(-strokeW, strokeW, color);
  const bottomRight = createClones(strokeW, strokeW, color);
  const left = createClones(-strokeW * 1.2, 0, color);

  return (
    <View>
      <View style={ styles.outline }>{ left }</View>
      <View style={ styles.outline }>{ right }</View>
      <View style={ styles.outline }>{ bottom }</View>
      <View style={ styles.outline }>{ top }</View>
      <View style={ styles.outline }>{ topLeft }</View>
      <View style={ styles.outline }>{ topRight }</View>
      <View style={ styles.outline }>{ bottomLeft }</View>
      { bottomRight }
    </View>
  );
  }
