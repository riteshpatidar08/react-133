//component => function which returns ui
import './App.css';

function App() {
  const firstName = 'ritesh';
  const styles = { color: 'red' };
  // { color: 'blue' }
  return (
    <div>
    <h1 style={{ color: 'red', fontSize: '50px' }} className="heading">
        {firstName}
      </h1>  
      <p style={styles}>hello this is react</p>
      <div className="container"></div>
      <input type="number" maxLength={5} />
    </div>
  );
}

export default App;

//single page application , components , jsx(javascript xml)
//jo bhi javascript likhni hain wo {} curly braces k andar hogi
//object key : value color : 'red';
//component => function which returns ui
import './App.css';

function App() {
  const containerStyles = { display: 'flex', gap: '20px' };

  return (
    <div style={containerStyles}>
      <Card title="Spiderman" img= "https://cdn.district.in/movies-assets/images/cinema/image-(29)-598ac6b0-6a24-11f1-8579-1756095b1930.jpg" language="Hindi"/>
      <Card title="Oak Stree" img="https://cdn.district.in/movies-assets/images/cinema/THE-END-OF-OAK-STREET-f53f28d0-8fd1-11f1-98a8-65a4b6994ecd.jpg" language="English" />
      <Card title="Insidious" img="https://cdn.district.in/movies-assets/images/cinema/Insidious--6b2529d0-37d7-11f1-840e-63804c65ce25.jpg" language="English" />
    </div>
  );
}

export default App;

//single page application , components , jsx(javascript xml)
//jo bhi javascript likhni hain wo {} curly braces k andar hogi
//object key : value color : 'red';
function Card({title , img , language}) {
  const cardStyles = { border: '2px solid gray', padding: '2px' };
  return (
    <div style={cardStyles}>
      <img
        src={img}
        width={200}
      />
      <h1>{title}</h1>
      <h4>Language : {language}</h4>
    </div>
  );
}

