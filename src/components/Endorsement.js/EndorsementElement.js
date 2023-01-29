const EndorsementElement = ({ name, colour }) => {
  return (
    <div className="bg-black h-[8.5vw] w-[6.95vw] p-4 border-2 border-white ">
      <div
        className="rounded-full  border-[14px] h-10 w-10  mx-auto flex items-center justify-center"
        style={{ borderColor: `${colour}` }}
      ></div>
      <div className="text-white text-center text-sm">{name}</div>
    </div>
  );
};
export default EndorsementElement;
