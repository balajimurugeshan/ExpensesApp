
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Head from './expenses/Head';
// import Detail from './expenses/detail';
// import Transaction from './expenses/transaction';
import Parent from './expenses/parent';

function App() {
  return (
    <div className="App">
      <Head></Head>
      {/* <Detail></Detail>
      <Transaction></Transaction> */}
      <Parent></Parent>
    </div>
  );
}

export default App;
