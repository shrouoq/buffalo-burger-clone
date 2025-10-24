import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import 'leaflet/dist/leaflet.css';
import './index.css'
import { Provider } from 'react-redux';
import store from './Toolkit/Store/store.jsx';



createRoot(document.getElementById('root')).render(

    <Provider store={store}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Provider>
)
