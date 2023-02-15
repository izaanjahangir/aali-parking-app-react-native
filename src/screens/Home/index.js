import React, {useState, useEffect} from 'react';
import {View, ScrollView, Text, Image, TouchableOpacity} from 'react-native';
import firestore from '@react-native-firebase/firestore';
import {useSelector, useDispatch} from 'react-redux';
import moment from 'moment';
import database from '@react-native-firebase/database';

import colors from '../../config/colors';
import messageBoxActions from '../../redux/messageBox/action';
import ParkingSlot from '../../components/ParkingSlot';
import MapBackground from '../../components/MapBackground';
import Button from '../../components/Button';
import MenuIcon from '../../assets/menu.png';
import style from './style';

const Home = props => {
  const slots = useSelector(store => store.config.slots);
  const user = useSelector(store => store.auth.user);
  const [selectedSlot, setSelectedSlot] = useState(null);
  const [bookedSlot, setBookedSlot] = useState(null);
  const [reservedSlots, setReservedSlots] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    const foundSlot = slots.find(item => item.bookedBy === user.id);
    const reservedSlots = slots.filter(
      item => item.bookedBy && item.bookedBy !== user.id,
    );
    setBookedSlot(foundSlot);
    setReservedSlots(reservedSlots);
  }, [slots]);

  const openDrawer = () => {
    props.navigation.openDrawer();
  };

  const handleParkHere = async () => {
    try {
      setLoading(true);

      const promises = [
        firestore().collection('slots').where('bookedBy', '==', user.id).get(),
        firestore().collection('slots').doc(selectedSlot).get(),
      ];
      const alreadyBookedSlots = await promises[0];
      const isSlotBooked = await promises[1];

      if (!alreadyBookedSlots.empty) {
        throw new Error('You have already booked slot. Please free it first');
      }

      if (isSlotBooked.data().bookedBy) {
        throw new Error('This slot is already booked by someone');
      }

      const slotData = isSlotBooked.data();

      if (!slotData) {
        throw new Error('Something went wrong');
      }

      const RTDataResponse = await database()
        .ref(`/SLOT NO ${slotData.code}= `)
        .once('value');
      const RTData = RTDataResponse.val();

      if (!RTData || Number(RTData) === 0) {
        throw new Error(
          'Sensor detected no object on this slot. Please first park here then try again',
        );
      }

      await firestore().collection('slots').doc(selectedSlot).set(
        {
          bookedBy: user.id,
          bookedTime: firestore.FieldValue.serverTimestamp(),
        },
        {merge: true},
      );
      setSelectedSlot(null);
    } catch (e) {
      dispatch(
        messageBoxActions.setMessage({type: 'error', message: e.message}),
      );
    }

    setLoading(false);
  };

  const handleFreeSlot = async () => {
    try {
      setLoading(true);

      await firestore()
        .collection('slots')
        .doc(bookedSlot.id)
        .set({bookedBy: null, bookedTime: null}, {merge: true});

      dispatch(
        messageBoxActions.setMessage({type: 'success', message: 'Slot freed'}),
      );
    } catch (e) {
      dispatch(
        messageBoxActions.setMessage({type: 'error', message: e.message}),
      );
    }

    setLoading(false);
  };

  const renderDate = bookedTime => {
    if (bookedTime?.toDate) {
      return moment(bookedTime?.toDate()).format('hh:mm A');
    }

    return '';
  };

  return (
    <MapBackground>
      <View style={style.container}>
        <View style={style.headingContainer}>
          <TouchableOpacity onPress={openDrawer}>
            <Image source={MenuIcon} style={style.menuIcon} />
          </TouchableOpacity>
          <Text style={style.heading}>Pick a parking slot</Text>
        </View>
        <ScrollView contentContainerStyle={{flexGrow: 1}}>
          <View style={[style.slotContainer, bookedSlot && {opacity: 0.15}]}>
            {slots.map(item => (
              <ParkingSlot
                onPress={() => {
                  if (item.id === selectedSlot) {
                    setSelectedSlot(null);
                  } else {
                    setSelectedSlot(item.id);
                  }
                }}
                disabled={
                  bookedSlot ||
                  reservedSlots.some(reservedS => reservedS.id === item.id)
                }
                reserved={reservedSlots.some(
                  reservedS => reservedS.id === item.id,
                )}
                selected={selectedSlot === item.id}
                key={item.id}>
                {item.label}
              </ParkingSlot>
            ))}
          </View>
        </ScrollView>
        {bookedSlot && (
          <View style={style.parkedMainContainer}>
            <View style={style.parkedContainer}>
              <Text style={style.yourParkedText}>
                You have parked in {bookedSlot.label}
              </Text>
              <Text style={style.yourParkedDate}>
                Time: {renderDate(bookedSlot.bookedTime)}
              </Text>
              <Text style={style.reminderText}>
                Remember to free your slot after you are done
              </Text>
            </View>
          </View>
        )}
        <View style={style.buttonContainer}>
          {!bookedSlot && (
            <Button
              loading={loading}
              disabled={!selectedSlot}
              onPress={handleParkHere}
              containerStyle={{width: '100%'}}>
              I PARK HERE
            </Button>
          )}
          {bookedSlot && (
            <Button
              loading={loading}
              onPress={handleFreeSlot}
              containerStyle={{width: '100%', backgroundColor: colors.RED}}>
              Free your slot
            </Button>
          )}
        </View>
      </View>
    </MapBackground>
  );
};

export default Home;
