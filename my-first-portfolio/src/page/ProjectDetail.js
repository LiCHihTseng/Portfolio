import React from "react";
import { useLocation, useParams } from "react-router-dom";
import transition from "../transition";

import Insync from "../assets/img/InSync-logo.png";


// Mock data, should be imported or retrieved from a context/store in a real app
const items = [
  {
    id: 1,
    title: "InSync: The Digital Picture Frame",
    img: Insync,
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 2,
    title: "Project Name2",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
  {
    id: 3,
    title: "Project Name3",
    img: "https://picsum.photos/400",
    desc: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
  },
];


const ProjectDetail = () => {
  const location = useLocation();
  const { id } = useParams(); // Access the id from the URL
  const { item } = location.state || {}; // Get item data from location state

  // Helper function to find the item by ID if location.state is not available
  const getItemById = (id) => {
    return items.find((item) => item.id === parseInt(id));
  };

  // Use either location.state data or find the item by ID
  const projectItem = item || getItemById(id);

  if (!projectItem) return <div>No data available for project {id}.</div>;

  return (
    <div className="p-48x">
      <h1>{projectItem.title}</h1>
      <img src={projectItem.img} alt={projectItem.title} />
      <p>{projectItem.desc}</p>
    </div>
  );
};


export default ProjectDetail;