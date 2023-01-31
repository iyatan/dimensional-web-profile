import Searchbar from "@/components/Shared/SearchBar";
import ProfileAvatar from "@/components/Shared/ProfileAvatar";
import { useState, useEffect } from "react";
import { getProfile, getPersonalitySummaries, getTraits } from "utils/apis";
import PersonalitySummaryTable from "@/components/PersonalitySummaryTable/PersonalitySummaryTable";
import EndorsementContainer from "@/components/Endorsement.js/EndorsementContainer";
import Image from "next/image";

export default function Home() {
  const [profileData, setProfileData] = useState({});
  const [personalitySummaries, setPersonalitySummaries] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [endorsement, setEndorsement] = useState([]);
  const [traits, setTraits] = useState([]);

  const [showSuggestions, setShowSuggestions] = useState(false);

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

  const handleShowSuggestions = (value) => {
    setShowSuggestions(value);
  };

  if (loading) return <div className="text-white">Loading...</div>;
  if (error) return <div className="text-white">Error: {error.message}</div>;

  return (
    <div className="flex bg-black w-screen text-white">
      <div className="flex flex-col sm:flex sm:flex-row m-2 sm:mx-[12.5%] w-full">
        <div className="basis-[40%] sm:pr-[10%] ">
          <div className="mt-[3%] flex  sm:block ">
            <div>
              <Image
                height={10}
                className="hidden sm:block"
                src="/images/logo-dimensional.png"
                width={75}
                alt="logo"
              ></Image>
              <h1 className="font-sans text-xl" width={300}>
                Dimensional
              </h1>
            </div>

            <div
              className={`sm:hidden flex sm:mr-44 ${
                !showSuggestions ? " ml-auto" : " ml-0"
              }`}
            >
              <Searchbar
                traits={traits}
                onFocus={() => handleShowSuggestions(true)}
                onBlur={() => handleShowSuggestions(false)}
                showSuggestions={showSuggestions}
              />
            </div>
          </div>
          <div className="mt-[8%] flex flex-col items-center">
            <ProfileAvatar size={200} />
            <div className="sm:hidden text-center">
              <div className="font-sans text-3xl text-center">
                {profileData.userName}
              </div>
              <span>{profileData.profileUrl.slice(8)}</span>
            </div>
            <div className="flex">
              <div className="sm:hidden mt-[3%] mr-2 ">
                <ProfileAvatar size={50} />
              </div>

              <div className="mt-[3%] mr-16">{profileData.description}</div>
            </div>
          </div>
        </div>
        <div className="basis-[60%]">
          <div className="mt-[2%] sm:flex hidden justify-end mr-[70%]">
            <Searchbar
              traits={traits}
              onFocus={() => handleShowSuggestions(true)}
              onBlur={() => handleShowSuggestions(false)}
              showSuggestions={showSuggestions}
            />
          </div>
          <div className="mt-[15%] hidden sm:block">
            <div className="text-5xl">{profileData.userName}</div>
            <span>{profileData.profileUrl.slice(8)}</span>
          </div>
          <div className="mt-[5%]">
            <PersonalitySummaryTable personality={personalitySummaries} />
          </div>
          <div className="mt-[1%]">
            <h1 className="font-sans  text-2xl">Most Endorsed Elements</h1>
            <EndorsementContainer endorsement={endorsement} />
          </div>
          <div className="mt-[3%] text-white">
            <h1 className="font-sans  text-2xl">Adjectives</h1>

            <p className="py-2">{profileData.adjectives.join(", ")}</p>
          </div>
        </div>
      </div>
    </div>
  );
}
