import React from 'react';
import { View, Text, FlatList, StyleSheet, Button, Image, Alert } from 'react-native';
import { DishItem } from '../App';

type Props = {
  menuItems: DishItem[];
  removeItem: (id: string) => void;
};

const HomeScreen: React.FC<Props> = ({ menuItems, removeItem }) => {
  const calculateAverage = (course: 'Starters' | 'Main' | 'Dessert') => {
    const filtered = menuItems.filter(item => item.course === course);
    if (filtered.length === 0) return 0;
    const total = filtered.reduce((sum, item) => sum + item.price, 0);
    return (total / filtered.length).toFixed(2);
  };

  const confirmRemove = (id: string, name: string) => {
    Alert.alert(
      "Remove Item",
      `Are you sure you want to remove "${name}"?`,
      [
        { text: "Cancel", style: "cancel" },
        { text: "Remove", style: "destructive", onPress: () => removeItem(id) }
      ]
    );
  };

  return (
    <View style={styles.container}>
      <Image source={require('../assets/images.png')} style={styles.logo} />
      <Text style={styles.welcome}>Welcome to Christoffel's Kitchen</Text>
        // This is the average price code
      <Text style={styles.subheading}>Average Prices</Text>
      <View style={styles.averagesContainer}>
        <View style={styles.averageCard}>
          <Text style={styles.averageLabel}>Starters</Text>
          <Text style={styles.averageValue}>R {calculateAverage('Starters')}</Text>
        </View>
        <View style={styles.averageCard}>
          <Text style={styles.averageLabel}>Main</Text>
          <Text style={styles.averageValue}>R {calculateAverage('Main')}</Text>
        </View>
        <View style={styles.averageCard}>
          <Text style={styles.averageLabel}>Dessert</Text>
          <Text style={styles.averageValue}>R {calculateAverage('Dessert')}</Text>
        </View>
      </View>

      <Text style={styles.subheading}>Chef's Menu ({menuItems.length} items)</Text>

      <FlatList
        data={menuItems}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.desc}>{item.description}</Text>
            <Text style={styles.course}>Course: {item.course}</Text>
            <Text style={styles.price}>Price: R{item.price}</Text>
            <View style={styles.buttonContainer}>
              <Button
                title="Remove"
                color="#cc0000"
                onPress={() => confirmRemove(item.id, item.name)}
              />
            </View>
          </View>
        )}
        contentContainerStyle={{ paddingBottom: 100 }}
      />
    </View>
  );
};


export default HomeScreen;

const styles = StyleSheet.create({
  container: { flex: 1, alignItems: 'center', backgroundColor: '#FA003F', paddingTop: 40 },
  heading: { fontSize: 24, fontWeight: 'bold', marginBottom: 12, textAlign: 'center' },
  logo: { width: 80, height: 80, marginBottom: 10 },
  header: { fontSize: 20, fontWeight: 'bold', color: 'red', textAlign: 'center', marginBottom: 16 },
  welcomeText: { fontSize: 18, fontWeight: 'bold', color: 'Black', marginBottom: 20 },
  button: { backgroundColor: '#007bff', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, marginBottom: 10 },
  buttonSecondary: { backgroundColor: '#6c757d', paddingVertical: 12, paddingHorizontal: 30, borderRadius: 10, marginBottom: 15 },
  buttonText: { color: '#fff', fontWeight: '600', fontSize: 16 },
  totalText: { fontSize: 16, fontWeight: 'bold', marginBottom: 5 },
  averageContainer: { width: '100%', flexDirection: 'row', justifyContent: 'space-around', marginBottom: 10, paddingHorizontal: 10 },
  avgCard: { backgroundColor: '#fff', borderRadius: 12, padding: 12, width: '30%', alignItems: 'center', shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  avgTitle: { fontSize: 14, color: '#777', marginBottom: 4, fontWeight: '600' },
  avgValue: { fontSize: 16, fontWeight: 'bold', color: '#28a745' },
  list: { width: '100%', paddingHorizontal: 20, marginBottom: 20 },
  card: { backgroundColor: '#fff', borderRadius: 12, padding: 16, marginVertical: 8, shadowColor: '#000', shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.1, shadowRadius: 4, elevation: 3 },
  cardHeader: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 },
  cardTitle: { fontSize: 18, fontWeight: 'bold', color: '#333' },
  cardPrice: { fontSize: 16, fontWeight: '600', color: '#28a745' },
  cardCourse: { fontSize: 14, color: '#555' },
  cardDescription: { fontSize: 14, color: '#666', marginTop: 4 },
  empty: { fontSize: 14, color: '#999', textAlign: 'center', marginTop: 20 },
  addButton: {
    backgroundColor: '#ff6600',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 10,
    marginBottom: 15,
  },
  addButtonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 16,
  },
  name: { fontSize: 16, fontWeight: 'bold' },
  desc: { fontSize: 14, marginVertical: 4 },
  course: { fontSize: 12, color: 'red', fontWeight: 'bold' },
  avgText: { fontWeight: 'bold', marginBottom: 6 },
 
  welcome: {
    textAlign: 'center',
    color: 'black',
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20
  },
  subheading: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 8,
    marginTop: 10,
  },
  averagesContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 15,
  },
  averageCard: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    marginHorizontal: 5,
    padding: 12,
    borderRadius: 10,
    alignItems: 'center',
    elevation: 2,
  },
  averageLabel: { fontWeight: 'bold', fontSize: 16 },
  averageValue: { fontSize: 16, color: '#333', marginTop: 4 },

 
  price: { fontSize: 16, color: 'green', marginTop: 4, fontWeight: 'bold' },
  buttonContainer: { marginTop: 10, alignSelf: 'flex-end' },
});



function setMenuItems(arg0: (prevItems: any) => any) {
  throw new Error('Function not implemented.');
}
