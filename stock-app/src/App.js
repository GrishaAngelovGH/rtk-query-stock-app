import Header from './components/Header'
import Layout from './components/Layout'
import StockCard from './components/StockCard'

import { useGetStockDataQuery } from './api/stockData'

function App() {
  const { data } = useGetStockDataQuery()

  return (
    <Layout header={<Header />}>
      <div className='row justify-content-center'>
        {
          data && data.map(v => (
            <StockCard
              key={v.id}
              name={v.name}
              currentValue={v.currentValue}
              previousValue={v.previousValue}
            />
          ))
        }
      </div>
    </Layout>
  );
}

export default App;
