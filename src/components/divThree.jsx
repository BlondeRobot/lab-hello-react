import singleWayImage from '../images/single-way.png'

function divThree() {
  return (
    <div>
      <img src={singleWayImage} alt="singleWayImage" />
      <h3>Single-Way</h3>
      <p>A set of immutable values are passed to the components</p>
    </div>
  );
}

export default divThree;