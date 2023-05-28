import './App.css';
import Layout from './Layout';

function App() {
  
  return (
    <Layout>
      <main>
      <form>
        <input type="text" placeholder="First name" />
        <input type="text" placeholder="Last name" />
        <input type="text" placeholder="Email" />
        <button type="submit">Submit</button>
      </form>
    </main>
     
  </Layout>
  );
}

export default App;
