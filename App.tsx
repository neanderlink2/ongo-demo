import 'react-native-gesture-handler';
import React, {useRef} from 'react';
import {View, StatusBar, ActivityIndicator, Platform} from 'react-native';

import {Provider as PaperProvider, DarkTheme} from 'react-native-paper';
import {Provider} from 'react-redux';
import SnackbarWrapper from './src/components/SnackbarWrapper';
import {NavigationContainer} from '@react-navigation/native';
import RootNavigator from './src/routes';
import configureStore from './src/store';
import {PersistGate} from 'redux-persist/integration/react';
import {LoadingScreen} from './src/components/LoadingScreen';

declare const global: {HermesInternal: null | {}};
const {store, persistor} = configureStore();

const App = () => {
  const containerRef = useRef<any>();
  return (
    <PaperProvider theme={DarkTheme}>
      <Provider store={store}>
        <PersistGate loading={<LoadingScreen />} persistor={persistor}>
          <View style={{flex: 1, backgroundColor: 'transparent'}}>
            <SnackbarWrapper>
              {Platform.OS === 'ios' && <StatusBar barStyle="default" />}
              <NavigationContainer ref={containerRef}>
                <RootNavigator />
              </NavigationContainer>
            </SnackbarWrapper>
          </View>
        </PersistGate>
      </Provider>
    </PaperProvider>
  );
};

export default App;
