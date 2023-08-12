import ReactDOM from 'react-dom/client';
import EventComponent from './events/EventComponent';

const App = () => {
  return (
    <div>
      <EventComponent />
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);

root.render(<App />);
