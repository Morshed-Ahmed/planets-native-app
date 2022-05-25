import { StyleSheet,SafeAreaView ,StatusBar} from 'react-native'
import React from 'react'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import Text from '../components/text/text'

const Details = () => {
  return (
    <SafeAreaView style={styles.container}>
        
        <PlanetHeader backBtn={true}/>
      <Text>Details </Text>
    </SafeAreaView>
  )
}

export default Details

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop :Platform.OS === "android" ? StatusBar.currentHeight:0,
        backgroundColor:colors.black
    },
})