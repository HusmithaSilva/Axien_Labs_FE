import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";
import axios from "axios";
// import { Bar } from "react-chartjs-2";
import { BarElement,  CategoryScale,Chart as ChartJS,Legend, LinearScale,Title, Tooltip } from "chart.js";


ChartJS.register(CategoryScale, LinearScale, BarElement,Title,Tooltip,Legend);
//display users in axios get
//most child node
const Chart = (props) => {
  // const [data] = useState({
  //   labels: [
  //     "Eating",
  //     "Drinking",
  //     "Sleeping",
  //     "Designing",
  //     "Coding",
  //     "Cycling",
  //     "Running",
  //   ],
  //   datasets: [
  //     {
  //       label: "My First dataset",
  //       backgroundColor: "rgba(194, 116, 161, 0.5)",
  //       borderColor: "rgb(194, 116, 161)",
  //       data: [65, 59, 90, 81, 56, 55, 40],
  //     },
  //     {
  //       label: "My Second dataset",
  //       backgroundColor: "rgba(71, 225, 167, 0.5)",
  //       borderColor: "rgb(71, 225, 167)",
  //       data: [28, 48, 40, 19, 96, 27, 100],
  //     },
  //   ],
  // });

  // return (
  //   <CDBContainer>
  //     {/* <h3 className="mt-5">Bar chart</h3> */}
  //     <Bar data={data} options={{ responsive: true }} />
  //   </CDBContainer>
  // );












    // const DisplayUser = (props) => {
    //     const [users, getUsers] = useState("");
    //     //where data of users fetch from
    //     const url = "http://localhost:8081/api/user/all";
      
    //     const getAllUsers = () => {
    //       axios
    //         .get(`${url}`)
    //         .then((Response) => {
    //           const AllUsers = Response.data.users.AllUsers;
    //           getUsers(AllUsers);
    //         })
    //         .catch((error) => {
    //           console.error(`Error: ${error}`);
    //         });
    //     };
      
    //     useEffect(() => {
    //       getAllUsers();
    //     }, []);


    //     const Display = (props) => {
    //       const { menu, users } = props;
      
    //       if (users > 0) {
    //         return users.map((user, index) => {
    //           console.log(user);
      
    //           return (
    //             // <div>
    //             //   {/* <ModalChart></ModalChart> */}
    //             // </div>

    //             <CDBContainer>
    //             {/* <h3 className="mt-5">Bar chart</h3> */}
    //             <Bar data={data} options={{ responsive: true }} />
    //           </CDBContainer>

    //           );
    //         });
    //       }
    //     };
      
    //     return <>{Display(props)}</>;
    // //   };
    // }









// ||===================================================||


const Endpoint = "http://localhost:8081/api/user/all";
const [user, setUser] = useState([]);
const getUserList = async () => {
  try {
    const fetchData = await axios.get(Endpoint, {
      headers: {
        // authorization: "Bearer JWT Token",
      },
    });
    setUser(fetchData.data.content);
  } catch (error) {
    console.log(error);
  }
};

useEffect(() => {
  window.addEventListener("load", getUserList);
  return () => {
    window.removeEventListener("load", getUserList);
  };
}, [user]);



return (
  <div className="">
    <div style={{ maxWidth: "750px" }}>

  {
    user.map((user) => {

    console.log(user);
      const price = user.price;
      const stock = user.stock;
      console.log(price);

      <Bar
        data={{
          // Name of the variables on x-axies for each bar
          labels: ["price", "stock"],
          datasets: [
            {
              // Label for bars
              label: "total count/value",
              // Data or value of your each variable
              data: [`${price}`, `${stock}`],
              // Color of each bar
              backgroundColor: ["aqua", "green"],
              // Border color of each bar
              borderColor: ["aqua", "green"],
              borderWidth: 0.5,
            },
          ],
        }}
        // Height of graph
        height={300}
        options={{
          maintainAspectRatio: false,
          scales: {
            yAxes: [
              {
                ticks: {
                  // The y-axis value will start from zero
                  beginAtZero: true,
                },
              },
            ],
          },
          legend: {
            labels: {
              fontSize: 15,
            },
          },
        }}
      />

      })
  }
    </div>
  </div>

  
);


};
// ||======================================================||

export default Chart;



















// const DisplayUser = (props) => {
// const [users, getUsers] = useState("");
// //where data of users fetch from
// const url = "http://localhost:8081/api/user/all";

// const getAllUsers = () => {
//   axios
//     .get(`${url}`)
//     .then((Response) => {
//       const AllUsers = Response.data.users.AllUsers;
//       getUsers(AllUsers);
//     })
//     .catch((error) => {
//       console.error(`Error: ${error}`);
//     });
// };

// useEffect(() => {
//   getAllUsers();
// }, []);

// const Display = (props) => {
//   const { menu, users } = props;

//   if (users > 0) {
//     return users.map((user, index) => {
//       console.log(user);

//       return (
//         // <div>
//         //   {/* <ModalChart></ModalChart> */}
//         // </div>

//         <CDBContainer>
//         {/* <h3 className="mt-5">Bar chart</h3> */}
//         <Bar data={data} options={{ responsive: true }} />
//       </CDBContainer>

//       );
//     });
//   }
// };

// return <>{Display(props)}</>;
//   };

//   return (

//   );

// export default Chart;
