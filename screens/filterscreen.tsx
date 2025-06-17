import React, { useState } from 'react';
import { View, Text, StyleSheet, FlatList, Button } from 'react-native';
import { DishItem } from '../App';

type Props = {
  menuItems: DishItem[];
};

const FilterScreen: React.FC<Props> = ({ menuItems }) => {
  const [selectedCourse, setSelectedCourse] = useState<'Starters' | 'Main' | 'Dessert' | null>(null);

  const filteredItems = selectedCourse
    ? menuItems.filter(item => item.course === selectedCourse)
    : menuItems;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Filter Menu By Course</Text>
      <View style={styles.filterContainer}>
        <Button title="All" onPress={() => setSelectedCourse(null)} />
        <Button title="Starters" onPress={() => setSelectedCourse('Starters')} />
        <Button title="Main" onPress={() => setSelectedCourse('Main')} />
        <Button title="Dessert" onPress={() => setSelectedCourse('Dessert')} />
      </View>

      <FlatList
        data={filteredItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text>{item.description}</Text>
            <Text style={styles.price}>Price: R{item.price} </Text>
            <Text style={styles.course}>Course: {item.course}</Text>
          </View>
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, padding: 16, backgroundColor: '#FA003F' },
  title: { fontSize: 20, fontWeight: 'bold', marginBottom: 16 },
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  card: {
    backgroundColor: '#f9f9f9',
    padding: 14,
    marginVertical: 8,
    borderRadius: 10,
    elevation: 2,
  },
  name: { fontSize: 21, fontWeight: 'bold' },
  price: {fontSize: 20, fontWeight: 'bold', color: 'green'},
  course: {fontSize: 16, fontWeight: 'bold'},
});

export default FilterScreen;