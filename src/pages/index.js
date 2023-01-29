import Searchbar from "@/components/Shared/SearchBar";
import ProfileFigure from "@/components/Shared/ProfileFigure";
import { useState, useEffect } from "react";
import { getProfile, getPersonalitySummaries, getTraits } from "utils/apis";
import PersonalitySummaryTable from "@/components/PersonalitySummaryTable/PersonalitySummaryTable";
import EndorsementElement from "@/components/Endorsement.js/EndorsementElement";
import EndorsementContainer from "@/components/Endorsement.js/EndorsementContainer";

export default function Home() {
  const [profileData, setProfileData] = useState({});
  const [personalitySummaries, setPersonalitySummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [endorsement, setEndorsement] = useState([]);
  const [traits, setTraits] = useState([]);
  console.log(traits);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfile();
        setProfileData(response[0]);
        const personalityResponse = await getPersonalitySummaries(
          response[0].id
        );
        const traitsResponse = await getTraits();
        setPersonalitySummaries(personalityResponse.summaryTableRows);
        setEndorsement(response[0].mostEndorsedElements);
        setTraits(traitsResponse);

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
    <div className="flex  bg-black h-full w-full text-white">
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
            <Searchbar traits={traits} />
          </div>
          <div className="mt-[5%]">
            <div className="text-5xl">{profileData.userName}</div>
            <span>{profileData.profileUrl.slice(8)}</span>
          </div>
          <div className="mt-[5%]">
            <PersonalitySummaryTable personality={personalitySummaries} />
          </div>
          <div className="mt-[1%]">
            <h1 className=" text-2xl">Most Endorsed Elements</h1>
            <EndorsementContainer endorsement={endorsement} />
          </div>
          <div className="mt-[3%] text-white">
            <h1 className=" text-2xl">Adjectives</h1>

            <p className="py-2">{profileData.adjectives.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
