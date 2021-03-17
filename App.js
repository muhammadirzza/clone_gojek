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
  ScrollView,
  TouchableOpacity,
  // StatusBar,
} from 'react-native';

import {
  // Header,
  // LearnMoreLinks,
  Colors,
  // DebugInstructions,
  // ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';

import HomeIcon from './src/assets/icon/home.png';
import HomeIconActive from './src/assets/icon/home-active.png';
import OrderIcon from './src/assets/icon/order.png';
import OrderIconActive from './src/assets/icon/order-active.png';
import HelpIcon from './src/assets/icon/help.png';
import HelpIconActive from './src/assets/icon/help-active.png';
import InboxIcon from './src/assets/icon/inbox.png';
import InboxIconActive from './src/assets/icon/inbox-active.png';
import AccountIcon from './src/assets/icon/account.png';
import AccountIconActive from './src/assets/icon/account-active.png';
import GopayIcon from './src/assets/icon/gopay.png';
import PayIcon from './src/assets/icon/pay.png';
import TopUpIcon from './src/assets/icon/topup.png';
import NearbyIcon from './src/assets/icon/nearby.png';
import MoreIcon from './src/assets/icon/more.png';
import GoRideIcon from './src/assets/icon/go-ride.png';
import GoCarIcon from './src/assets/icon/go-car.png';
import GoBlueBirdIcon from './src/assets/icon/go-bluebird.png';
import GoSendIcon from './src/assets/icon/go-send.png';
import GoDealsIcon from './src/assets/icon/go-deals.png';
import GoPulsaIcon from './src/assets/icon/go-pulsa.png';
import GoFoodIcon from './src/assets/icon/go-food.png';
import GoMoreIcon from './src/assets/icon/go-more.png';
import GoFoodBanka from './src/assets/dummy/go-food-banka.jpg';
import GoFoodGM from './src/assets/dummy/go-food-gm.jpg';
import GoFoodKFC from './src/assets/dummy/go-food-kfc.jpg';
import GoFoodOrins from './src/assets/dummy/go-food-orins.jpg';
import GoFoodPakBoss from './src/assets/dummy/go-food-pak-boss.jpg';

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
  const [gofoodMenu, setGofoodMenu] = useState([
    {
      text: 'Martabak Bangka',
      icon: GoFoodBanka,
      status: ''
    },
    {
      text: 'Bakmie GM AEON Mall',
      icon: GoFoodGM,
      status: ''
    },
    {
      text: 'KFC AEON Mall',
      icon: GoFoodKFC,
      status: ''
    },
    {
      text: 'Martabak Orins',
      icon: GoFoodOrins,
      status: ''
    },
    {
      text: 'Ayam Bakar Pak Boss',
      icon: GoFoodPakBoss,
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

  const renderGofoodMenu = () => {
    return gofoodMenu.map(val => {
      return (
        <View style={{ marginRight: 16 }} key={val.text}>
          <View style={{ width: 150, height: 150 }}>
            <Image source={val.icon} style={{ borderRadius: 8, height: undefined, width: undefined,  resizeMode: 'cover', flex: 1 }} />
          </View>
          <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>
            {val.text}
          </Text>
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
              <Image source={ require('./src/assets/icon/search.png') } style={{ position: 'absolute', top: 8, left: 12 }} />
            </View>
            <View style={{ width: 35, alignItems: 'center', justifyContent: 'center' }}>
              <Image source={require('./src/assets/icon/promo.png')} />
            </View>
          </View>
          <ScrollView>
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
            <View style={{ paddingTop: 16, paddingHorizontal: 17 }}>
              <View style={{ position: 'relative' }}>
                <Image source={require('./src/assets/dummy/sepak-bola.jpg')} style={{ height: 170, width: '100%',  borderRadius: 7 }} />
                <View style={{ height: 170, width: '100%',  borderRadius: 7, position: 'absolute', top: 0, left:0, backgroundColor:'black', opacity: 0.15 }} />
                <View style={{ height: 16, width: 60,  position: 'absolute', top: 16, left: 16 }}>
                  <Image source={require('./src/assets/logo/white.png')} style={{ height: undefined, width: undefined,  resizeMode: 'contain', flex: 1 }} />
                </View>
              </View>
              <View style={{ paddingTop: 16, paddingBottom: 20, borderBottomColor: '#E8E9ED', borderBottomWidth: 1 }}>
                <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C' }}>GO-NEWS</Text>
                <Text style={{ fontSize: 16, fontWeight: '400', color: '#7A7A7A', marginBottom: 11 }}>Dimas Drajad selamatkan penalti, Timnas U-23 kalahkan Brunei</Text>
                <TouchableOpacity style={{backgroundColor:'#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4}}>
                  <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>READ</Text>
                </TouchableOpacity>
              </View>
            </View>
            
            {/* internal info section */}
            <View style={{ paddingHorizontal: 17, paddingTop: 16 }}>
              <View style={{ height: 16, width: 60 }}>
                <Image source={require('./src/assets/logo/gojek.png')} style={{ marginLeft: -4, height: undefined, width: undefined,  resizeMode: 'contain', flex: 1 }} />
              </View>
              <Text style={{ marginBottom:20, marginTop: 15, fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' }}>Complete your profile</Text>
              <View style={{ flexDirection: 'row', marginBottom: 16 }}>
              {/* style={{ height: 16, width: 60 }} */}
              {/* style={{ height: undefined, width: undefined,  resizeMode: 'contain', flex: 1 }}  */}
                <View>
                  <Image source={require('./src/assets/dummy/facebook-connect.png')}/>
                </View>
                <View style={{ flex: 1, marginLeft: 16 }}>
                  <Text style={{ fontSize: 15, fontWeight: 'bold', color: '#4A4A4A' }}>Connect with facebook</Text>
                  <Text style={{ fontSize: 15, fontWeight: 'normal', color: '#4A4A4A', width: '70%' }}>Login faster without verification code</Text>
                </View>
              </View>
              <TouchableOpacity style={{backgroundColor:'#61A756', paddingVertical: 11, paddingHorizontal: 12, alignSelf: 'flex-end', borderRadius: 4}}>
                <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>CONNECT</Text>
              </TouchableOpacity>
              <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
            </View>

            {/* gofood banner */}
            <View style={{paddingHorizontal: 16}}>
              <View style={{position: 'relative'}}>
                <Image source={require('./src/assets/dummy/food-banner.jpg')} style={{ height: 170, width: '100%',  borderRadius: 7 }} />
                <View style={{ height: 170, width: '100%',  borderRadius: 7, position: 'absolute', top: 0, left:0, backgroundColor:'black', opacity: 0.2 }} />
                <View style={{ height: 16, width: 60,  position: 'absolute', top: 16, left: 16 }}>
                  <Image source={require('./src/assets/logo/white.png')} style={{ height: undefined, width: undefined,  resizeMode: 'contain', flex: 1 }} />
                </View>
                <View style={{position:'absolute', bottom: 0, left: 0, flexDirection: 'row', width: '100%', justifyContent: 'space-around', alignItems: 'center', paddingHorizontal: 16, paddingBottom: 16}}>
                  <View>
                    <Text style={{fontSize: 18, fontWeight: 'bold', color: 'white', marginBottom: 8}}>Free GO-FOOD Voucher</Text>
                    <Text style={{fontSize: 12, fontWeight: '400', color: 'white'}}>Quick, before they run out</Text>
                  </View>
                  <View style={{flex: 1, paddingLeft: 12}}>
                    <TouchableOpacity style={{backgroundColor:'#61A756', paddingVertical: 11, paddingHorizontal: 12, borderRadius: 4}}>
                      <Text style={{color: 'white', fontSize: 13, fontWeight: 'bold', textAlign: 'center'}}>GET VOUCHERS</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
              <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20}}></View>
            </View>

            {/* nearby go-food */}
            <View>
              <View style={{ height: 16, width: 60, marginLeft: 16 }}>
                <Image source={require('./src/assets/logo/go-food.png')} style={{ height: undefined, width: undefined,  resizeMode: 'contain', flex: 1 }} />
              </View>
              <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 16, marginTop: 15, paddingHorizontal: 16 }}>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#1C1C1C' }}>Nearby Restaurant</Text>
                <Text style={{ fontSize: 17, fontWeight: 'bold', color: '#61A756' }}>See All</Text>
              </View>
              <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ paddingLeft: 16 }}>
                {
                  renderGofoodMenu()
                }
              </ScrollView>
              {/* <View>
                <View>
                  <View style={{ width: 150, height: 150 }}>
                    <Image source={require('./src/assets/dummy/go-food-kfc.jpg')} style={{ borderRadius: 8, height: undefined, width: undefined,  resizeMode: 'cover', flex: 1 }} />
                  </View>
                  <Text style={{ fontSize: 16, fontWeight: 'bold', color: '#1C1C1C', marginTop: 12 }}>
                    KFC
                  </Text>
                </View>
              </View> */}
              <View style={{borderBottomColor: '#E8E9ED', borderBottomWidth: 1, marginTop: 16, marginBottom: 20, marginHorizontal: 16 }}></View>
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
