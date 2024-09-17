import { useEffect, useState } from "react";
import CardList from "./Components/CardList/CardList.component";
import SearchBox from "./Components/SearchBox/SearchBox.component";
import Footer from "./Components/footer";

import "./App.css";
import { krDataJSON } from "./data/heisei";

const KRDex = () => {
  const [searchField, setSearchField] = useState("");
  const [krData] = useState(krDataJSON);
  const [filteredRiders, setFilteredRiders] = useState(krData);

  useEffect(() => {
    const newFilteredRiders = krData.filter((kr) => {
      return kr.rider.toLocaleLowerCase().includes(searchField);
    });
    setFilteredRiders(newFilteredRiders);
  }, [krData, searchField]);

  const onSearchChange = (event) => {
    console.log("onsearch");
    const searchFieldString = event.target.value.toLocaleLowerCase();
    setSearchField(searchFieldString);
  };

  return (
    <>
      <div className="mobileSM:w-auto mobileSM:m-3 mobileSM:p-3 w-screen bg-[#faf9f6] flex flex-col gap-3 grow-0 tablet:w-[700px] tablet:mx-auto mobileSM:min-h-[300px] tabletSM:min-h-[500px] laptop:min-h-[750px] laptop:w-3/4 rounded-lg ">
        <div className="flex flex-col justify-start items-center gap-2 w-full px-2">
          <div className="flex items-center gap-5 font-inter w-full">
            <div className="mobileSM:text-[20px] laptop:text-[36px] font-bold">
              KRiDEX
            </div>
            <div className="mobileSM:hidden tablet:block tablet:text-[16px] laptop:text-[20px] font-light">
              (Kamen Rider DEX)
            </div>
            <SearchBox
              className="mobileSM:w-full mobileSM:text-[12px] mobileSM:p-2 tablet:w-1/2 laptop:text-[16px] laptop:w-5/12 rounded-lg w-1/3 border-10 border-slate-300"
              placeholder="Rider Search... Standing by."
              onChangeHandler={onSearchChange}
            />
          </div>
        </div>

        <div className="grid mobileSM:grid-cols-1 tablet:grid-cols-3 laptop:grid-cols-5 gap-2 overflow-x-hidden">
          <CardList krDataJSON={filteredRiders} />
        </div>

      </div>

      <div className="relative m-0">
          <Footer />
      </div>


      {/* <div className="relative mobileSM:w-auto w-screen px-8 pt-8  bg-[#faf9f6] tablet:w-[700px] tablet:m-auto laptop:w-3/4 rounded-lg ">
          <div className="flex flex-col justify-center items-center gap-2 p-2">
            <div className="flex items-center gap-5 font-inter w-full">
              <div className="mobileSM:text-[20px] laptop:text-[48px] font-bold">
                KRiDEX
              </div>
              <div className="mobileSM:hidden tablet:block tablet:text-[16px] laptop:text-[20px] font-light">
                (Kamen Rider DEX)
              </div>
              <SearchBox
                className="mobileSM:w-full mobileSM:text-[12px] mobileSM:p-2 tablet:w-1/2 laptop:text-[16px] laptop:w-5/12 rounded-lg w-1/3 border-10 border-slate-300"
                placeholder="Rider Search... Standing by."
                onChangeHandler={onSearchChange}
              />
            </div>
          </div>
          <p>Images sourced from  <a className="text-blue-400 hover:underline" href="https://kamenrider.fandom.com/wiki/Kamen_Rider_Wiki" target="_blank" rel="noreferrer">Kamen Rider Wiki (Fandom)</a></p>

          <div
            id="krContent"
            className="grid mobileSM:grid-cols-1 tablet:grid-cols-3 gap-2  tablet:h-[330px] laptop:grid-cols-5 laptop:h-auto mobileSM:overflow-y mb-8 overflow-x-hidden"
          >
            <CardList krDataJSON={filteredRiders} />
          </div>
          
      </div> */}
    </>
  );
};
export default KRDex;
