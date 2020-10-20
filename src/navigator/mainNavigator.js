import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2152158Navigator from '../features/BlankScreen2152158/navigator';
import BlankScreen1152157Navigator from '../features/BlankScreen1152157/navigator';
import BlankScreen0152156Navigator from '../features/BlankScreen0152156/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2152158: { screen: BlankScreen2152158Navigator },
BlankScreen1152157: { screen: BlankScreen1152157Navigator },
BlankScreen0152156: { screen: BlankScreen0152156Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
