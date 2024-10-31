import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Stack } from 'expo-router';
import { ThemeProvider, DarkTheme, DefaultTheme } from '@react-navigation/native';
import { useColorScheme } from '@/components/useColorScheme';

export default function ShoppingCartLayout() {
    const colorScheme = useColorScheme();

    return (
        <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
            <Stack>
                <Stack.Screen name="ShoppingCart" component={ShoppingCartScreen} options={{ headerShown: false }} />
                <Stack.Screen name="ProductDetails" component={ProductDetailsScreen} options={{ presentation: 'modal' }} />
            </Stack>
        </ThemeProvider>
    );
}

function ShoppingCartScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Shopping Cart screen</Text>
        </View>
    );
}

function ProductDetailsScreen() {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>This is the Product Details screen</Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        fontSize: 18,
    },
});