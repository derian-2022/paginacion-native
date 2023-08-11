import React, { useEffect } from 'react'
import { Text, View } from 'react-native'
import { styles } from '../theme/appTheme'
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParams } from '../navigator/StackNavigator'; //Forma recomendada por React-Navigation


// interface RouterParams {
//     id: number;     //Manera alternativa
//     nombre: string
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonaScreen'> {};  //Forma recomendada por React-Navigation

export const PersonaScreen = ({ route, navigation }: Props) => {

    //const params = route.params as RouterParams; //Manera alternativa de poner tipos de forma rapida a cualquier cosa
    const params = route.params;


    useEffect(() => {

        navigation.setOptions({
            title: params.nombre
        })

    }, [])


    return (
        <View style={styles.globalMargin}>
            <Text style={styles.title}>
                {
                    JSON.stringify(params, null, 3)
                }
            </Text>
        </View>
    )
}

