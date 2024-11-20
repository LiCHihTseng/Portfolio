import Item from "./Item";
import { PRODUCTS, RESOURCES, COMPANY, SUPPORT } from "./Menu";
import logo from "../../assets/img/Jason.svg";
const ItemsContainer = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16">
      <div>
        <img src={logo}></img>
      </div>
      <Item Links={PRODUCTS} title="PROJECT" />
      <Item Links={RESOURCES} title="CONTACT" />
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2
      text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span>© 2024 Li-Chih Tseng. All rights reserved.</span>
        <span>Terms · Privacy Policy</span>

      </div>
    </div>
  );
};

export default ItemsContainer;