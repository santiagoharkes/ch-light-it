function SidebarIcon({ src, title, endpoint, onClick }) {
  return (
    <div
      className={`flex flex-col gap-1 py-2 px-5 justify-center items-center ${
        endpoint ? "bg-gray-100" : ""
      } cursor-pointer w-full relative ${endpoint ? "z-20" : "z-50"}`}
      onClick={onClick}
    >
      {endpoint && (
        <div className="before:z-20 z-20 absolute w-10 h-10 right-0 -top-10 bg-gray-100 before:top-0 before:left-0 before:w-full before:h-full before:bg-white before:absolute before:rounded-br-full"></div>
      )}
      <img src={src} alt="" className="w-10 h-auto" />
      <p className="text-xs z-50">{title}</p>
      {endpoint && (
        <div className="after:z-20 z-20 absolute w-10 h-10 right-0 -bottom-10 bg-gray-100 after:top-0 after:left-0 after:w-full after:h-full after:bg-white after:absolute after:rounded-tr-full"></div>
      )}
    </div>
  );
}

export default SidebarIcon;
