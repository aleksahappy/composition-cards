import './App.css';
import {nanoid} from 'nanoid';
import img from './img.svg'
import Card from './components/Card';

const data = [{
  id: nanoid(),
  img: img,
  title: 'Card title',
  descr: 'Some quick example text to build on the card title and make up the bulk of the card\'s content.'
}, {
  id: nanoid(),
  title: 'Special title treatment',
  descr: 'With supporting text below as a natural lead-in to additional content.'
}]

export default  function App() {
  return (
    <div className="App">
      {data.map(item => {
        return (
          <Card key={item.id} {...item}>
            <h5 className="card-title">{item.title}</h5>
            <p className="card-text">{item.descr}</p>
          </Card>
        )
      })}
    </div>
  );
}
