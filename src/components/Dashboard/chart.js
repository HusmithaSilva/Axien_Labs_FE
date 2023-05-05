import React, { useState } from "react";
import { Bar } from "react-chartjs-2";
import { CDBContainer } from "cdbreact";

//display users in axios get
//most child node
const Chart = (props) => {


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


        const Display = (props) => {
          const { menu, users } = props;
      
          if (users > 0) {
            return users.map((user, index) => {
              console.log(user);
      
              return (
                // <div>
                //   {/* <ModalChart></ModalChart> */}
                // </div>

                <CDBContainer>
                {/* <h3 className="mt-5">Bar chart</h3> */}
                <Bar data={user} options={{ responsive: true }} />
              </CDBContainer>

              );
            });
          }
        };
      
        return <>{Display(props)}</>;
    //   };
      



//   const [data] = useState({
//     labels: [
//       "Eating",
//       "Drinking",
//       "Sleeping",
//       "Designing",
//       "Coding",
//       "Cycling",
//       "Running",
//     ],
//     datasets: [
//       {
//         label: "My First dataset",
//         backgroundColor: "rgba(194, 116, 161, 0.5)",
//         borderColor: "rgb(194, 116, 161)",
//         data: [65, 59, 90, 81, 56, 55, 40],
//       },
//       {
//         label: "My Second dataset",
//         backgroundColor: "rgba(71, 225, 167, 0.5)",
//         borderColor: "rgb(71, 225, 167)",
//         data: [28, 48, 40, 19, 96, 27, 100],
//       },
//     ],
//   });



//   return (
   
//   );
};

export default Chart;
