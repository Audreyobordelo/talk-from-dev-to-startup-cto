import React from 'react'
import { Heading, Slide, Text, Notes, List, ListItem } from 'spectacle'

export default (
  <Slide
    transition={['zoom']}
    bgColor="yellow"
    progressColor="black"
    controlColor="black"
  >
    <Notes>
      <p>I wasn't the one who boostraped the project</p>
      <p>You have to do what it takes to make everything yours.</p>
      <p>
        I let myself focus on only some areas and wasted time, Resulting in
        duplicated code.
      </p>
      <p>
        Once you accept the role, success AND failure are your only
        responsibility
      </p>
      <p>If you don't know, then no one will.</p>
      <p>
        Link: It's important to be very cautious of how to write code. But
        sometimes the best is to not write it at all
      </p>
    </Notes>
    <img
      className="absolute z-0"
      alt="warning"
      style={{
        width: '18%',
        right: '5%',
        bottom: '5%'
      }}
      src="assets/images/teach.svg"
    />
    <Heading size={1} caps lineHeight={1} textColor="black">
      Own the code
    </Heading>
    <Text margin="10px 0 0" textColor="black" size={0.5}>
      <List>
        <ListItem>Magic code is impossible to debug</ListItem>
        <ListItem>You are the only reference</ListItem>
        <ListItem>You will not be able to breakdown work</ListItem>
        <ListItem>You should be able to answer anything...</ListItem>
        <ListItem>...or lose everyone's confidence</ListItem>
      </List>
    </Text>
  </Slide>
)
