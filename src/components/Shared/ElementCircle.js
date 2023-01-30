const ElementCicle = ({ colour }) => {
  return (
    <div
      className="rounded-full  border-[14px] h-10 w-10  mx-auto flex items-center justify-center"
      style={{ borderColor: `${colour}` }}
    ></div>
  );
};
export default ElementCicle;
