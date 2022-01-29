import declarativeImage from '../images/declarative.png'

function divOne() {
  return (
    <div>
      <img src={declarativeImage} alt="declarative" />
      <h3>Declarative</h3>
      <p>Reacti makes it painless to create interactive UIs</p>
    </div>
  );
}

export default divOne;