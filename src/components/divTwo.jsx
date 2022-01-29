import componentsImage from '../images/components.png'

function divTwo() {
  return (
    <div>
      <img src={componentsImage} alt="components" />
      <h3>Components</h3>
      <p>Build encapsulated components that manage their state</p>
    </div>
  );
}

export default divTwo;