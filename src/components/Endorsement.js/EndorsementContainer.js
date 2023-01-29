import EndorsementElement from "./EndorsementElement";

const EndorsementContainer = ({ endorsement }) => {
  return (
    <div className="flex flex-row flex-wrap">
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
