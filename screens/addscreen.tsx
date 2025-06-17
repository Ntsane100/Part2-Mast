import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet,  Alert, FlatList } from 'react-native';
import { DishItem } from '../App';
import { Picker } from '@react-native-picker/picker';

type Props = {
  menuItems: DishItem[];
  setMenuItems: React.Dispatch<React.SetStateAction<DishItem[]>>;
};

const AddScreen: React.FC<Props> = ({ menuItems, setMenuItems }) => {
  const [name, setName] = useState('');
  const [desc, setDesc] = useState('');
  const [price, setPrice] = useState('');
  const [course, setCourse] = useState<'Starters' | 'Main' | 'Dessert'>('Starters');

  const suggestedItems: DishItem[] = [
    {
      id: 's1',
      name: 'Beef Lasagna',
      description: 'Classic Italian dish with layers of pasta, beef, and creamy cheese.',
      price: 95,
      course: 'Main',
    },
    {
      id: 's2',
      name: 'Garlic Bread',
      description: 'Crispy bread topped with garlic butter and herbs.',
      price: 30,
      course: 'Starters',
    },
    {
      id: 's3',
      name: 'Cheesecake',
      description: 'Creamy dessert topped with strawberry sauce.',
      price: 50,
      course: 'Dessert',
    },
  ];

  const addManualItem = () => {
    if (!name || !desc || !price || isNaN(Number(price))) {
      Alert.alert('Error', 'Please fill in all fields correctly.');
      return;
    }

    const newItem: DishItem = {
      id: Math.random().toString(),
      name,
      description: desc,
      price: parseFloat(price),
      course,
    };

    setMenuItems([...menuItems, newItem]);
    setName('');
    setDesc('');
    setPrice('');
    setCourse('Starters');
    Alert.alert('Item Added', `${newItem.name} was added to the menu.`);
  };

  const addSuggestedItem = (item: DishItem) => {
    const newItem = { ...item, id: Math.random().toString() };
    setMenuItems([...menuItems, newItem]);
    Alert.alert('Item Added', `${item.name} was added to the menu.`);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Suggested Menu Items</Text>
      <FlatList
        data={suggestedItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.suggestedCard}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text>Course: {item.course}</Text>
            <Text>Price: R{item.price}</Text>
            <Button title="Add to Menu" onPress={() => addSuggestedItem(item)} />
          </View>
        )}
      />

      <Text style={styles.heading}>Add Custom Item</Text>
      <TextInput
        style={styles.input}
        placeholder="Dish Name"
        value={name}
        onChangeText={setName}
      />
      <TextInput
        style={styles.input}
        placeholder="Description"
        value={desc}
        onChangeText={setDesc}
      />
      <TextInput
        style={styles.input}
        placeholder="Price"
        keyboardType="numeric"
        value={price}
        onChangeText={setPrice}
      />
      <Picker selectedValue={course} onValueChange={(value) => setCourse(value)}>
        <Picker.Item label="Starters" value="Starters" />
        <Picker.Item label="Main" value="Main" />
        <Picker.Item label="Dessert" value="Dessert" />
      </Picker>
      <Button title="Add Dish to Menu" onPress={addManualItem} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: '#FA003F' },
  title: { fontSize: 22, fontWeight: 'bold', marginBottom: 40 },
  input: {
    borderWidth: 5,
    borderColor: 'black',
    borderRadius: 8,
    padding: 10,
    marginBottom: 30,
    fontWeight: 'bold',
  },
  heading: { fontSize: 18, fontWeight: 'bold', marginBottom: 10, marginTop: 20 },
    suggestedCard: {
      backgroundColor: '#f0f0f0',
      padding: 14,
      borderRadius: 10,
      marginBottom: 10,
    },
    name: { fontWeight: 'bold', fontSize: 16, marginBottom: 4 },
});

export default AddScreen;


