import { useGetStockDataQuery } from './api/stockData'

function App() {
  const { data } = useGetStockDataQuery()

  return (
    <div className="row g-0">
      <div className="col-md-6">
        {
          data && data.map(v => (
            <h1 key={v.id}>{JSON.stringify(v)}</h1>
          ))
        }
      </div>
    </div>
  );
}

export default App;
