import React from 'react';
import { View, Text, Image, Pressable } from 'react-native';

function Card(prop) {

  const { style, header, body, footer, bgcolor, color, alert, border, img, direction = 'rtl' } = prop

  return !img ? ((
    !alert ?
      <Pressable
        {...prop}
        style={[{
          borderWidth: 1, borderRadius: 5,
          borderColor:
            !border && (
              !bgcolor && '#fbb' ||
              bgcolor == 'black' && '#999' ||
              bgcolor == 'silver' && 'silver' ||
              bgcolor == 'blue' && 'blue' ||
              bgcolor == 'red' && 'red' ||
              bgcolor == 'green' && 'green' ||
              bgcolor == 'yellow' && 'yellow' ||
              bgcolor == 'white' && '#ccc' ||
              bgcolor) ||
            border
          ,
          backgroundColor:
            !bgcolor && '#fbb' ||
            bgcolor == 'black' && '#444' ||
            bgcolor == 'silver' && '#cfcfcf' ||
            bgcolor == 'blue' && '#003' ||
            bgcolor == 'red' && '#400' ||
            bgcolor == 'green' && '#031' ||
            bgcolor == 'yellow' && '#550' ||
            bgcolor == 'white' && '#fff' ||
            bgcolor
          ,
          width: '100%',
          alignSelf: 'center'
        }, style]}>
        <View style={{ padding: 12, alignItems: 'flex-start', }} >
          {header &&
            <View style={{ width: '100%', paddingVertical: 12, paddingHorizontal:5, }}>
              <Text
                style={[{
                  color:
                    !color ?
                      bgcolor ?
                        (bgcolor == 'white') && 'black' ||
                        (bgcolor == 'silver') && 'black' ||
                        (color) && color ||
                        'white'
                        :
                        "#333"
                      :
                      color,
                  fontWeight: '700',
                  fontSize: 15,
                  width: '100%',
                },,direction === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]}>
                {header}
              </Text>
            </View>
          }
          {body &&
            <View style={{ paddingVertical: 12, paddingHorizontal:5,width:'100%' }}>
              <Text style={[{
                color:
                  !color ?

                    bgcolor ?
                      (bgcolor == 'white') && 'black' ||
                      (bgcolor == 'silver') && 'black' ||
                      (color) && color ||
                      'white'
                      :
                      "#333"
                    :
                    color,
              },,direction === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]} >
                {body}
              </Text>
            </View>
          }
          {footer &&
              <View style={[{ paddingBottom: 18, color, height: 20, width: '100%' }]}><Text style={{ textAlign: 'center' }} >{footer}</Text></View>
            }
        </View>
      </Pressable>
      :
      (
        <Pressable
          {...prop}
          style={[{
            borderWidth: 1, borderRadius: 5,
            borderColor:
              !border && (
                !bgcolor && '#fdb' ||
                bgcolor == 'blue' && '#bfd' ||
                bgcolor == 'red' && '#fdb' ||
                bgcolor == 'green' && '#dfd' ||
                bgcolor == 'yellow' && '#ffb' ||
                bgcolor == 'silver' && '#ccc' ||
                bgcolor == 'black' && 'silver' ||
                bgcolor) ||
              border
            ,
            backgroundColor:
              !bgcolor && '#fdb' ||
              bgcolor == 'blue' && '#bfd' ||
              bgcolor == 'red' && '#fdb' ||
              bgcolor == 'green' && '#dfd' ||
              bgcolor == 'yellow' && '#ffb' ||
              bgcolor == 'silver' && '#ccc' ||
              bgcolor == 'black' && 'silver' ||
              bgcolor
            ,
            width: '100%',
            alignSelf: 'center'
          }, style]}>
          <View style={{ padding: 12, alignItems: 'flex-start', }} >
            {header &&
              <View style={{ width: '100%', paddingVertical: 12, paddingHorizontal:5}}>
                <Text
                  style={[{
                    color:
                      !color ? 'black' : color,
                    fontWeight: '700',
                    fontSize: 15,
                    width: '100%',
                  },direction === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]}>
                  {header}
                </Text>
              </View>
            }
            {body &&
              <View style={{ paddingVertical: 12, paddingHorizontal:5, width:'100%' }}>
                <Text style={[{
                  color:
                    !color ? 'black' : color,
                },direction === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]} >
                  {body}
                </Text>
              </View>
            }
            {footer &&
              <View style={[{ paddingBottom: 18, color, height: 20, width: '100%' }]}><Text style={{ textAlign: 'center' }} >{footer}</Text></View>
            }
          </View>
        </Pressable>
      )
  )


  )

    :
    (









      (
        !alert ?
          <Pressable
            {...prop}
            style={[{
              borderWidth: 1, borderRadius: 5, minHeight: 115,
              borderColor:
                !border && (
                  !bgcolor && '#fbb' ||
                  bgcolor == 'black' && '#999' ||
                  bgcolor == 'silver' && 'silver' ||
                  bgcolor == 'blue' && 'blue' ||
                  bgcolor == 'red' && 'red' ||
                  bgcolor == 'green' && 'green' ||
                  bgcolor == 'yellow' && 'yellow' ||
                  bgcolor == 'white' && '#ccc' ||
                  bgcolor) ||
                border
              ,
              backgroundColor:
                !bgcolor && '#fbb' ||
                bgcolor == 'black' && '#444' ||
                bgcolor == 'silver' && '#cfcfcf' ||
                bgcolor == 'blue' && '#003' ||
                bgcolor == 'red' && '#400' ||
                bgcolor == 'green' && '#031' ||
                bgcolor == 'yellow' && '#550' ||
                bgcolor == 'white' && '#fff' ||
                bgcolor
              ,
              width: '100%', position: 'relative',
            }, style]}>
            <View style={{ padding: 12 }} >
              {header &&
                <View style={{
                  width: '100%', paddingHorizontal:5,paddingVertical:12
                }}>
                  <Text
                    style={[{
                      color:
                        !color ?

                          bgcolor ?
                            (bgcolor == 'white') && 'black' ||
                            (bgcolor == 'silver') && 'black' ||
                            (color) && color ||
                            'white'
                            :
                            "#333"
                          :
                          color,
                      fontWeight: '700',
                      fontSize: 15,
                      width: '100%',
                      textAlign: 'left'
                    }, direction === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]}>
                    {header}
                  </Text>
                </View>
              }


              <View style={[{
                top: 8,
                position: 'absolute',
                height: 90,
                justifyContent: 'center',
              }, direction === 'rtl' ? { left: 7 } : { right: 7 }]} >
                <Image source={img} style={[{
                  width: 70,
                  height: 70,
                  borderRadius: 50,
                  alignSelf: 'center',
                }]}
                />
                {footer &&
                  <View style={[{ padding: 8, color, height: 20, width: '100%' }, direction === 'rtl' ? { alignSelf: 'flex-start' } : { alignSelf: 'flex-end' }]}><Text style={{ textAlign: 'center' }} >{footer}</Text></View>
                }
              </View>


              {body &&
                <View style={{
                  paddingHorizontal:5,paddingVertical:12
                }}>
                  <Text style={[{
                    color:
                      !color ?

                        bgcolor ?
                          (bgcolor == 'white') && 'black' ||
                          (bgcolor == 'silver') && 'black' ||
                          (color) && color ||
                          'white'
                          :
                          "#333"
                        :
                        color,
                  }, direction === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]} >
                    {body}
                  </Text>
                </View>
              }
            </View>
          </Pressable>







          :

          (
            <Pressable
              {...prop}
              style={[{
                borderWidth: 1, borderRadius: 5,minHeight: 115,
                borderColor:
                  !border && (
                    !bgcolor && '#fdb' ||
                    bgcolor == 'blue' && '#bfd' ||
                    bgcolor == 'red' && '#fdb' ||
                    bgcolor == 'green' && '#dfd' ||
                    bgcolor == 'yellow' && '#ffb' ||
                    bgcolor == 'black' && '#ccc' ||
                    bgcolor == 'silver' && 'silver' ||
                    bgcolor) ||
                  border
                ,
                backgroundColor:
                  !bgcolor && '#fdb' ||
                  bgcolor == 'blue' && '#bfd' ||
                  bgcolor == 'red' && '#fdb' ||
                  bgcolor == 'green' && '#dfd' ||
                  bgcolor == 'yellow' && '#ffb' ||
                  bgcolor == 'silver' && '#ccc' ||
                  bgcolor == 'black' && 'silver' ||
                  bgcolor
                ,
                width: '100%', position: 'relative'
              }, style]}>

              <View style={{ padding: 12 }} >
                {header &&
                  <View style={{ width: '100%', paddingVertical: 12, paddingHorizontal: 5, }}>
                    <Text
                      style={[{
                        color:
                          !color ? 'black' : color,
                        fontWeight: '700',
                        fontSize: 15,
                        width: '100%',
                      }, direction === 'rtl' ? { textAlign: 'right' } : { textAlign: 'left' }]}>
                      {header}
                    </Text>
                  </View>
                }

                <View style={[{
                  top: 8,
                  position: 'absolute',
                  height: 90,
                  justifyContent: 'center',
                }, direction === 'rtl' ? { left: 7 } : { right: 7 }]} >
                  <Image source={img} style={[{
                    width: 70,
                    height: 70,
                    borderRadius: 50,
                    alignSelf: 'center',
                  }]}
                  />
                  {footer &&
                    <View style={[{ padding: 8, color, height: 20, width: '100%' }, direction === 'rtl' ? { alignSelf: 'flex-start' } : { alignSelf: 'flex-end' }]}><Text style={{ textAlign: 'center' }} >{footer}</Text></View>
                  }
                </View>

                {body &&
                  <View style={{ paddingVertical: 12, paddingHorizontal: 5, width: '100%', }}>
                    <Text style={[{
                      color:
                        !color ? 'black' : color,
                      flexBasis: '80%'
                    }, direction === 'rtl' ? { textAlign: "right" } : { textAlign: "left" }]} >
                      {body}
                    </Text>
                  </View>
                }
              </View>
            </Pressable>
          )
      )
    )
}



export default Card;