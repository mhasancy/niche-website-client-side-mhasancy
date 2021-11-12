//imported file
import React from "react";
import useAuth from "../../../hooks/useAuth";
import TeamMember from "../TeamMember/TeamMember";

//team members component
const Team = () => {
  //destructuring data
  const { dataContext } = useAuth();
  const { teamData } = dataContext;
  return (
    <div>
      <div className=" container mx-auto my-5">
        <h1 className="d-none d-md-block fw-bold text-center ms-md-4 p-md-2  mt-5 mb-3">
          Our Team
          <span className="gradient-txt"> .</span>
        </h1>

        <h1
          style={{ fontSize: "2.5rem" }}
          className="d-block d-md-none fw-bold text-center ms-md-4 p-md-2  mt-5 mb-3"
        >
          Our Team
          <span className="gradient-txt"> .</span>
        </h1>
        <p className="text-center w-75 mx-auto mb-5">
          Our team members are ready to provide you with the best quality
          services.
        </p>
        {teamData?.length <= 0 ? (
          <div className="text-center">
            <div className="spinner-border" role="status"></div>
          </div>
        ) : (
          <div className="row row-cols-1 row-cols-md-3 g-4 container mx-auto">
            {teamData?.map((teamDataSingle) => (
              <TeamMember
                key={teamDataSingle?._id}
                teamDataSingle={teamDataSingle}
              ></TeamMember>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Team;
