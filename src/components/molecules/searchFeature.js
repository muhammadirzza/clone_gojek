import React from 'react';
import { View, TextInput, Image, StyleSheet } from 'react-native';

export const SearchFeature = ( props ) => {
    return(
        <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
          <View style={{ position: 'relative', flex: 1, marginRight: 18 }}>
            <TextInput placeholder='What do you want to eat?' style={ styles.wrapperSearch } />
            {/* <Image source={ require('./src/assets/icon/search.png') } style={{ position: 'absolute', top: 8, left: 12 }} /> */}
            <Image source={ props.img } style={{ position: 'absolute', top: 8, left: 12 }} />
          </View>
          <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
            {/* <Image source={require('./src/assets/icon/promo.png')} /> */}
            <Image source={props.icon} />
          </View>
        </View>
    )
}

const styles = StyleSheet.create({
    wrapperSearch: {
        borderWidth: 1,
        borderColor:'#E8E8E8',
        borderRadius: 25,
        height: 40,
        paddingLeft: 45,
        paddingRight: 20,
        fontSize: 13,
        backgroundColor: 'white'
    },
})