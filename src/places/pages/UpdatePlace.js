import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import Button from "../../shared/components/FormElements/Button";
import Input from "../../shared/components/FormElements/Input";
import Card from "../../shared/components/UIElements/Card";
import { useForm } from "../../shared/hooks/form-hook";
import {
  VALIDATOR_MINLENGTH,
  VALIDATOR_REQUIRE,
} from "../../shared/util/Validators";

import "./FormPlace.css";

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

const UpdatePlace = () => {
  const [isLoading, setLoading] = useState(true);

  const placeId = useParams().placeId;
  const targetPlace = DUMMY_PLACES.find((p) => p.id === placeId);

  const [formState, inputHandler, setFormData] = useForm(
    {
      title: {
        value: "",
        isValid: false,
      },
      description: {
        value: "",
        isValid: false,
      },
    },
    false
  );

  useEffect(() => {
    if (targetPlace)
      setFormData(
        {
          title: {
            value: targetPlace.title,
            isValid: true,
          },
          description: {
            value: targetPlace.description,
            isValid: true,
          },
        },
        true
      );
    setLoading(false);
  }, [targetPlace, setFormData]);

  if (!targetPlace) {
    return (
      <div className="center">
        <Card>
          <h2>Place not found</h2>
        </Card>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="center">
        <Card>
          <h2>Loading...</h2>
        </Card>
      </div>
    );
  }

  const submitHandler = (event) => {
    event.preventDefault();
  };

  return (
    <form className="place-form" onSubmit={submitHandler}>
      <Input
        id="title"
        element="input"
        type="text"
        label="Title"
        validators={[VALIDATOR_REQUIRE()]}
        errorText="Please enter a valid title."
        onInput={inputHandler}
        initialValue={formState.inputs.title.value}
        initialValid={formState.inputs.title.isValid}
      />
      <Input
        id="description"
        element="textarea"
        label="Description"
        validators={[VALIDATOR_MINLENGTH(5)]}
        errorText="Please enter a valid description (at least 5 characters)."
        onInput={inputHandler}
        initialValue={formState.inputs.description.value}
        initialValid={formState.inputs.description.isValid}
      />
      <Button type="submit" disabled={!formState.isValid}>
        UPDATE PLACE
      </Button>
    </form>
  );
};

export default UpdatePlace;
