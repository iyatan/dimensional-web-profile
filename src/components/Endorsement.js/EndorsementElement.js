import ElementCicle from "../Shared/ElementCircle";

const EndorsementElement = ({ name, colour }) => {
  return (
    <div className="bg-black h-[8.5vw] w-[6.95vw] p-4 border-2 border-white ">
      <ElementCicle colour={colour} />
      <div className="text-white text-center text-sm">{name}</div>
    </div>
  );
};
export default EndorsementElement;
