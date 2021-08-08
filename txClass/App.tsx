import * as React from 'react';
import { Platform } from 'react-native';
import IosTxClass from './ios_app/TxClass'
import AndroidTxClass from './android_app/TxClass';

export default function App() {
  if(Platform.OS === 'android'){
    return (
      <AndroidTxClass></AndroidTxClass>
    )
  }else{
    return (
      <IosTxClass></IosTxClass>
    );
  }
}