import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import homescreens from './screens/homescreens';
import addscreen from './screens/addscreen';
import HomeScreen from './screens/homescreens';
import AddScreen from './screens/addscreen';
import filterscreen from './screens/filterscreen';
import FilterScreen from './screens/filterscreen';

export type DishItem = {
  id: string;
  name: string;
  description: string;
  price: number;
  course: 'Starters' | 'Main' | 'Dessert';
};

const Tab = createBottomTabNavigator();

export default function App() {
  const [menuItems, setMenuItems] = useState<DishItem[]>([
    {
      id: '1',
      name: 'Grilled Chicken Alfredo',
      description: 'Tender grilled chicken breast served over fettuccine pasta with creamy Alfredo sauce.',
      price: 120,
      course: 'Main',
    },
    {
      id: '2',
      name: 'Chocolate Lava Cake',
      description: 'Warm chocolate cake with gooey molten center, served with vanilla ice cream.',
      price: 60,
      course: 'Dessert',
    },
    {
      id: '3',
      name: 'Spring Rolls',
      description: 'Crispy rolls filled with vegetables or meat, served with sweet chili sauce.',
      price: 45,
      course: 'Starters',
    },
    {
      id: '4',
      name: 'Caprese Skewers',
      description: 'Cherry tomatoes, fresh mozzarella, and basil leaves drizzled with balsamic glaze.',
      price: 55,
      course: 'Starters',
    },
    {
      id: '5',
      name: 'Beef Stir-Fry',
      description: 'Sliced beef sautéed with mixed vegetables in a savory soy and garlic sauce, served with rice or noodles.',
      price: 100,
      course: 'Main',
    },
    {
      id: '6',
      name: 'Vegetable Lasagna',
      description: 'Layers of pasta, mixed vegetables, ricotta cheese, and marinara sauce baked to perfection.',
      price: 130,
      course: 'Main',
    },
    {
      id: '7',
      name: 'Fruit Salad',
      description: 'A refreshing mix of seasonal fruits, sometimes served with a honey-lime dressing or whipped cream.',
      price: 80,
      course: 'Dessert',
    },
    {
      id: '8',
      name: 'Chicken Satay',
      description: 'Marinated chicken skewers grilled and served with a rich peanut dipping sauce.',
      price: 50,
      course: 'Starters',
    },
    {
      id: '9',
      name: 'Pan-Seared Salmon',
      description: 'Salmon fillet seared and served with garlic mashed potatoes and steamed greens.',
      price: 160,
      course: 'Main',
    },
    {
      id: '10',
      name: 'Crème Brûlée',
      description: 'A silky vanilla custard topped with a thin, crisp layer of caramelized sugar.',
      price: 80,
      course: 'Dessert',
    },
    {
      id: '11',
      name: 'Mini Quiches',
      description: 'Bite-sized pastries filled with egg, cheese, and veggies or bacon.',
      price: 35,
      course: 'Starters',
    },
    {
      id: '12',
      name: 'Spaghetti Bolognese',
      description: 'Classic pasta dish with a rich minced beef and tomato sauce.',
      price: 180,
      course: 'Main',
    },
    {
      id: '13',
      name: 'Panna Cotta',
      description: 'A creamy, chilled Italian dessert often served with berry sauce.',
      price: 50,
      course: 'Dessert',
    },
    {
      id: '14',
      name: 'Garlic Bread',
      description: 'Toasted baguette slices with garlic butter and herbs.',
      price: 45,
      course: 'Starters',
    },
    {
      id: '15',
      name: 'BBQ Ribs',
      description: 'Tender pork ribs glazed with smoky barbecue sauce, served with coleslaw',
      price: 200,
      course: 'Main',
    },
    {
      id: '16',
      name: 'Apple Pie',
      description: 'Warm spiced apples in a flaky crust, served with ice cream.',
      price: 70,
      course: 'Dessert',
    }


  ]);

  const removeMenuItem = (id: string) => {
    setMenuItems(prevItems => prevItems.filter(item => item.id !== id));
  };

  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="Home">
          {() => (
            <HomeScreen
              menuItems={menuItems}
              removeItem={removeMenuItem}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Add">
          {() => (
            <AddScreen
              menuItems={menuItems}
              setMenuItems={setMenuItems}
            />
          )}
        </Tab.Screen>
        <Tab.Screen name="Filter">
  {() => <FilterScreen menuItems={menuItems} />}
</Tab.Screen>
      </Tab.Navigator>
    </NavigationContainer>
  );
}

