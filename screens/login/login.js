import React from 'react'
import { View, Text, Image, TextInput, TouchableOpacity, ImageBackground } from 'react-native'
import styles from './style'

function Login() {
    return (
        <View style={styles.container}>

            <View style={styles.subContainer}>
                <Image style={styles.img2} source={require('../../assets/images/image2.jpg')} />
            </View>

            <View style={styles.contentContainer}>
                <Text style={styles.titleHeading}>Sign in to your Account</Text>
                <TextInput placeholder="Email Address" style={styles.textInput} />
                <TextInput secureTextEntry={true} placeholder="Password" style={styles.textInput2} />
                <TouchableOpacity style={styles.loginBtn}>
                    <Text style={styles.btnText}>Login</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.colorContainer}>
            <ImageBackground style={styles.backImg} source={require('../../assets/images/snap.jpg')} />
                {/* <LinearGradient
        colors={['#114BDF','rgba(17, 75, 223, 0)']}
        start={{ x: 0.7, y: 0 }}
        location={[0, 1]}
        style={styles.LinearGradient1}

      />
         <LinearGradient
        colors={['#F8991D','rgba(248, 153, 29, 0)']}
        start={{ x: 0.7, y: 0 }}
        location={[-0.0677, 1]}
        style={styles.LinearGradient2}

      />
         <LinearGradient
        colors={['#04E056','rgba(23, 152, 71, 0)']}
        start={{ x: 0.7, y: 0 }}
        location={[0, 1]}
        style={styles.LinearGradient3}

      />
         <LinearGradient
        colors={['#DD3D26','rgba(221, 61, 38, 0)']}
        start={{ x: 0.7, y: 0 }}
        location={[0, 1]}
        style={styles.LinearGradient4}

      /> */}
               

            </View>



        </View>
    )

}

export default Login