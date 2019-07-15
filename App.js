/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import RadioWidget from './src/components/radioWidget/RadioWidget';
import {View} from 'react-native';
const mockData = [
  {
    uuid: '3e351de8-455a-44f0-98b4-bfcad63d40a1',
    name: 'Putin FM',
    image: null,
    mhz: '66,6',
  },
  {
    uuid: '82e74315-c1c5-4176-8090-7e5eb6be1c53',
    name: 'Dribbble FM',
    image:
      'https://cdn.pixabay.com/photo/2017/03/25/17/55/color-2174045_960_720.png',
    mhz: '101,2',
  },
  {
    uuid: '383809c9-e8ce-4aa1-ae35-38b07149b473',
    name: 'Doge FM',
    image:
      'https://cdn.pixabay.com/photo2016/12/15/20/21/texture-1909992_960_720.jpg',
    mhz: '99,4',
  },
  {
    uuid: '63cbd2a6-d170-4ef6-9274-b021b2e20cd6',
    name: 'Ballads FM',
    image: null,
    mhz: '87,1',
  },
  {
    uuid: '54805887-74da-4363-8341-a9768d89a226',
    name: 'Maximum FM',
    image: null,
    mhz: '142,2',
  },
];
const App = () => {
  // EXAMPLE 1
  // return (
  // <View style={{flex: 1, justifyContent: 'center'}}>
  //   <View style={{flexDirection: 'row', flex: 1}}>
  //     <RadioWidget stations={mockData} />
  //     <RadioWidget />
  //   </View>
  //   <View style={{flex: 1, justifyContent: 'center'}}>
  //     <RadioWidget stations={mockData} />
  //   </View>
  // </View>
  // );
  // EXAMPLE 2
  return (
    <View style={{flex: 1, justifyContent: 'center'}}>
      <View style={{flexDirection: 'row', flex: 1}}>
        <RadioWidget stations={mockData} />
        <RadioWidget />
      </View>
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <RadioWidget keepAspectRatio stations={mockData} />
      </View>
    </View>
  );
  // EXAMPLE 3
  // return <RadioWidget stations={mockData} />;
};

export default App;
