import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { capitalLetter } from "../../../utils/capitalLetter";
import Spinner from "../../spinner/Spinner";

function SidebarMenu({ endpoint, setEndpoint, data, step, setStep }) {
  return (
    <div
      className={`relative h-full bg-gray-100 ease-in-out duration-300 z-20 ${
        endpoint ? "min-w-fit" : "min-w-0 w-0"
      }`}
    >
      <div className={`overflow-hidden h-full`}>
        {data.isLoading && (
          <div className="h-full flex flex-col justify-center items-center">
            <Spinner />
          </div>
        )}

        {data.isSuccess && (
          <>
            {step.step === 1 && (
              <div className="p-5 flex flex-col gap-5">
                <h2 className="text-2xl font-bold text-gray-500">
                  {capitalLetter(endpoint)}
                </h2>
                <div
                  className={`max-w-[400px] w-[400px] flex flex-col gap-2 h-full`}
                >
                  {data.data.map((item, index) => (
                    <div
                      key={`${item.name}-${index}`}
                      className="bg-white p-3 rounded-lg flex justify-between items-center cursor-pointer hover:border-gray-300 border-transparent border ease-in-out duration-300"
                      onClick={() => setStep({ step: 2, data: item })}
                    >
                      <p>{item.name}</p>
                      <div className="w-5 h-5 flex justify-center items-center">
                        <ChevronRightIcon />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step.step === 2 && (
              <div className="p-5 flex flex-col gap-5">
                <h2
                  className="text-sm text-gray-500 cursor-pointer"
                  onClick={() =>
                    setStep({
                      step: 1,
                      data: null,
                    })
                  }
                >{`< ${capitalLetter(endpoint)}`}</h2>
                <h2 className="text-2xl font-bold text-gray-500">
                  {step.data.name}
                </h2>
                <div
                  className={`max-w-[400px] w-[400px] flex flex-col gap-2 h-full`}
                >
                  <div className="grid grid-cols-3 gap-5">
                    {step.data.items.map((item, index) => (
                      <div
                        key={`${item.name}-${index}`}
                        className="flex flex-col gap-1"
                      >
                        <div className="w-full min-h-[100px] h-[100px] rounded-lg overflow-hidden">
                          <img
                            src={item.img}
                            alt=""
                            className="w-full h-full object-cover hover:scale-110 ease-in-out duration-300 bg-gradient-to-r from-purple-500 to-pink-500"
                          />
                        </div>
                        <p className="text-center">{item.name}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </>
        )}
      </div>

      <SidebarMenuArrow active={endpoint} setActive={setEndpoint} />
    </div>
  );
}

export default SidebarMenu;

function SidebarMenuArrow({ active, setActive }) {
  return (
    <div
      onClick={() => {
        console.log("Click en arrow");
        setActive(false);
      }}
      className={`cursor-pointer ${active ? "block" : "hidden"}`}
    >
      <div
        className={`absolute w-[40px] h-[100px] bg-gray-100 top-[50%] left-[99%] rounded-tr-lg rounded-br-lg`}
        style={{
          transform: "translate(0px, -50%) perspective(70px) rotateY(45deg)",
        }}
      ></div>

      <div className="absolute w-[30px] h-[30px] top-[50%] left-[99%] translate-x-0 translate-y-[-50%] p-1 flex justify-center items-center">
        <img src="/activo.png" alt="" />
      </div>
    </div>
  );
}
