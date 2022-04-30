import logo from './logo.svg';
import './App.css';
import Addition from './addition';

const App = () => {

  const styles = {
    container: {
      backgroundColor: "lightblue"
      , border: "dashed red"
      , padding: "20px"
      , color: "blue"
    }
  }

  return (
    <div 
      style={styles.container}
    >
      <h1>Project 2</h1>
      <h2>Adding Two Numbers</h2>
      <Addition numberOne={5}numberTwo={6}/>
      <Addition numberOne={25}numberTwo={75}/>
      <Addition numberOne={2798}numberTwo={3892}/>
    </div>
  );
}

export default App;
