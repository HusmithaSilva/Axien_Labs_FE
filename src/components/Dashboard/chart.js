import React, { useState, useEffect } from "react";
import { Bar } from "react-chartjs-2";
import axios from "axios";
//imports of chart packages
import {
  BarElement,
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  Title,
  Tooltip,
} from "chart.js";
//registration of charts to chart.js package
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
//display users in axios get
//charts functions
const Chart = (props) => {
  //api request
  const Endpoint = "https://axien-lab-node.onrender.com/api/user/all";
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
  // return barchart
  return (
    <div className="">
      <div style={{ maxWidth: "750px" }}>
        {
          <Bar
            data={{
              // Name of the variables on x-axies for each bar
              labels: user.map((user) => [`${user.name}`]),
              datasets: [
                {
                  // Label for bars
                  label: "User price details",
                  // Data or value of your each variable
                  data: user.map((user) => [`${user.price}`]),
                  // Color of each bar
                  backgroundColor: ["aqua"],
                  // Border color of each bar
                  borderColor: ["aqua"],
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

          // })
        }
      </div>
    </div>
  );
};

export default Chart;
