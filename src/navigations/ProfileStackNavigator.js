import * as React from "react"
import { createStackNavigator } from '@react-navigation/stack'
import ProfileScreen from '../screens/main/ProfileStack/ProfileScreen'
import { Menu, ShoppingBag, Search } from '../library/icons'
import { colors } from '../res/palette'
import { globalStyles } from '../styles/global'

const ProfileStack = createStackNavigator()

function ProfileStackNavigator () {

  return (
    <ProfileStack.Navigator
      screenOptions={{
        headerLeft: () => <Menu size={24} style={{color: colors.black}} />,
        headerRight: () => <>
          <Search size={24} style={{color: colors.black, marginRight: 14}} />
          <ShoppingBag size={24} style={{color: colors.black}} />
        </>,
        headerLeftContainerStyle: {
          // borderWidth: 2,
          paddingHorizontal: 22
        },
        headerTitleStyle: {
          ...globalStyles.headline3
        },
        headerRightContainerStyle: {
          // borderWidth: 2,
          paddingHorizontal: 18,
          flexDirection: 'row',
          alignItems: 'center',
        }
      }}
    >
      <ProfileStack.Screen name="Profile" component={ProfileScreen} />
    </ProfileStack.Navigator>
  )
}

export default ProfileStackNavigator