
import Message from './components/Message';
import { GoogleOAuthProvider } from '@react-oauth/google';
import AccountProvider from './context/AccountProvider';
import UserProvider from './context/UserProvider';
function App() {
  const clientId = '824882573141-35q5ebtrh91mvtnp627lo825eib5t39d.apps.googleusercontent.com';
 
    return (
      <GoogleOAuthProvider clientId={clientId}>
        <UserProvider>
          <AccountProvider>
              <Message/>
          </AccountProvider>
        </UserProvider>
      </GoogleOAuthProvider>
    );
}

export default App;
