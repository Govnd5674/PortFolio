import React from "react";
import GridMotion from "../../blocks/Backgrounds/GridMotion/GridMotion";

const Page3 = () => {
  const items = [
    "PROJECT 1",
    <div key="jsx-item-1">NODE JS</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "PROJECT 2",
    <div key="jsx-item-2">BLENDER</div>,
    "PROJECT 4",
    <div key="jsx-item-2">FUSION</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "PROJECT 5",
    <div key="jsx-item-2">REACT JS</div>,
    "PROJECT 7",
    <div key="jsx-item-2">MONGO DB</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "PROJECT 8",
    <div key="jsx-item-2">POSTMAN</div>,
    "PROJECT 10",
    <div key="jsx-item-3">LINUX</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "PROJECT 11",
    <div key="jsx-item-2">FRONTEND</div>,
    "PROJECT 13",
    <div key="jsx-item-4">BACKEND</div>,
    "https://images.unsplash.com/photo-1723403804231-f4e9b515fe9d?q=80&w=3870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "PROJECT 14",
  ];

  return (
    <section id="skills" className="relative h-[100vh] bg-gray-950 overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-950 via-transparent to-gray-950 z-10" />
        <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-gray-950 to-transparent z-10" />
        <div className="absolute inset-x-0 bottom-0 h-20 bg-gradient-to-t from-gray-950 to-transparent z-10" />
      </div>
      <GridMotion items={items} />
    </section>
  );
};

export default Page3;
