import React from 'react';
import { AuthProvider } from './src/services/auth.firebase';
import Route from './src/navigation/route';
const App = () => {
  return (
    // <Provider store={store}>
    <AuthProvider>
      <Route />
    </AuthProvider>
    // </Provider>
  );
};

export default App;
