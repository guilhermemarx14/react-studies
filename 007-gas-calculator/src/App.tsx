import { FormEvent, useState } from 'react';
import './App.css';

import logoImg from './assets/logo.png';
/*
  when alcoholPrice / gasolinePrice is greater then 0.7 then is better to use gasoline
*/
interface InfoProps {
  title: string;
  gasoline: number | string;
  alcohol: number | string;
  ratio: number;
}
function App() {
  const [gasolineInput, setGasolineInput] = useState(0);
  const [alcoholInput, setAlcoholInput] = useState(0);
  const [info, setInfo] = useState<InfoProps>();
  function calculate(event: FormEvent) {
    event.preventDefault();

    if (gasolineInput == 0) {
      setInfo({
        title: 'Gasoline must not be zero',
        gasoline: monetaryFormat(0),
        alcohol: monetaryFormat(0),
        ratio: 0,
      });
      return;
    }

    const ratio = alcoholInput / gasolineInput;

    if (ratio <= 0.7) {
      setInfo({
        title: 'Its better to use Alcohol!',
        gasoline: monetaryFormat(gasolineInput),
        alcohol: monetaryFormat(alcoholInput),
        ratio: ratio,
      });
      return;
    }

    setInfo({
      title: 'Its better to use Gasoline!',
      gasoline: monetaryFormat(gasolineInput),
      alcohol: monetaryFormat(alcoholInput),
      ratio: ratio,
    });
  }

  function monetaryFormat(num: number) {
    return num.toLocaleString('en-US', {
      style: 'currency',
      currency: 'USD',
    });
  }

  return (
    <div>
      <main className="container">
        <img className="logo" src={logoImg} />
        <h1 className="title"> What's the best choice? </h1>

        <form className="form" onSubmit={calculate}>
          <label>Alcohol price</label>
          <input
            className="input"
            type="number"
            placeholder="0"
            min="1"
            step="0,01"
            required
            value={alcoholInput}
            onChange={(event) => setAlcoholInput(Number(event.target.value))}
          ></input>

          <label>Gasoline price</label>
          <input
            className="input"
            type="number"
            placeholder="0"
            min="1"
            step="0,01"
            required
            value={gasolineInput}
            onChange={(event) => setGasolineInput(Number(event.target.value))}
          ></input>

          <input value="Calculate" type="submit" className="button" />
        </form>

        {info && Object.keys(info).length > 0 && (
          <section className="result">
            <h2 className="result-title">{info?.title}</h2>

            <span>Alcohol: {info?.alcohol}</span>
            <span>Gasoline: {info?.gasoline}</span>
            <span>Ratio: {info?.ratio}</span>
          </section>
        )}
      </main>
    </div>
  );
}

export default App;
