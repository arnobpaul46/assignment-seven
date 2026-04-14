import React from "react";

const friends = [
  {
    name: "David Kim",
    tag: "WORK",
    status: "Almost Due",
    img: "https://i.pravatar.cc/100?img=1",
  },
  {
    name: "Emma Wilson",
    tag: "FAMILY",
    status: "Overdue",
    img: "https://i.pravatar.cc/100?img=2",
  },
  {
    name: "Lisa Nakamura",
    tag: "WORK",
    status: "Overdue",
    img: "https://i.pravatar.cc/100?img=3",
  },
  {
    name: "James Wright",
    tag: "HOBBY",
    status: "On track",
    img: "https://i.pravatar.cc/100?img=4",
  },
];

const getStatusClass = (status) => {
  if (status === "Overdue") return "bg-error";
  if (status === "Almost Due") return "bg-warning";
  return "bg-success";
};

function App() {
  return (
    <div className="mt-8 w-[80%] mx-auto bg-base-100 ">

      {/* 🔹 Stats Section */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
        <div className="card bg-base-200 p-6 text-center shadow">
          <h2 className="text-2xl font-bold">{friends.length}</h2>
          <p>Total Friends</p>
        </div>

        <div className="card bg-base-200 p-6 text-center shadow">
          <h2 className="text-2xl font-bold">3</h2>
          <p>On Track</p>
        </div>

        <div className="card bg-base-200 p-6 text-center shadow">
          <h2 className="text-2xl font-bold">6</h2>
          <p>Need Attention</p>
        </div>

        <div className="card bg-base-200 p-6 text-center shadow">
          <h2 className="text-2xl font-bold">12</h2>
          <p>Interactions This Month</p>
        </div>
      </div>

      {/*  Friends Section */}
      <div>
        <h2 className="text-xl font-semibold mb-4">Your Friends</h2>

        <div className="grid grid-cols-1  sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {friends.map((friend, index) => (
            <div key={index} className="card bg-base-200 shadow p-6 text-center">

              {/* Picture */}
              <div className="avatar mx-auto mb-3">
                <div className="w-16 rounded-full">
                  <img src={friend.img} alt="avatar" />
                </div>
              </div>

              {/* Name */}
              <h3 className="font-semibold">{friend.name}</h3>
              <p className="text-sm text-gray-400 mb-2">62d ago</p>

              {/* Tag */}
              <div className=" text-center  pb-3">
                <button className="bg-success px-4 py-1 rounded-xl text-black">{friend.tag}</button>
              </div>

              {/* Status */}
              <div className="text-center">
                <button className={`px-4 py-1 rounded-xl font-semibold ${getStatusClass(friend.status)}`}>{friend.status}</button>
              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}

export default App;