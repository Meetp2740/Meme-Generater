import logo from './logo.svg';
import './App.css';
import Random from './com/Random';
import Search from './com/Search';


function App() {
  return (
    <div className='bg-slate-600 h-full py-6 flex flex-col items-center'>
      <h1 className='bg-white p-2 flex justify-center text-4xl font-bold w-5/6 rounded-lg mt-7'>Random Gifs</h1>
      <Random/>
      <Search/>
    </div>
  );
}

export default App;
