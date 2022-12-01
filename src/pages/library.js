import React from 'react';
import { ScrollView, StyleSheet, Image, Text } from 'react-native';

const Library = () => {
    return (
        <ScrollView style={styles.scrollView}>
            <Image style={styles.emptyImg} source={require('../assets/empty-lib.jpg')} />
            <Text style={styles.oswald}>Your Library is Empty.</Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    scrollView: {
      backgroundColor: '#fff',
    }, emptyImg: {
        height: 300,
        width: 300,
        resizeMode: 'contain',
        backgroundColor: 'red'
    }, oswald: {
        fontFamily: 'Oswald-Regular'
    }
});

export default Library;