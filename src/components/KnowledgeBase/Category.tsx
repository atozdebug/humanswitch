import React from "react";

function Category() {
  const categories = [
    {
      imgUrl: "/assets/images/folder.png",
      date: "19/06/2024",
      name: "Documents",
    },
    {
      imgUrl: "/assets/images/folder.png",
      date: "19/06/2024",
      name: "Youtube",
    },
    {
      imgUrl: "/assets/images/folder.png",
      date: "19/06/2024",
      name: "Musics",
    },
    {
      imgUrl: "/assets/images/folder.png",
      date: "19/06/2024",
      name: "FAQs",
    },
  ];

  return (
    <div className="grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-5">
      {categories?.map((item) => (
        <div className="grid-item p-3 rounded-[10px] bg-lightgray7">
          <img src={item.imgUrl} width={16} height={16} className="w-9 h-9" />
          <p className="text-sm font-semibold mt-3">{item.name}</p>
          <p className="text-xs text-lightgray4 pt-2px">{item.date}</p>
        </div>
      ))}

      {/* <div className="grid-item p-3 rounded-[10px] bg-lightgray7">
        <img
          src="/assets/images/folder.png"
          width={16}
          height={16}
          className="w-9 h-9"
        />
        <p className="text-sm font-semibold mt-3">Category</p>
        <p className="text-xs text-lightgray4 pt-2px">23 Oct 2021</p>
      </div>
      
      <div className="grid-item p-3 rounded-[10px] bg-lightgray7">
        <img
          src="/assets/images/folder.png"
          width={16}
          height={16}
          className="w-9 h-9"
        />
        <p className="text-sm font-semibold mt-3">Category</p>
        <p className="text-xs text-lightgray4 pt-2px">23 Oct 2021</p>
      </div>
      
      <div className="grid-item p-3 rounded-[10px] bg-lightgray7">
        <img
          src="/assets/images/pdf-File.png"
          width={16}
          height={16}
          className="w-9 h-9"
        />

        <p className="text-sm font-semibold mt-3">What is AI Readiness?</p>
        <p className="text-xs text-lightgray4 pt-2px">23 Oct 2021</p>
      </div> */}
    </div>
  );
}

export default Category;
