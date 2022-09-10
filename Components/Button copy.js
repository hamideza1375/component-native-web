import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';


function Button(prop) {
  const { outline, bgcolor, color, children, border, style, fontSize = 16, padding,paddingTop,paddingBottom,paddingLeft,paddingRight } = prop

  return (
    !outline ?
      <TouchableOpacity onPress={prop.onPress}
        {...prop}
        style={[
          {
            backgroundColor: (bgcolor == 'red') && '#f33' ||
              (!bgcolor) && '#0091EA' ||
              (bgcolor == 'blue') && '#22f' ||
              (bgcolor == 'green') && '#292' ||
              (bgcolor == 'yellow') && '#fa0' ||
              (bgcolor == 'black') && '#555' ||
              bgcolor
            ,
          }, styles.touchopacity,
          !color && (bgcolor == 'white' ? { color: '#555' } : { color: 'white' }) ||
          { color: color }, bgcolor == 'white' ? { borderWidth: 1 } :
            {
              borderColor: !border && ((!bgcolor) ? '#0091EA' :
                bgcolor == 'yellow' ? '#ca0' : bgcolor) || border
            }, {
            margin: prop.margin, marginHorizontal: prop.marginHorizontal,
            marginVertical: prop.marginVertical
          },
          style]}>
        <Text style={[
          styles.textButton,
          !color && (bgcolor == 'white' ?
            { color: '#555' } :
            { color: 'white' }) ||
          { color: color },
          {
            padding: prop.padding, paddingHorizontal: prop.paddingHorizontal?prop.paddingHorizontal:5,
            paddingVertical: prop.paddingVertical
          }, { fontSize, padding,paddingTop,paddingBottom,paddingLeft,paddingRight }]} >
          {children}
        </Text>

      </TouchableOpacity>
      :
      <TouchableOpacity
      {...prop}
        style={[
          styles.textOutline
          , bgcolor == 'white' ? { borderWidth: 1 } :
            {
              borderColor: !border && (bgcolor == 'yellow' && '#fc3' || bgcolor || '#3399ff')
                || border
            }, {
            margin: prop.margin, marginHorizontal: prop.marginHorizontal,
            marginVertical: prop.marginVertical
          }, style,
          style]}
        onPress={prop.onPress}>
        <Text style={[color &&
          { color: color } ||
          !color && bgcolor &&
          { color: bgcolor } ||
          { color: '#3399ff' }, {
          padding: prop.padding, paddingHorizontal: prop.paddingHorizontal?prop.paddingHorizontal:5,
          paddingVertical: prop.paddingVertical
        }, { fontSize,padding,paddingTop,paddingBottom,paddingLeft,paddingRight }]} >
          {children}
        </Text>

      </TouchableOpacity>
  )
}

export default Button;
const styles = StyleSheet.create({
  textOutline: {
    backgroundColor: "white",
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    textAlign: 'center',
    height: 45,
  },
  textButton: {
    textAlign: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
  touchopacity: {
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    height: 45,
  },
})