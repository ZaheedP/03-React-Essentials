import Header from './components/Header/Header.jsx';
import CoreConcepts from './components/CoreConcept/CoreConcepts.jsx';
import Examples from './components/Examples.jsx';


function App() {
  console.log("Hello World! - ", EXAMPLES);

  return (
    <div>
      <Header />
      <main>
        <h2>Time to get started!</h2>
      </main>
      <CoreConcepts />
      <Examples />
    </div>
  );
}

export default App;
