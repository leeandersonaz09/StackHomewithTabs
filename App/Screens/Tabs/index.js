import React from 'react';
import { BottomNavigation, Text } from 'react-native-paper';
import Tab1 from './Tabs1';
import Tab2 from './Tabs2';
import Tab3 from './Tabs3';

const HomeRoute = () => <Tab1/>;

const AlbumsRoute = () => <Tab2/>;

const RecentsRoute = () => <Tab3/>;

const Tabs = () => {
  const [index, setIndex] = React.useState(0);
  const [routes] = React.useState([
    { key: 'home', title: 'Home', icon: 'home', },
    { key: 'albums', title: 'Albums', icon: 'album' },
    { key: 'recents', title: 'Recents', icon: 'history' },
  ]);

  const renderScene = BottomNavigation.SceneMap({
    home: HomeRoute,
    albums: AlbumsRoute,
    recents: RecentsRoute,
  });

  return (
    <BottomNavigation
      navigationState={{ index, routes }}
      onIndexChange={setIndex}
      renderScene={renderScene}
      activeColor="#ffcc00"
      inactiveColor="#fff"
      barStyle={{ backgroundColor: '#f57' }}
    />
  );
};

export default Tabs;