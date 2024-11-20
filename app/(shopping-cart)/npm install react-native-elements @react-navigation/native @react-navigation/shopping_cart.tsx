import React, { useState } from 'react';
import { View, Text, Button } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Item } from './components/Item';
import styles from './styles';

const ShoppingCartScreen = () => {
  const navigation = useNavigation();
  const [items, setItems] = useState([
    { id: 1, name: 'Cheese vegetable pizza', price: 239000 },
  ]);

  const handleCheckout = () => {
    // Logic xử lý thanh toán
    navigation.navigate('Success'); // Điều hướng đến màn hình thành công
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Shopping Cart</Text>
      {items.map(item => (
        <Item key={item.id} item={item} />
      ))}
      <Text style={styles.subtotal}>Subtotal: {items.reduce((total, item) => total + item.price, 0)}₫</Text>
      <Button title="Checkout" onPress={handleCheckout} color="#F26430" />
    </View>
  );
};

export default ShoppingCartScreen;