import React, { useEffect } from 'react'
import { Button, Text, View, TouchableOpacity } from 'react-native'
//import { StackScreenProps } from '@react-navigation/stack'
import { DrawerScreenProps } from '@react-navigation/drawer'
import { styles } from '../theme/appTheme'


//interface Props extends StackScreenProps<any, any> { };
interface Props extends DrawerScreenProps<any, any> { };

export const Pagina1Screen = ({ navigation }: Props) => {


  useEffect(() => {


    navigation.setOptions({
      headerLeft: () => (
        <Button
          title="Menú"
          onPress={() => navigation.toggleDrawer}
        />
      )
    })


  }, [])



  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}>Pagina1Screen </Text>

      <Button
        title="Ir página 2"
        onPress={() => navigation.navigate('Pagina2Screen')}
      />

      <Text style={{
        marginVertical: 20,
        fontSize: 22,
        color: 'black',
        marginLeft: 60

      }}>
        👇 Click a Users 👇
      </Text>


      <View style={{ flexDirection: 'row' }}>
        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#4466eb'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 1,
            nombre: 'Derian'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Derian</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{
            ...styles.botonGrande,
            backgroundColor: '#1495e0'
          }}
          onPress={() => navigation.navigate('PersonaScreen', {
            id: 2,
            nombre: 'Julieth'
          })}
        >
          <Text style={styles.botonGrandeTexto}>Julieth</Text>
        </TouchableOpacity>

      </View>


    </View>
  )
}
