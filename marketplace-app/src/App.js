import './App.scss';
import HeaderComponent from './components/HeaderComponent';
import ItemSectionComponent from './components/ItemSectionComponent';

function App() {
  return (
    <div className="body">
      <div className='AppHeaderComponent'>
      <HeaderComponent/>
      </div>
      <div className='AppItemSectionComponent'>
        <ItemSectionComponent/>
      </div>
    </div>
  );
}

export default App;
