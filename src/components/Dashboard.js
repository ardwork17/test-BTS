import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router';
import { Link } from "react-router-dom";


function Dashboard() {
    const history = useHistory();
    const token = localStorage.getItem("token");
    const [checklist, setChecklist] =  useState([]);
    useEffect(() => {
        if (token) {
            history.push("/dashboard");
          } else {
          }
      
        axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
        axios.get("http://94.74.86.174:8080/api/checklist")
        .then((response) => {
            setChecklist(response.data.data);
              });
      }, []);
    
return (
 <h5>{checklist}ini dashboard</h5>
  );
}

export default Dashboard;

