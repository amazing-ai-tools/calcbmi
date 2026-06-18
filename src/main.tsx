import React from 'react';
import ReactDOM from 'react-dom/client';
import { Activity, Calculator, HeartPulse, Ruler, Scale } from 'lucide-react';
import { calculateBmi, getBmiCategory } from './bmi';
import './styles.css';

const bugzeroAppKey = import.meta.env.VITE_BUGZERO_APP_KEY || '';
const bugzeroWidgetUrl =
  import.meta.env.VITE_BUGZERO_WIDGET_URL || 'https://bugzero.amazing-ai.tools/widget.js';

function ensureBugZeroWidget() {
  if (!bugzeroAppKey || document.querySelector('script[data-bugzero-widget]')) {
    return;
  }

  const script = document.createElement('script');
  script.src = bugzeroWidgetUrl;
  script.async = true;
  script.dataset.bugzeroWidget = 'true';
  script.dataset.appKey = bugzeroAppKey;
  document.body.appendChild(script);
}

function App() {
  const [heightCm, setHeightCm] = React.useState('175');
  const [weightKg, setWeightKg] = React.useState('72');

  React.useEffect(() => {
    ensureBugZeroWidget();
  }, []);

  const result = React.useMemo(() => {
    const height = Number(heightCm);
    const weight = Number(weightKg);

    if (!heightCm || !weightKg || height <= 0 || weight <= 0) {
      return null;
    }

    const bmi = calculateBmi({ heightCm: height, weightKg: weight });
    return {
      bmi,
      category: getBmiCategory(bmi),
    };
  }, [heightCm, weightKg]);

  return (
    <main className="app-shell">
      <section className="calculator-panel" aria-labelledby="page-title">
        <div className="intro">
          <span className="eyebrow">
            <HeartPulse size={16} />
            BMI calculator
          </span>
          <h1 id="page-title">Calculate your BMI</h1>
          <p>
            Enter your height and weight to estimate your body mass index. BMI is a
            general screening measure, not a diagnosis.
          </p>
        </div>

        <div className="workspace">
          <form className="input-card" aria-label="BMI inputs">
            <label>
              <span>
                <Ruler size={18} />
                Height
              </span>
              <div className="field-row">
                <input
                  inputMode="decimal"
                  min="1"
                  name="height"
                  onChange={(event) => setHeightCm(event.target.value)}
                  type="number"
                  value={heightCm}
                />
                <strong>cm</strong>
              </div>
            </label>

            <label>
              <span>
                <Scale size={18} />
                Weight
              </span>
              <div className="field-row">
                <input
                  inputMode="decimal"
                  min="1"
                  name="weight"
                  onChange={(event) => setWeightKg(event.target.value)}
                  type="number"
                  value={weightKg}
                />
                <strong>kg</strong>
              </div>
            </label>
          </form>

          <section className="result-card" aria-live="polite" aria-label="BMI result">
            <div className="result-icon">
              <Calculator size={30} />
            </div>
            {result ? (
              <>
                <span className="result-label">Your BMI</span>
                <strong className="result-number">{result.bmi.toFixed(1)}</strong>
                <h2>{result.category.label}</h2>
                <p>{result.category.description}</p>
              </>
            ) : (
              <>
                <span className="result-label">Waiting for data</span>
                <h2>Enter positive values</h2>
                <p>Use height in centimeters and weight in kilograms.</p>
              </>
            )}
          </section>
        </div>

        <aside className="note">
          <Activity size={18} />
          <p>
            Adult BMI categories do not account for age, pregnancy, muscle mass, or
            individual medical history. Speak with a qualified professional for personal
            health advice.
          </p>
        </aside>
      </section>
    </main>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<App />);
