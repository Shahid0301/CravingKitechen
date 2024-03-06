// import styles from './Cover.module.css';
function Cover() {
  return (
    <div className="cover">
      <img src="./../public/Images/logo.png" className="logo"></img>
      <span className="headline">CravingsKitchen: Savor Every Flavor, Feed Every Craving!</span>

      <div className="imageContainer">
        <div className="overlay"></div>
        <img src="./../public/Images/cover.jpg" className="image"></img>
      </div>
    </div>
  );
}
export default Cover;
