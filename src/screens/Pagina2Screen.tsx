import React, { useEffect } from 'react'
import { Text, View, Button } from 'react-native';
import { useNavigation } from '@react-navigation/core'; //Uso de Hook
import { styles } from '../theme/appTheme';

export const Pagina2Screen = () => {

  const navigator = useNavigation();


  useEffect(() => {
      navigator.setOptions({
        title: 'Hola Mundo',
        headerBackTitle: 'Atras'
      })
  }, [])


  return (
    <View style={styles.globalMargin}>
      <Text style={styles.title}> Pagina2Screen </Text>

      <Button
        title="Ir página 3"
        onPress={() => navigator.navigate('Pagina3Screen')}
      />

    </View>
  )
}