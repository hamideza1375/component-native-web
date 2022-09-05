import React, { useEffect, useState } from 'react'
import { View, Text, TextInput, ScrollView, TouchableOpacity } from 'react-native';
import Icon from '@expo/vector-icons/FontAwesome';

let fontFamily
let fontSize = 16

// grand
// btitrbold
// byekan

export const Button = React.forwardRef((prop, ref) => <TouchableOpacity ref={ref} onPress={prop.onPress} {...prop} style={[{ justifyContent: 'center', alignItems: 'center', borderWidth: 1, borderRadius: 5, backgroundColor:'#eee', borderColor:'silver', height:'100%', },prop.style]}><Text style={[{ textAlign: 'center', justifyContent: 'center', alignItems: 'center', borderRadius: 5,paddingVertical:9, paddingHorizontal:20, },prop.textStyle]} >{prop.children}</Text></TouchableOpacity>)

export const Div = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ paddingVertical: 5 }, props.className, props.style]} >{props.children}</View>)

export const Span = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[props.className, props.style]} >{props.children}</View>)

export const Row = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row', paddingVertical: 5 }, props.className, props.style]}>{props.children}</View>)

export const RowSpan = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row' }, props.className, props.style]}>{props.children}</View>)

export const RowReverse = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', paddingVertical: 5 }, props.className, props.style]}>{props.children}</View>)

export const RowReverseSpan = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse' }, props.className, props.style]} >{props.children}</View>)

export const Scroll = React.forwardRef((props, ref) => <ScrollView ref={ref}  {...props} style={[{ paddingVertical: 5 }, props.className, props.style]} >{props.children}</ScrollView>)

export const ScrollHorizontal = React.forwardRef((props, ref) => <ScrollView ref={ref} {...props} horizontal={true} style={[props.className, props.style]} >{props.children}</ScrollView>)

export const Ul = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ paddingVertical: 5 }, props.className, props.style]}>{props.children}</View>)




export const H1 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily,fontSize: 33,fontWeight:'bold', marginVertical:20, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily,fontSize: 33,fontWeight:'bold', marginVertical:20, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H2 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily,fontSize: 26,fontWeight:'bold',  marginVertical:20, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily,fontSize: 26,fontWeight:'bold', marginVertical:20, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H3 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily,fontSize: 14,fontWeight:'bold',  marginVertical:20,  color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily,fontSize: 24,fontWeight:'bold', marginVertical:20,  color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H4 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 21,fontWeight:'bold',  marginVertical:20, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{fontFamily, fontSize: 21,fontWeight:'bold', marginVertical:20, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H5 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily,fontSize: 18,fontWeight:'bold',  marginVertical:20, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily,fontSize: 18.5,fontWeight:'bold', marginVertical:20, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})

export const H6 = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily,fontSize: 16,fontWeight:'bold',  marginVertical:20, color: '#000' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily,fontSize: 16,fontWeight:'bold', marginVertical:20, color: '#000' }, props.className, props.style]} >{props.children}</Text>)
})



export const I = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 16, marginVertical:20, fontStyle: 'italic', color: '#444' ,fontWeight:'600' }, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{fontFamily, fontSize: 16, marginVertical:20, fontStyle: 'italic', color: '#444' ,fontWeight:'600'}, props.className, props.style]} >{props.children}</Text>)
})

export const P = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontSize:16, fontFamily,marginVertical:20, color: '#444' ,fontWeight:'600'}, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontSize:16,fontFamily,marginVertical:20, color: '#444' ,fontWeight:'600'}, props.className, props.style]} >{props.children}</Text>)
})

export const Li = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{fontFamily,fontSize, marginVertical:20, padding: 3.5, alignSelf: 'flex-start', color: '#444' ,fontWeight:'600'}, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{ fontFamily,fontSize, marginVertical:20, padding: 3.5, alignSelf: 'flex-start', color: '#444' ,fontWeight:'600'}, props.className, props.style]}  >{props.children}</Text>)
})

