import EndorsementElement from "./EndorsementElement";

const EndorsementContainer = ({ endorsement }) => {
  return (
    <div className=" flex overflow-x-auto sm:flex sm:flex-row sm:flex-wrap">
      {endorsement.map((item, index) => {
        return (
          <div className="m-1 " key={index}>
            <EndorsementElement name={item.name} colour={item.colorHexCodes} />{" "}
          </div>
        );
      })}
    </div>
  );
};

export default EndorsementContainer;
