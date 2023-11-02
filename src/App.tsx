import { createRoot } from 'react-dom/client';
import './styles.scss';

const App = () => {
  return (
    <div>
      <button>test</button>
    </div>
  )
};

const root = createRoot(document.getElementById('root'));
root.render(<App />)