// JS library for currences, convertor, etc...
import Money from 'dinero.js';
import { useEffect, useState } from "react";
import RatesPromise from './data/rates';

import './App.css';

// gets 2 values, default currency & the convert data (PROMISE)
Money.globalExchangeRatesApi = {
  currency: 'EUR',
  endpoint: RatesPromise
}

let CurrencySelector = ({ rates, onChange }) => (
  <select onChange={onChange}>
    {rates.map((rate, index) => <option key={index}>{rate}</option>)}
  </select>
)

function App() {
  // useState so we can alter these rates values
  let [rates, setRates] = useState([]);

  // values to convert:
  let [originCurrency, setOriginCurrency] = useState([]);
  let [targetCurrency, setTargetCurrency] = useState([]);
  let [finalAmount, setFinalAmount] = useState([]);
  let [originalAmount, setOriginalAmount] = useState([]);

  useEffect(() => {
    // operaciones con efectos secundarios,
    // [] so the hook fires when app has shown
    let ratesData;
    RatesPromise.then((value) => {
      ratesData = value;

      // JSON to array
      let ratesArray = Object.keys(ratesData.rates);
      setRates(ratesArray);
    });
  }, [])

  let convert = async () => {
    let amount = Money({
      amount: parseInt(originalAmount) * 100,
      currency: originCurrency
    });

    let result = await amount.convert(targetCurrency);
    setFinalAmount(result.toFormat());
  }

  return (
    <div className="container">
      <div className="card">
        <h1>Money Converter</h1>
        <div className="flex-container">
          <div>
            <p>From {originCurrency}:</p>
            <CurrencySelector
              onChange={(ev) => setOriginCurrency(ev.target.value)}
              rates={rates} />
          </div>
          <div>
            <p>To {targetCurrency}:</p>
            <CurrencySelector
              onChange={(ev) => setTargetCurrency(ev.target.value)}
              rates={rates} />
          </div>
        </div>
        <div>
          <input
            onChange={(ev) => setOriginalAmount(ev.target.value)}
            type="number" className="form-control" placeholder="Rate is..." />
        </div>
        <button onClick={convert} className="app-button">SUBMIT</button>
        <h1>
          That is: {finalAmount}
        </h1>
      </div>
    </div>
  );
}

export default App;
