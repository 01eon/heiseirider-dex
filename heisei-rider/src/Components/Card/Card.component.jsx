

const Card = ({ kr }) => {
    const { id, initialForm, rider, year } = kr;
    return(
            <div
              key={id}
              className="border-2 flex flex-col justify-center items-center gap-1 bg-[#fff4c4] rounded-lg hover:scale-105 duration-300"
            >
              <img
                src={initialForm}
                alt={ `KR${rider}`}
                className="w-auto flex justify-center "
              />
              <div className=" flex flex-col gap-0 justify-center items-center">
                <div className="font-bold text-center ">
                  <p>{rider}</p>
                  <span className="italic font-normal">({year})</span>
                </div>
                
              </div>
            </div>
    )
}


export default Card;