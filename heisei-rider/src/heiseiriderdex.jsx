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
      <div className="mobileSM:w-auto   w-screen h-screen relative  ">
        <div className="relative p-8 bg-[#faf9f6] tablet:w-[700px] tablet:m-auto h-screen rounded-lg">
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <div className="flex items-center gap-5 font-inter w-full">
              <div className="mobileSM:text-[20px] text-[64px] font-bold">KRiDEX</div>
              <div className="mobileSM:hidden tablet:block tablet:text-[16px] text-[36px] font-light">(Kamen Rider DEX)</div>
              <SearchBox
              className="mobileSM:w-full mobileSM:text-[12px] mobileSM:p-2 tablet:w-1/2 rounded-lg w-1/3 border-10 border-slate-300"
              placeholder="Rider Search... Standing by."
              onChangeHandler={onSearchChange}
            />
            </div>

            
          </div>
          <div
            id="krContent"
            className="grid mobileSM:grid-cols-1 tablet:grid-cols-3 grid-cols-5 gap-2 mobileSM:h-[600px] tablet:h-[330px] h-[500px] overflow-y overflow-x-hidden"
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
