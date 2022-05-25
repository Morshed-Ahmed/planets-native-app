import { StyleSheet, View,SafeAreaView,Platform,StatusBar,FlatList ,Pressable} from 'react-native'
import React from 'react'
import Text from '../components/text/text'
import PlanetHeader from '../components/planet-header'
import { colors } from '../theme/colors'
import { PLANET_LIST } from '../data/planet-list'
import { spacing } from '../theme/spacing'
import { AntDesign } from '@expo/vector-icons';

const Home = ({navigation}) => {
  return (
    //   <View style={{backgroundColor:colors.black,flex:1}}>
        <SafeAreaView style={styles.container}>
            <PlanetHeader/>
            <FlatList
            data={PLANET_LIST}
            contentContainerStyle={styles.list}
            keyExtractor={item => item.name}
            renderItem={({item})=>{
              const {name,color} = item;
              return(
                <Pressable onPress={()=>{
                  navigation.navigate('Details', {planet: item})
                }} style={styles.item}>
                  <View style={{flexDirection:'row',alignItems:'center'}}>
                    <View style={[styles.circle,{backgroundColor: color}]}/>
                    <Text preset='h3' style={styles.itemName}>{ name}</Text>
                  </View>

                  <AntDesign name="right" size={18} color="white" />
                </Pressable>
              )
            }}
            ItemSeparatorComponent={()=> <View style={styles.separator}/>}
            />
        </SafeAreaView>
    // </View>
  )
}

export default Home

const styles = StyleSheet.create({
    container:{
        flex:1,
        paddingTop :Platform.OS === "android" ? StatusBar.currentHeight:0,
        backgroundColor:colors.black
    },
    item:{
      flexDirection:'row',
      alignItems:'center',
      padding: spacing[4],
      justifyContent:'space-between',
      
    },
    list:{
      padding:spacing[4]
    },
    itemName:{
      textTransform:'uppercase',
      marginLeft:spacing[4]
    },
    circle:{
      width:25,
      height:25,
      borderRadius:15
    },
    separator:{
      borderBottomColor: colors.darkGrey,
      borderWidth:0.5
    }
})