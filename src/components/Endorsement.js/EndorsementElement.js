import ElementCicle from "../Shared/ElementCircle";

const EndorsementElement = ({ name, colour }) => {
  return (
    <div className="bg-black h-[120px] w-[105px] p-4 border-2 border-white ">
      <ElementCicle colour={colour} />
      <div className="text-white text-center text-sm">{name}</div>
    </div>
  );
};
export default EndorsementElement;
