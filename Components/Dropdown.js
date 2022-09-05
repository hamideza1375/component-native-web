import React, { useState, useEffect, useRef } from "react";
import { Pressable } from "react-native";
import Icon from '@expo/vector-icons/FontAwesome5';

const Dropdown = React.forwardRef((props) => {

  const { show,setshow, children, icon, color = '#aaa', showBgcolor = '#fff', style, iconFalse, top } = props

const ref = useRef()

  useEffect(() => {
    ref?.current && ref.current.setNativeProps({ style: { transform: [{ scale: 0 }] } })
  }, [show])


  return (
    <Pressable >
      <Pressable
        onPress={() => {

          ref.current && ref.current.setNativeProps({ style: { transform: [{ scale: 1 }] } })
        }}

        style={[{ flexDirection: 'row', padding: 2, }, style]} >
        {!iconFalse && <Icon color={color} name={top?'caret-up':'caret-down'} style={[{ top: 3,position:'relative', right:1 }, { fontSize: 22.5 }]}></Icon>}
        <Icon color={color} name={icon ? icon : 'trash'} style={[{ fontSize: 22.5 }]}></Icon>
      </Pressable>

      <Pressable
        ref={ref}
        style={[{
          alignSelf: 'center', borderWidth: .5, borderRadius: 3, padding: 3, zIndex: 10, top: top ? -60 : 30, position: 'absolute',
          transform: [{ scale: 0 }], backgroundColor: showBgcolor, minWidth: 100
        }]}>
        {children}
      </Pressable>
    </Pressable>
  );
})

export default Dropdown


