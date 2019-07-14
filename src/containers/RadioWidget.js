import React, { Component } from 'react';
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  StyleSheet,
  LayoutAnimation,
  Platform,
  UIManager,
  Image,
  Dimensions,
} from 'react-native';
import Header from '../components/radioWidget/Header';
import Footer from '../components/radioWidget/Footer';
import PropTypes from 'prop-types';

/**
 * Radio widget *
 */
export default class RadioWidget extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: {},
      stations: [],
      width: Dimensions.get('window').width,
      height: Dimensions.get('window').height,
    };
    if (Platform.OS === 'android') {
      UIManager.setLayoutAnimationEnabledExperimental(true);
    }
  }

  //Since react-native does not support percentages in borderRadius
  //These are used to calculate image dimensions to make them response on orientation changes
  onLayout = ({
    nativeEvent: {
      layout: { x, y, width, height },
    },
  }) => {
    this.setState({
      width: width,
      height: height,
    });
  };

  selectListItem = item => {
    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
    const { onSelect } = this.props;
    this.setState(
      prev => {
        return { selected: prev.selected.uuid === item.uuid ? {} : item };
      },
      () => {
        onSelect(item);
      }
    );
  };

  increase = () => {
    const { onIncrease } = this.props;
    onIncrease(this.state.selected);
    //Do something
  };

  decrease = () => {
    const { onDecrease } = this.props;
    onDecrease(this.state.selected);
    //Do something
  };

  onSwitch = () => {
    const { onSwitch } = this.props;
    onSwitch();
    //Do something
  };

  onBack = () => {
    const { onBack } = this.props;
    onBack();
    //Do something
  };

  renderListItem = ({ item }) => {
    return (
      <View style={styles.listItemMain}>
        <View
          style={[
            styles.listItemExpanded,
            // eslint-disable-next-line react-native/no-inline-styles
            {
              height: this.state.selected.uuid === item.uuid ? null : 0,
            },
          ]}
        >
          <TouchableOpacity
            style={[
              styles.listItemExpandedButton,
              {
                height: this.state.width / 10,
                width: this.state.width / 10,
                borderRadius: this.state.width / 20,
              },
            ]}
            onPress={this.decrease}
          >
            <Text
              style={[
                styles.listItemExpandedButtonText,
                { fontSize: this.state.width / 12 },
              ]}
            >
              -
            </Text>
          </TouchableOpacity>
          <Image
            style={[
              styles.listItemExpandedImg,
              {
                height: this.state.width / 3,
                width: this.state.width / 3,
                borderRadius: this.state.width / 6,
              },
            ]}
            source={
              item.image
                ? { uri: item.image }
                : require('res/placeholder-img.png')
            }
            //Does not work on android devices in DEBUG mode.
            defaultSource={require('res/placeholder-img.png')}
          />
          <TouchableOpacity
            style={[
              styles.listItemExpandedButton,
              {
                height: this.state.width / 10,
                width: this.state.width / 10,
                borderRadius: this.state.width / 20,
              },
            ]}
            onPress={this.increase}
          >
            <Text
              style={[
                styles.listItemExpandedButtonText,
                { fontSize: this.state.width / 12 },
              ]}
            >
              +
            </Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity
          style={styles.listItem}
          onPress={() => {
            this.selectListItem(item);
          }}
        >
          <Text style={styles.listItemText}>{item.name}</Text>
          <Text style={[styles.listItemText, styles.listItemTextLeft]}>
            {item.mhz}
          </Text>
        </TouchableOpacity>
      </View>
    );
  };

  renderItemSeparator = () => <View style={styles.separator} />;

  renderListEmptyComponent = () => {
    const { emptyListPlaceholder } = this.props;
    return (
      <View style={styles.listEmptyComponent}>
        <Text style={styles.listEmptyComponentText}>
          {emptyListPlaceholder}
        </Text>
      </View>
    );
  };

  render() {
    const {
      stations,
      onSwitch,
      onBack,
      footerTitle,
      keepAspectRatio,
    } = this.props;
    return (
      <View
        style={[styles.main, keepAspectRatio ? { aspectRatio: 16 / 25 } : null]}
        onLayout={this.onLayout}
      >
        <Header onSwitch={onSwitch} onBack={onBack} />
        <FlatList
          extraData={this.state}
          data={stations}
          contentContainerStyle={styles.listContainer}
          renderItem={this.renderListItem}
          ItemSeparatorComponent={this.renderItemSeparator}
          ListEmptyComponent={this.renderListEmptyComponent}
          keyExtractor={item => item.uuid}
        />
        <Footer title={footerTitle} name={this.state.selected.name} />
      </View>
    );
  }
}

RadioWidget.defaultProps = {
  /** Called on @param item  */
  onSelect: item => console.info('RadioWidget. [onSelect] ', item),
  onDecrease: item => console.info('RadioWidget. [onDecrease] ', item),
  onIncrease: item => console.info('RadioWidget. [onIncrease] ', item),
  onSwitch: () => console.info('RadioWidget. [onSwitch]'),
  onBack: () => console.info('RadioWidget. [onBack]'),
  emptyListPlaceholder: 'No stations are available :(',
  footerTitle: 'Currently playing',
  keepAspectRatio: false,
};

RadioWidget.propTypes = {
  onSelect: PropTypes.func,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
  onSwitch: PropTypes.func,
  onBack: PropTypes.func,
  emptyListPlaceholder: PropTypes.string,
  footerTitle: PropTypes.string,
  keepAspectRatio: PropTypes.bool,
};

const styles = StyleSheet.create({
  main: {
    flex: 1,
    overflow: 'hidden',
    borderRadius: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 12,
    },
    shadowOpacity: 0.58,
    shadowRadius: 16.0,
    elevation: 24,
    minHeight: 250,
    minWidth: 150,
    margin: 5,
  },
  listItemMain: { paddingVertical: 20 },
  listEmptyComponentText: {
    alignSelf: 'stretch',
    color: '#A2ABBD',
    textAlign: 'center',
    textAlignVertical: 'center',
    flex: 1,
  },
  listEmptyComponent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  listItemExpandedButtonText: {
    color: '#A1ABBD',
    textAlign: 'center',
    textAlignVertical: 'center',
  },
  listItemExpandedButton: {
    justifyContent: 'center',
    alignItems: 'center',
    alignContent: 'center',
    aspectRatio: 1,
    borderColor: '#A1ABBD',
    borderWidth: 2,
  },
  listItemExpandedImg: {
    marginHorizontal: 15,
    borderWidth: 2,
    resizeMode: 'cover',
    borderColor: '#A1ABBD',
    padding: 20,
  },
  listItemExpanded: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    overflow: 'hidden',
    marginBottom: 15,
  },
  separator: {
    borderBottomColor: '#3E3E48',
    borderBottomWidth: 1,
  },
  listContainer: {
    backgroundColor: '#2A2A34',
    paddingHorizontal: 20,
    paddingVertical: 16,
    flexGrow: 1,
  },
  listItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  listItemTextLeft: { fontWeight: '700', textAlign: 'right' },
  listItemText: {
    fontWeight: '600',
    color: '#A2ABBD',
  },
});
