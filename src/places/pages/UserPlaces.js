import React from "react";
import { useParams } from "react-router-dom";

import PlaceList from "../components/PlaceList";

const DUMMY_PLACES = [
  {
    id: "p1",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://i.ibb.co/W2FVdpR/melanie-dretvic-URt-R9-Yi-Le-R0-unsplash.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng: -73.9856644 },
    creator: "u1",
  },
  {
    id: "p2",
    title: "Empire State Building",
    description: "One of the most famous sky scrapers in the world!",
    imageUrl:
      "https://i.ibb.co/W2FVdpR/melanie-dretvic-URt-R9-Yi-Le-R0-unsplash.jpg",
    address: "20 W 34th St, New York, NY 10001, United States",
    location: { lat: 40.7484405, lng: -73.9856644 },
    creator: "u2",
  },
];

const UserPlaces = (props) => {
  const uId = useParams().uId;
  const PLACES = DUMMY_PLACES.filter((place) => place.creator === uId);
  return <PlaceList items={PLACES} />;
};

export default UserPlaces;
