import React from "react";
import { useQuery, gql } from "@apollo/client";
import LaunchItem from "./LaunchItem";
import MissionKey from "./MissionKey";

const LAUNCHES_QUERY = gql`
  query LaunchesQuery {
    launches {
      flight_number
      mission_name
      launch_date_local
      launch_success
    }
  }
`;

const Launches = () => {
  const { loading, error, data } = useQuery(LAUNCHES_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error : {error.message}</p>;

  return (
    <>
      <MissionKey />
      <h1 className="display-4 my-3">Launches</h1>
      {data.launches.map((launch) => (
        <LaunchItem key={launch.mission_name} launch={launch} />
      ))}
      ;
    </>
  );
};

export default Launches;
