import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const Stats = ({totalTodo, compeleteCount}) => {
  return (
    <View>
      {totalTodo === 0 ? (
        <View style={style.infoBox1}>
          <Text style={style.Text1}>Todo</Text>
          <Text style={style.Text2}>keep it up</Text>
        </View>
      ) : (
        <View style={style.infoBox}>
          <View style={style.infoText}>
            <Text style={style.text1}>Todo Done</Text>
            <Text style={style.text2}>keep it up</Text>
          </View>
          <View style={style.stats}>
            <Text style={style.statsNumber}>
              {compeleteCount}/{totalTodo}
            </Text>
          </View>
        </View>
      )}
    </View>
  );
};

const style = StyleSheet.create({
  infoBox1: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    height: 150,
    alignItems: 'center',
    justifyContent: 'center',
  },
  infoBox: {
    borderWidth: 1,
    borderColor: '#fff',
    borderRadius: 30,
    paddingVertical: 20,
    paddingHorizontal: 15,
    height: 150,
    color: '#f1f1f1',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  infoText: {color: '#f1f1f1'},
  text1: {color: '#f1f1f1', fontSize: 24, fontWeight: 600},
  text2: {color: '#f1f1f1', fontSize: 12, fontWeight: 400, letterSpacing: 4},
  Text1: {color: '#f1f1f1', fontSize: 40, fontWeight: 600},
  Text2: {color: '#f1f1f1', fontSize: 20, fontWeight: 400, letterSpacing: 4},
  stats: {
    backgroundColor: '#ff5730',
    width: 100,
    height: 100,
    borderRadius: 50,
    alignItems: 'center',
    justifyContent: 'center',
  },
  statsNumber: {color: '#0d0d0d', fontSize: 30, fontWeight: 900},
});
export default Stats;
