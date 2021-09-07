import { Layout } from './components/Layout';
import { Landing } from './containers/Landing';

import '../src/assets/styles/App.scss';

function App() {
  return (
    <div>
      <Layout>
        <Landing />
      </Layout>
    </div>
  );
}

export default App;
