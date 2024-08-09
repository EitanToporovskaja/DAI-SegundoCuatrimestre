import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaView, Text } from 'react-native';
import style from  './style.js';
import Layout from '../../../../layout.js';

const A = () =>{
    return (
        <>
        <Layout>
            
        </Layout>
        <SafeAreaView style={style.container}>
        <Text>Lara</Text>
    </SafeAreaView>
    </>
      );
}    

export default A;