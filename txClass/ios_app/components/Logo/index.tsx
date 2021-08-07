import React from "react"; 
import { Image } from 'react-native';
import styles from './styles';
interface IProps {

}
const Logo:React.FC<IProps> = () => {
  return (
    <Image
      style={styles.logo}
      source={require('../../assets/img/logo.png')}
    />
  )
}
export default Logo;