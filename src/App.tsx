import { ToastContainer } from 'react-toastify';
import { LoadingContextProvider } from './hooks/useLoading';
import { AuthProvider } from './contexts/auth';
import { GlobalStyle } from './styles/global';
import { Routes } from './routes/routes';

function App(): React.ReactElement {
  return (
    <LoadingContextProvider>
      <ToastContainer style={{ fontSize: 15, fontFamily: 'sans-serif' }} />
      <AuthProvider>
        <Routes />
        <GlobalStyle />
      </AuthProvider>
    </LoadingContextProvider>
  );
}

export default App;
