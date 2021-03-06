import { Link } from "react-router-dom";

/**?
 * <div className={"flex bg-red-300"}>
            <Link className="" to="/">
              <h1 className={"m-4"}>Topline Stats</h1>
            </Link>
          </div>
          <div className={"flex"}>
            <Link className="m-4" to="/about">
              <h1>About</h1>
            </Link>
            <Link className="m-4" to="/contact">
              <h1>Contact</h1>
            </Link>
          </div>
 */

function Navbar() {
    return (
      <div className="lg:w-3/4 md:7/8 w-full mx-auto ">
        <div className={"flex"}>
          <div className={"grid grid-cols-2 grid-row-1 w-full"}>
            <div className={"m-4 place-self-start"}>
              <Link className="" to="/">
                <h1 className="text-center lg:text-2xl text-lg hcolor titlefontstyle">Topline Stats</h1>
              </Link>
            </div>
            <div className={"place-self-end"}>
              <div className={"m-4"}>
                <Link to="/contact">
                  <h1 className="text-center lg:text-2xl text-lg hcolor titlefontstyle">Contact</h1>
                </Link>
              </div>
            </div>
          </div>
        </div>
        <hr/>
      </div>
    );
  }
  
  export default Navbar;