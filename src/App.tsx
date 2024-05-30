import { RouterProvider } from 'react-router-dom'
import { appRouter } from './routes/routes'
import { ThemeProvider } from './components/theme/ThemeProvider'
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {ReactQueryDevtools} from '@tanstack/react-query-devtools'

const queryClient = new QueryClient({
  defaultOptions: { queries: { retry: false } },
})

const App = () => {
  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider defaultTheme='dark' storageKey='vite-ui-theme'>
      <RouterProvider router={appRouter} />
      </ThemeProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}
export default App
