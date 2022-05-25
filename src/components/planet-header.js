import { StyleSheet, View,Pressable } from 'react-native'
import React from 'react'
import Text from './text/text'
import { spacing } from '../theme/spacing'
import { colors } from '../theme/colors'
import { AntDesign } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native'

const PlanetHeader = ({backBtn}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.container}>
      {backBtn && (
            <Pressable style={{marginRight: spacing[4]}} onPress={()=>{
              // navigation.navigate('Home')
              navigation.goBack();
            }}>
                <AntDesign name="left" size={24} color="white" />
            </Pressable>
        )}
      <Text preset='h2'>THE PLANETS</Text>
    </View>
  )
}

export default PlanetHeader

const styles = StyleSheet.create({
    container:{
        padding:spacing[4],
        borderBottomWidth:0.30,
        borderBottomColor:colors.white,
        flexDirection:'row',
        alignItems:'center'
    }
})