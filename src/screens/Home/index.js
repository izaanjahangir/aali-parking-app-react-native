import React, {useState} from 'react';
import {View, ScrollView, Text} from 'react-native';

import style from './style';
import ParkingSlot from '../../components/ParkingSlot';
import MapBackground from '../../components/MapBackground';
import Button from '../../components/Button';
import colors from '../../config/colors';

const Home = props => {
  const [selectedIndex, setSelectedIndex] = useState(4);
  const reservedSlots = [5, 8, 2];

  return (
    <MapBackground>
      <View style={style.container}>
        <View style={style.headingContainer}>
          <Text style={style.heading}>Pick a parking slot</Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={style.slotContainer}>
            {new Array(30).fill(0).map((_, index) => (
              <ParkingSlot
                reserved={reservedSlots.includes(index)}
                selected={selectedIndex === index}
                key={index}>
                Slot {index + 1}
              </ParkingSlot>
            ))}
          </View>
        </ScrollView>
        <View style={style.parkedMainContainer}>
          <View style={style.parkedContainer}>
            <Text style={style.yourParkedText}>You have parked in slot 05</Text>
            <Text style={style.yourParkedDate}>Time: 12:00pm</Text>
            <Text style={style.reminderText}>
              Remember to free your slot after you are done
            </Text>
          </View>
        </View>
        <View style={style.buttonContainer}>
          {/* <Button onPress={() => alert('asd')} containerStyle={{width: '100%'}}>
            I PARK HERE
          </Button> */}
          <Button
            onPress={() => alert('asd')}
            containerStyle={{width: '100%', backgroundColor: colors.RED}}>
            Free your slot
          </Button>
        </View>
      </View>
    </MapBackground>
  );
};

export default Home;
