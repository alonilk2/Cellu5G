import React, { Component } from "react";
import {
  Defaultheet,
  StatusBar,
  View,
  Text,
  ScrollView,
  Image,
  Pressable,
  Linking,
} from 'react-native';
import Animation from '../Animation';
import FontAwesome from "react-native-vector-icons/Ionicons";
import { Default } from "../styles/Default";

const InfoWindow=(props)=> {
    return (<Animation style={{
  height: '100%',
  width: '100%',
  position: 'absolute',
  zIndex: 5,
  elevation: 30
}} animationState={props.infoWindow ? 0 : 1} page={this}>
        <View style={Default.infoContainer}>
          <Pressable onPress={e => props.CloseInfoWindow()}>
            <FontAwesome name={"arrow-back-outline"} size={30} />
          </Pressable>
          <ScrollView>
            <View style={{
        alignItems: 'center'
      }}>
             <Image source={require('../../images/logo.png')} style={{
          width: 150,
          height: 150,
          marginTop: '1%'
        }} />
              <Text style={Default.textInfoBold}>Cellu App</Text>
              <Text style={Default.textInfo}>Version: 3.1.0</Text>
              <Text style={Default.textInfo}> 
              {`           
המידע המוצג באפליקציה זו נאסף 
מתוך מאגרי המידע של 
Govmap.gov.il
Data.gov.il
אין מפתחי האפליקציה אחראיים על
נכונות ועדכניות המידע המוצג למשתמש.
השימוש באפליקציה ובמידע המוצג בה הינו באחריות המשתמש בלבד.

ליצירת קשר:`}
              </Text>
              <Pressable onPress={e => Linking.openURL('mailto:alonilk2@gmail.com')} style={Default.BtnStyleEmail}>
                <Text style={Default.txtBtnAddr}>Email Me</Text>
              </Pressable>
              <Image source={require('../../images/abdev.png')} style={Default.abdev} />
            </View>
          </ScrollView>
        </View>
      </Animation>);
}
export default InfoWindow