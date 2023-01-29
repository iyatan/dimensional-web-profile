import Searchbar from "@/components/Shared/SearchBar";
import ProfileFigure from "@/components/Shared/ProfileFigure";
import { useState, useEffect } from "react";
import { getProfile, getPersonalitySummaries } from "utils/apis";
import PersonalitySummaryTable from "@/components/PersonalitySummaryTable/PersonalitySummaryTable";

export default function Home() {
  const [profileData, setProfileData] = useState({});
  const [personalitySummaries, setPersonalitySummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const response = await getProfile();
        setProfileData(response[0]);
        const personalityResponse = await getPersonalitySummaries(
          response[0].id
        );
        setPersonalitySummaries(personalityResponse.summaryTableRows);

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
        <div className="basis-[40%] mr-[10%] ">
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
            <div className="mt-[3%]">{profileData.description}</div>
          </div>
        </div>
        <div className="basis-[60%]">
          <div className=" flex justify-end">
            <Searchbar />
          </div>
          <div className="mt-[10%]">
            <div className="text-5xl">{profileData.userName}</div>
            <span>{profileData.profileUrl.slice(8)}</span>
          </div>
          <div className="mt-[8%]">
            <PersonalitySummaryTable personality={personalitySummaries} />
          </div>
        </div>
      </div>
    </div>
  );
}
