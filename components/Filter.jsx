import {View, StyleSheet, TouchableOpacity, Text} from 'react-native';
import React from 'react';

const Filter = ({filter, setFilter}) => {
  return (
    <View style={styles.filterContainer}>
      {['All', 'Active', 'Completed'].map(f => (
        <TouchableOpacity
          key={f}
          onPress={() => setFilter(f)}
          style={[
            styles.filterButton,
            filter === f && styles.activeFilterButton,
          ]}>
          <Text
            style={[
              styles.filterText,
              filter === f && styles.activeFilterText,
            ]}>
            {f}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  );
};
const styles = StyleSheet.create({
  filterContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    marginVertical: 10,
    marginHorizontal: 10,
    gap: 10,
  },
  filterButton: {
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 10,
    backgroundColor: '#1e1e1e',
  },
  activeFilterButton: {
    backgroundColor: '#ff5730',
  },
  filterText: {
    fontSize: 16,
    color: '#c5c6d05e',
  },
  activeFilterText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default Filter;
