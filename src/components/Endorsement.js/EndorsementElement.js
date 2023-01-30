import ElementCicle from "../Shared/ElementCircle";

const EndorsementElement = ({ name, colour }) => {
  return (
    <div className="bg-black h-[120px] w-[105px] text-center p-4 border-2 border-white ">
      <ElementCicle colour={colour} />
      <div className="text-white text-center text-xs">{name}</div>
    </div>
  );
};
export default EndorsementElement;
