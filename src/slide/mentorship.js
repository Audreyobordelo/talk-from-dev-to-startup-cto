import React from "react";
import { Heading, Slide, Notes, List, ListItem } from "spectacle";

export default (
  <Slide
    transition={["fade"]}
    bgColor="white"
    textColor="black"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>many "hats" to bear will quickly get exhausting.</p>
      <p>hit a wall sooner or later</p>
      <p>Your worst enemy is the impostor syndrom.</p>
      <p>"Why am I here?", "I don't know what's I'm doing!"</p>
      <p>Even more true for bootcamps</p>
      <p>
        What helped me : talk about technologies I use. 90% of people are just
        starting the grab things you master
      </p>
    </Notes>
    <Heading size={6} textColor="pink" caps fit>
      I did not know that
    </Heading>
    <List>
      <ListItem>Impostor syndrome</ListItem>
      <ListItem>Just "me" wasn't enough</ListItem>
      <ListItem>Get Mentorship</ListItem>
      <ListItem>Talk to friends</ListItem>
      <ListItem>Go to meetups</ListItem>
      <ListItem>Follow tech influencers</ListItem>
    </List>
  </Slide>
);
