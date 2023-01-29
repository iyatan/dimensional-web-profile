import Searchbar from "@/components/Shared/SearchBar";
import ProfileFigure from "@/components/Shared/ProfileFigure";
import { useState, useEffect } from "react";
import { getProfile, getPersonalitySummaries } from "utils/apis";
import PersonalitySummaryTable from "@/components/PersonalitySummaryTable/PersonalitySummaryTable";
import EndorsementElement from "@/components/Endorsement.js/EndorsementElement";
import EndorsementContainer from "@/components/Endorsement.js/EndorsementContainer";

export default function Home() {
  const [profileData, setProfileData] = useState({});
  const [personalitySummaries, setPersonalitySummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [endorsement, setEndorsement] = useState([]);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfile();
        setProfileData(response[0]);
        const personalityResponse = await getPersonalitySummaries(
          response[0].id
        );
        setPersonalitySummaries(personalityResponse.summaryTableRows);
        setEndorsement(response[0].mostEndorsedElements);

        setLoading(false);
      } catch (error) {
        setError(error);
        setLoading(false);
      }
    };
    fetchProfileData();
  }, []);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return (
    <div className="flex  bg-black h-screen w-full text-white">
      <div className="flex mx-[12.5%] w-full">
        <div className="basis-[40%] pr-[10%] ">
          <div className="mt-[3%] ">
            <img
              src="./images/logo-dimensional.png"
              width={75}
              alt="logo"
            ></img>
            <h1 width={300}>Dimensional</h1>
          </div>
          <div className="mt-[8%]">
            <ProfileFigure />
            <div className="mt-[3%] mr-16">{profileData.description}</div>
          </div>
        </div>
        <div className="basis-[60%]">
          <div className="mt-[2%] flex justify-end">
            <Searchbar />
          </div>
          <div className="mt-[5%]">
            <div className="text-5xl">{profileData.userName}</div>
            <span>{profileData.profileUrl.slice(8)}</span>
          </div>
          <div className="mt-[5%]">
            <PersonalitySummaryTable personality={personalitySummaries} />
          </div>
          <div className="mt-[3%]">
            <h1 className=" text-2xl">Most Endorsed Elements</h1>
            <EndorsementContainer endorsement={endorsement} />
          </div>
        </div>
      </div>
    </div>
  );
}
