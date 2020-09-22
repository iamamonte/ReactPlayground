import React from 'react';
import ResourceGrid from './ResourceGrid';


function TestResources() {
  const resources = [
    {
      image: "/img/BLM.png",
      name:"Ut tempus",
      description: "Ut tempus facilisis lacinia. Maecenas pharetra vel orci vitae tempor.",
    },
    {
      image: "/img/BLM.png",
      name:"Excepteur",
      description: "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt ollit anim id est laborum."
    },
    {
      image: "/img/BLM.png",
      name:"Orci varius",
      description: "Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus."
    },
    {
      image: "/img/BLM.png",
      name:"Praesent",
      description: "Praesent finibus dolor et luctus tincidunt. Phasellus ut neque eu nisl interdum luctus eu et nisi."
    }
  ]

  return (
      // <ResourceGrid resources={resources} type={"card"}/>
      <ResourceGrid resources={resources} type={"list"}/>
  );
}

export default TestResources;
