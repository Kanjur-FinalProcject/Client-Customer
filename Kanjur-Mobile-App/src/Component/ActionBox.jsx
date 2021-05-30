import React, { useState } from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { IconButton } from 'react-native-paper';
import { heightPercentageToDP, widthPercentageToDP } from 'react-native-responsive-screen';
import ButtonView from '../Component/Button'

export default function ActionBox({navigation}) {
    const [shadowOffsetWidth, setShadowOffsetWidth] = useState(8);
    const [shadowOffsetHeight, setShadowOffsetHeight] = useState(6);
    const [shadowRadius, setShadowRadius] = useState(25);
    const [shadowOpacity, setShadowOpacity] = useState(1);
    
    function ScanMethod() {
        console.log('coba')
    }

    function payment() {
        console.log('bayar');
    }

    function history() {
        console.log('riwayat');
    }

    function checkout() {
        console.log('checkout');
    }

    return (
        <View style={[
        styles.actionBox,
            {
            shadowOffset: {
                width: shadowOffsetWidth,
                height: -shadowOffsetHeight
            },
            shadowOpacity,
            shadowRadius
            }
        ]}>
            <ButtonView method={ScanMethod} icon="barcode-scan" title="Scan"/>
            <ButtonView method={payment} icon="cash" title="Bayar"/>
            <ButtonView method={history} icon="history" title="Riwayat"/>
            <ButtonView method={checkout} icon="logout" title="Keluar"/>
        </View>
    );
}

const styles = StyleSheet.create({  
  actionBox: {
    backgroundColor: '#fff',
    shadowColor: 'black',
    position: 'absolute',
    height: heightPercentageToDP('16%'),
    width: widthPercentageToDP('90%'),
    left: widthPercentageToDP('5%'),
    top: heightPercentageToDP('21%'),
    borderRadius: 5,
    flexDirection: 'row',
    textAlign: 'center',
    justifyContent: 'space-evenly'
  },
  button: {

  },
  icon : {
    margin: 0,
    padding: 0
  },
  buttonText: {
      color: '#0095DA',
      fontFamily: 'Roboto',
      fontSize: widthPercentageToDP('4%'),
      textAlign: 'center',
      padding: 0,
      margin: 0
  }
});
