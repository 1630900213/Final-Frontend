import { BrowserRouter, Routes as ReactRoutes, Route } from 'react-router-dom'
import Layout from './Layout'
import { Login as ClientLogin } from './pages/clients'
import { Login as BackofficeLogin } from './pages/backoffice'
const Routes = () => {
  return (
    <BrowserRouter>
      <Layout>
        <ReactRoutes>
          <Route path="/clients">
            <Route path="login" element={<ClientLogin />} />
          </Route>
          <Route path="/backoffice" element={<Layout />}>
            <Route path="blogs" element={<BackofficeLogin />} />
          </Route>
        </ReactRoutes>
      </Layout>
    </BrowserRouter>
  )
}
export default Routes
