import { useEffect, useState } from "react";
import CardList from "./Components/CardList/CardList.component";
import SearchBox from "./Components/SearchBox/SearchBox.component";
import Footer from "./Components/footer";

import "./App.css";
import { krDataJSON } from "./data/heisei";

const KRDex = () => {
  const [searchField, setSearchField] = useState('');
  const [krData] = useState(krDataJSON);
  const [filteredRiders, setFilteredRiders] = useState(krData);

  useEffect(() => {
    const newFilteredRiders = krData.filter((kr) => {
      return kr.rider.toLocaleLowerCase().includes(searchField);
    });
    setFilteredRiders(newFilteredRiders);

  }, [krData, searchField]);

  const onSearchChange = (event) => {
    console.log('onsearch')
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
    
  };

  

  return (
    <>
      <div className="w-screen h-screen relative p-5 flex justify-center ">
        <div className=" p-8 rounded-lg w-screen">
          <div className="flex flex-col justify-center items-center gap-2">
            <div className="font-old-ganstriad text-[3rem]  text-white p-4 rounded-md">
              Neo Heisei Kamen Riders
            </div>
            <SearchBox
              className="rounded-lg px-2 py-1 my-3 w-1/3"
              placeholder="Rider Search... Standing by."
              onChangeHandler={onSearchChange}
            />
          </div>
          <div
            id="krContent"
            className="grid grid-cols-5 gap-2 h-[500px] overflow-y overflow-x-hidden"
          >
            <CardList krDataJSON={filteredRiders}/>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};
export default KRDex;