export const Small = React.forwardRef((props, ref) => {
  if (props.value) return (<TextInput onPressIn={props.onClick} caretHidden={true} ref={ref} value={props.value} multiline showSoftInputOnFocus={false} {...props} style={[{ fontFamily, fontSize: 13, marginVertical:20,  color: '#444' ,fontWeight:'600'}, props.className, props.style]} />)
  else return (<Text onPress={props.onClick} ref={ref} {...props} style={[{fontFamily, fontSize: 13, marginVertical:20, color: '#444' ,fontWeight:'600'}, props.className, props.style]}  >{props.children}</Text>)
})

export const Input = React.forwardRef((props, ref) => {
  return (<TextInput onPressIn={props.onClick} ref={ref} autoCapitalize='none' autoCorrect={false} spellCheck={true}
    {...props} style={[{ fontFamily,textAlign: "right", fontSize, padding: 10, borderWidth: 1, borderColor: '#999', marginHorizontal: 1.5, borderRadius: 5 }, props.className, props.style]} />)
})

export const Textarea = React.forwardRef((props, ref) => {
  return (<TextInput onPressIn={props.onClick} autoCapitalize='none' autoCorrect={false} spellCheck={true}
    ref={ref} multiline {...props} style={[{fontFamily,fontSize, minHeight: 90, padding: 4, textAlign: 'right', marginHorizontal: 1.5, borderWidth: 1, borderRadius: 5, color: '#444' ,fontWeight:'600'}, props.className, props.style]} />)
})



export const Br = (props) => (<Text {...props} style={[{ width: '100%', marginVertical: 5 }, props.className, props.style]} />)

export const Hr = (props) => (<Text {...props} style={[{ width: '100%', marginVertical: 5, borderTopWidth:1 }, props.className, props.style]} />)

export const Mark = (props) => (<Text onPress={props.onClick} {...props} style={{ fontFamily,backgroundColor: '#fc7', height: 40, paddingHorizontal: 3, marginHorizontal: 2, alignSelf: 'center', fontSize,color: '#444' ,fontWeight:'600' }} >{props.children}</Text>)



export const Table = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex: 1, flexWrap: 'wrap', minWidth: '100%', height:'100vh' }, props.className, props.style]}>{props.children}</View>)

export const Tbody = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex: 1, flexWrap: 'wrap', minWidth: '100%', minHeight: '100%' }, props.className, props.style]}>{props.children}</View>)

export const Thead = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', minWidth:'100%'}, props.className, props.style]}>{props.children}</View>)


export const Th = React.forwardRef((props, ref) => <View ref={ref} {...props} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} ><Text style={[{fontFamily, fontWeight:'bold', fontSize, paddingVertical:10, textShadowRadius:1,textShadowColor:'black' },props.textStyle]}> {props.children}</Text></View>)

export const Tb = React.forwardRef((props, ref) => <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5 }, props.style]} ><Text style={[{fontFamily,fontWeight:'600',color:'#555', fontSize,paddingVertical:10, },props.textStyle]} > {props.children}</Text></View>)

export const Tbtn = React.forwardRef((props, ref) => <View ref={ref} style={[{ flex: 1, backgroundColor: 'white', borderColor: '#666', borderWidth: .8, justifyContent: 'center', alignItems: 'center', borderRadius: 1.5, }, props.style]} ><Button {...props} style={{width: '99.8%'}} textStyle={[{paddingVertical:10, fontFamily,fontWeight:'600',color:'#555', fontSize }, props.textStyle]} >{props.children}</Button></View>)


export const Tr = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flex: 1 }, props.className, props.style]} >{props.children}</View>)

export const Tc = React.forwardRef((props, ref) => <View ref={ref} onStartShouldSetResponder={props.onClick} {...props} style={[{ flexDirection: 'row-reverse', flex:1,justifyContent:'center', }, props.className, props.style]}>{props.children}</View>)



export const CheckBox = (prop) => {
  return <Icon {...prop} checked={prop.show} onPress={()=>prop.setShow(!prop.show)} name={"check"} size={18} color="#fff" style={[{ width: 18, borderWidth: .9, }, { backgroundColor: prop.show === false ? '#fff' : "#2c1" }, prop.style]} />
}
