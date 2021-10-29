import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
} from 'react-native';

import BackgroundImage from './assets/img/accueil1.jpg';

import { useFonts } from 'expo-font';

import SourceSansProLight from './assets/fonts/SourceSansPro-Light.ttf';
import SourceSansProRegular from './assets/fonts/SourceSansPro-Regular.ttf';
import SourceSansProBold from './assets/fonts/SourceSansPro-Bold.ttf';

import { Icon } from 'react-native-elements';



import * as Animatable from 'react-native-animatable';

 export default function App()  {
  const [loaded] = useFonts({
    SourceSansProLight,
    SourceSansProRegular,
    SourceSansProBold,
  });

  if (!loaded || !BackgroundImage) {
    return <Text>Loading...</Text>;
  }
  return (
      
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View style={{ flex: 1 }}>
          <Image
            style={{ flex: 1, width: null, marginTop: -0 }}
            source={BackgroundImage}
          />
        </View>
        <Animatable.Text
          style={styles.titleText}
          animation='fadeInUp'
          delay={1200}
        >
          Phadoc
        </Animatable.Text>
        
        <View style={styles.bottomView}>
          <Text style={styles.loginText}>Veillez vous Enregistrer</Text>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='person'
              type='ionicons'
              color='#5352ed'
            />
            <TextInput
              style={styles.input}
              placeholder='Nom et Prenom'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            
          </View>

          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='email'
              type='ionicons'
              color='#5352ed'
            />
            <TextInput
              style={styles.input}
              placeholder='Votre Email'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color='#5352ed'
            />
            <TextInput
              style={styles.input}
              placeholder='Mots de passe'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='phone'
              type='ionicons'
              color='#5352ed'
            />
            <TextInput
              style={styles.input}
              placeholder='Numero Telephone'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='phone'
              type='ionicons'
              color='#5352ed'
            />
            <TextInput
              style={styles.input}
              placeholder='Numero Telephone'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='phone'
              type='ionicons'
              color='#5352ed'
            />
            <TextInput
              style={styles.input}
              placeholder='Numero Telephone'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
            
          </View>
         
          
          <TouchableOpacity style={styles.loginButton} >
            <Text style={styles.loginButtonText}>Envoyer</Text>
          </TouchableOpacity>
          <Text style={styles.registerText}>
            Merci de visité notre Application
          </Text>
        </View>
      </View>
    </TouchableWithoutFeedback>
   
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  titleText: {
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    fontSize: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },

   
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
    backgroundColor: '#fff',
    opacity: 0.95,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 10,
    paddingBottom: 20,
    paddingHorizontal: 20,
  },
  loginText: {
    fontFamily: 'SourceSansProBold',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f1f3f6',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#5352ed',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  loginButtonText: {
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    alignSelf: 'center',
    fontSize: 18,
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    fontFamily: 'SourceSansProBold',
    fontSize: 16,
    color: '#5352ed',
  },
});