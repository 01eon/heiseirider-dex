

const Card = ({ kr }) => {
    const { id, initialForm, rider, year, epCount, movies } = kr;
    return(
            <div
              key={id}
              className="border-2 flex flex-col justify-center items-center gap-1 bg-white rounded-lg "
            >
              <img
                src={initialForm}
                alt={ `KR${rider}`}
                className="w-[250px] flex justify-center hover:scale-105 duration-300"
              />
              <div className="flex flex-col gap-0 justify-center items-center mb-2">
                <div className="font-bold mt-2">
                  {rider}{" "}
                  <span className="italic font-normal">({year})</span>
                </div>
                <div className="">Episodes: {epCount}</div>
                <div className="">Movies: {movies}</div>
              </div>
            </div>
    )
}


export default Card;