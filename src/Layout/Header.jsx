import logo from "../images/react.png";

function MainHeader() {
  return (
    <div className="pt-2 py-1 pl-2" style={{ backgroundColor: "black" }}>
      <img
        src={logo}
        style={{ height: "35px", verticalAlign: "top" }}
        alt=""
      ></img>
      <span className="h2 pt-4 text-white-50">React Course - TaskOPedia</span>
    </div>
  );
}

const subHeaderStyle = {
  color: "blueViolet",
  backgroundColor: "lightGray",
};

function SubHeader() {
  return (
    <p style={subHeaderStyle} className="text-center">
      This will be an Exciting Course.
    </p>
  );
}

const Header = () => {
  return (
    <div>
      <MainHeader />
      <SubHeader />
    </div>
  );
};
export default Header;
