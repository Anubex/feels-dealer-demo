import SimpleLayout from '@/layouts/simple'
import ActivateSimPage from '@/pages/activate-sim'
import DoctorAppointmentPage from '@/pages/doctor-appointment'
import EServicePage from '@/pages/e-service'
// import ComingSoonPage from '@/pages/coming-soon'
import HomePage from '@/pages/home'
import InsurancePage from '@/pages/insurance'
import PackagePage from '@/pages/package'
// export const Page404 = lazy(() => import('@/pages/page-not-found'))
// export const ComingSoonPage = lazy(() => import('@/pages/coming-soon'))
// export const HomePage = lazy(() => import('@/pages/home'))
// export const TopUpPage = lazy(() => import('@/pages/topup'))
// export const PackagePage = lazy(() => import('@/pages/package'))
// export const ActivateSimPage = lazy(() => import('@/pages/activate-sim'))
import Page404 from '@/pages/page-not-found'
import TaxiPage from '@/pages/taxi'
import TopUpPage from '@/pages/topup'
// import { Suspense, lazy } from 'react'
import { Navigate, Outlet, useRoutes } from 'react-router-dom'

// ----------------------------------------------------------------------

export default function Router() {
  const routes = useRoutes([
    {
      path: '/',
      element: (
        <SimpleLayout>
          {/* <Suspense> */}
          <Outlet />
          {/* </Suspense> */}
        </SimpleLayout>
      ),
      children: [
        { element: <Navigate to="/home" />, index: true },
        { path: 'home', element: <HomePage /> },
        {
          path: 'top-up',
          element: <TopUpPage />,
        },
        {
          path: 'package',
          element: <PackagePage />,
        },
        {
          path: 'e-service',
          element: <EServicePage />,
        },
        {
          path: 'activate-sim',
          element: <ActivateSimPage />,
        },
        {
          path: 'doctor-appointment',
          element: <DoctorAppointmentPage />,
        },
        {
          path: 'taxi',
          element: <TaxiPage />,
        },
        {
          path: 'insurance',
          element: <InsurancePage />,
        },
        {
          path: '404',
          element: <Page404 />,
        },
      ],
    },
    {
      path: '*',
      element: <Navigate to="/404" replace />,
    },
  ])

  return routes
}
