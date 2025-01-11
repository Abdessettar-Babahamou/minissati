import NavBar from "./NavBar";
import hederImage from "../assets/header-image.png";
 

function Header({ children }: { children: React.ReactNode }) {
  return (
    <div className=" w-full min-h-screen relative  ">
      <img
        src={hederImage}
        className="w-full h-full flex absolute top-0 left-0 right-0  bottom-0 z-10
     
    "
      />
      <div
        className="flex absolute top-0 left-0 right-0  bottom-0 z-10
    w-full h-full bg-secondary/60"
      ></div>
      <NavBar />
      {children}
    </div>
  );
}

export default Header;
