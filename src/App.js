import './App.css';
import MyComponent from './MyComponent';
import Counter from './Counter';

const App = () => {
  return (
    <div>
    <Counter />
      <MyComponent name="react" favoriteNumber={7}>손흥민</MyComponent>
    </div>
  )
}

export default App;
