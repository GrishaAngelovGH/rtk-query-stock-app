import Header from './components/Header'
import Layout from './components/Layout'

import { useGetStockDataQuery } from './api/stockData'

function App() {
  const { data } = useGetStockDataQuery()

  return (
    <div className="row g-0">
      <div className="col-md-12">
        <Layout header={<Header />}>
          {
            data && data.map(v => (
              <h1 key={v.id}>{JSON.stringify(v)}</h1>
            ))
          }
        </Layout>
      </div>
    </div>
  );
}

export default App;
