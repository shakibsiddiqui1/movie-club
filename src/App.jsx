import { Provider } from 'react-redux'
import appStore from './utils/redux/appStore'
import {Outlet} from 'react-router-dom'

function App() {
  return (
    <>
      <Provider store={appStore}>
        <Outlet/>
      </Provider>
    </>
  )
}

export default App
