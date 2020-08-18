import React from 'react';
import { AppearanceProvider } from 'react-native-appearance'; 
import { Text } from 'react-native';
 

const App = (): React.ReactElement => {
 
  return (
    <React.Fragment> 
      <AppearanceProvider> 
        <Text > Home Application </Text>
      </AppearanceProvider>
    </React.Fragment>
  );
};
 


export default App;