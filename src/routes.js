/* eslint-disable prettier/prettier */
import {createAppContainer, createSwitchNavigator} from 'react-navigation';

import Main from './pages/Main';
import NewEntry from './pages/NewEntry';
import Report from './pages/Report';
import BalancePanelChart from './componets/BalancePanel/BalancePanelChart';
import BalancePanel from './componets/BalancePanel';

const Routes = createAppContainer(
    createSwitchNavigator(
    {
      Main,
      NewEntry,
      Report,
      BalancePanelChart,
      BalancePanel,
    },
    {
      initialRouteName: 'Main',
      backBehavior: 'order',
    },
  ),
);

export default Routes;
