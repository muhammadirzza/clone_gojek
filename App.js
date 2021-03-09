/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  // ScrollView,
  View,
  Text,
  Image,
  TextInput,
  ScrollView
  // StatusBar,
} from 'react-native';

import {
  // Header,
  // LearnMoreLinks,
  Colors,
  // DebugInstructions,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import HomeIcon from './icon/home.png';
import HomeIconActive from './icon/home-active.png';
import OrderIcon from './icon/order.png';
import OrderIconActive from './icon/order-active.png';
import HelpIcon from './icon/help.png';
import HelpIconActive from './icon/help-active.png';
import InboxIcon from './icon/inbox.png';
import InboxIconActive from './icon/inbox-active.png';
import AccountIcon from './icon/account.png';
import AccountIconActive from './icon/account-active.png';
import GopayIcon from './icon/gopay.png';
import PayIcon from './icon/pay.png';
import TopUpIcon from './icon/topup.png';
import NearbyIcon from './icon/nearby.png';
import MoreIcon from './icon/more.png';
import GoRideIcon from './icon/go-ride.png';
import GoCarIcon from './icon/go-car.png';
import GoBlueBirdIcon from './icon/go-bluebird.png';
import GoSendIcon from './icon/go-send.png';
import GoDealsIcon from './icon/go-deals.png';
import GoPulsaIcon from './icon/go-pulsa.png';
import GoFoodIcon from './icon/go-food.png';
import GoMoreIcon from './icon/go-more.png';

const App = () => {
  const [bottomMenu, setBottomMenu] = useState([
    {
      text: 'Home',
      icon: [HomeIcon, HomeIconActive],
      status: 'active'
    },
    {
      text: 'Order',
      icon: [OrderIcon, OrderIconActive],
      status: ''
    },
    {
      text: 'Help',
      icon: [HelpIcon, HelpIconActive],
      status: ''
    },
    {
      text: 'Inbox',
      icon: [InboxIcon, InboxIconActive],
      status: ''
    },
    {
      text: 'Account',
      icon: [AccountIcon, AccountIconActive],
      status: ''
    }
  ])
  const [gopayMenu, setGopayMenu] = useState([
    {
      text: 'Pay',
      icon: PayIcon,
      status: 'active'
    },
    {
      text: 'Nearby',
      icon: NearbyIcon,
      status: ''
    },
    {
      text: 'Top Up',
      icon: TopUpIcon,
      status: ''
    },
    {
      text: 'More',
      icon: MoreIcon,
      status: ''
    }
  ])
  const [gojekMenuTop, setGojekMenuTop] = useState([
    {
      text: 'GO-RIDE',
      icon: GoRideIcon,
      status: 'active'
    },
    {
      text: 'GO-CAR',
      icon: GoCarIcon,
      status: ''
    },
    {
      text: 'GO-BLUEBIRD',
      icon: GoBlueBirdIcon,
      status: ''
    },
    {
      text: 'GO-SEND',
      icon: GoSendIcon,
      status: ''
    }
  ])
  const [gojekMenuBottom, setGojekMenuBottom] = useState([
    {
      text: 'GO-DEALS',
      icon: GoDealsIcon,
      status: ''
    },
    {
      text: 'GO-PULSA',
      icon: GoPulsaIcon,
      status: ''
    },
    {
      text: 'GO-FOOD',
      icon: GoFoodIcon,
      status: ''
    },
    {
      text: 'MORE',
      icon: GoMoreIcon,
      status: ''
    }
  ])

  const renderBottomMenu = () => {
    return bottomMenu.map(val => {
      return (
        <View style={styles.BottomTabContent} key={val.text}>
          <Image style={styles.BottomTabContentImage} source={val.status ? val.icon[1] : val.icon[0]} />
          <Text style={ val.status ? styles.BottomTabContentTextActive : styles.BottomTabContentText }>{val.text}</Text>
        </View>
      )
    })
  }

  const renderGopayMenu = () => {
    return gopayMenu.map(val => {
      return (
        <View style={styles.gopayBottomMenu} key={val.text}>
          <Image style={styles.gopayBottomIcon} source={val.icon} />
          <Text style={ styles.gopayBottomText }>{val.text}</Text>
        </View>
      )
    })
  }

  const renderGojekMenuTop = () => {
    return gojekMenuTop.map(val => {
      return (
        <View style={styles.gojekMenuWrapper} key={val.text}>
          <View style={styles.gojekMenuIcon}>
            <Image source={val.icon} />
          </View>
          <Text style={styles.gojekMenuText}>{val.text}</Text>
        </View>
      )
    })
  }

  const renderGojekMenuBottom = () => {
    return gojekMenuBottom.map(val => {
      return (
        <View style={styles.gojekMenuWrapper} key={val.text}>
          <View style={styles.gojekMenuIcon}>
            <Image source={val.icon} />
          </View>
          <Text style={styles.gojekMenuText}>{val.text}</Text>
        </View>
      )
    })
  }

  return (
    <View style={styles.wrapperHome}>
        <View style={styles.wrapperHomeContent}>
          {/* search bar */}
          <View style={{ marginHorizontal: 17, flexDirection: 'row', paddingTop: 15 }}>
            <View style={{ position: 'relative', flex: 1, marginRight: 18 }}>
              <TextInput placeholder='What do you want to eat?' style={ styles.wrapperSearch } />
              <Image source={ require('./icon/search.png') } style={{ position: 'absolute', top: 8, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./icon/promo.png')} />
            </View>
          </View>
          {/* gopay menu */}
          <View style={styles.gopayWrapper}>
            <View style={styles.gopayTop}>
              <Image source={GopayIcon} />
              <Text style={styles.gopayText}>Rp 50.000</Text>
            </View>
            <View style={styles.gopayBottom}>
              {
                renderGopayMenu()
              }
            </View>
          </View>
          <ScrollView>
            {/* gojek menu */}
            <View style={styles.gojekWrapper}>
              <View style={styles.gojekMenu}>
                {
                  renderGojekMenuTop()
                }
              </View>
              <View style={styles.gojekMenu}>
                {
                  renderGojekMenuBottom()
                }
              </View>
            </View>
            <View style={{ height: 17, marginTop: 20, backgroundColor: '#F2F2F4' }}></View>
            {/* go-news section */}
            <View>

            </View>
          </ScrollView>
        </View>
      <View style={styles.wrapperHomeBottomTab}>
        {
          renderBottomMenu()
        }
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapperHome: {
    flex: 1
  },
  wrapperHomeContent: {
    flex: 1,
    backgroundColor: 'white'
  },
  wrapperSearch: {
    borderWidth: 1,
    borderColor:'#E8E8E8',
    borderRadius: 25,
    height: 40,
    paddingLeft: 45,
    paddingRight: 20,
    fontSize: 13,
    backgroundColor: 'white'
  },
  gopayWrapper: {
    marginHorizontal: 17, 
    marginTop: 8
  },
  gopayTop: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 14,
    borderTopRightRadius: 4,
    borderTopLeftRadius: 4,
    backgroundColor: '#2C5FB8'
  },
  gopayText: {
    fontSize: 17,
    fontWeight: 'bold',
    color: 'white'
  },
  gopayBottom: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingTop: 20,
    paddingBottom: 14,
    borderBottomRightRadius: 4,
    borderBottomLeftRadius: 4,
    backgroundColor: '#2F65BD'
  },
  gopayBottomMenu: {
    flex: 1,
    alignItems: 'center'
  },
  gopayBottomIcon: {
    width: 36,
    height: 36
  },
  gopayBottomText: {
    fontSize: 13,
    marginTop: 15,
    fontWeight: 'bold',
    color: 'white'
  },
  gojekWrapper: {
    // marginHorizontal: 17,
    marginTop: 18,
    flexDirection: 'row',
    flexWrap: 'wrap'
  },
  gojekMenu: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 18,
    width: '100%'
  },
  gojekMenuWrapper: {
    alignItems: 'center',
    width: '25%'
  },
  gojekMenuIcon: {
    width: 58,
    height: 58,
    borderWidth: 1,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: '#EFEFEF'
  },
  gojekMenuText: {
    fontSize: 11,
    fontWeight: 'bold',
    textAlign: 'center',
    marginTop: 6
  },
  gojekBottomMenu: {
    // flex: 1,
    alignItems: 'center',
    marginTop: 10,
    width: 85
  },
  gojekBottomIcon: {
    borderWidth: 1,
    borderColor: '#545454',
    borderRadius: 10,
    width: 60,
    height: 60
  },
  gojekBottomText: {
    fontSize: 13,
    marginVertical: 5
  },
  wrapperHomeBottomTab: {
    height: 54,
    flexDirection: 'row',
    backgroundColor: 'white'
  },
  BottomTabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  BottomTabContentText: {
    fontSize: 10,
    marginTop: 4,
    color: '#545454'
  },
  BottomTabContentTextActive:{
    fontSize: 10,
    marginTop: 4,
    color: '#43AB4A'
  },
  BottomTabContentImage: {
    width: 26,
    height: 26,
  }
});

export default App;
