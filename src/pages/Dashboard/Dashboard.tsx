import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBatches, getDatas } from "../../Utils/firebaseFunctions";

const Dashboard = () => {
  /// DB Branches
  const [departments, setDepartments] = useState<any[]>([]);
  const [batches, setBatches] = useState<any[]>([]);
  const [sections, setSections] = useState<any[]>([]);
  const [classDates, setClassDates] = useState();
  const [classNumbers, setClassNumbers] = useState();
  const [loading, setLoading] = useState<boolean>(false);

  /// caller
  const loadDepts = async () => {
    setLoading(true);
    try {
      let depts = await getDatas();
      setDepartments(depts);
      //let promises = await Promise.all([depts]);
      console.log("depts : ", depts);
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
    return departments;
  };

  const loadBatches = async (departments) => {
    setLoading(true);
    try {
      getBatches(departments).then((res) => {
        setDepartments(res);
        console.log("HAHAH: ", res);
      });
    } catch (error) {
      console.log(error);
    }
    setLoading(false);
  };
  /// Loader Hook
  useEffect(() => {
    setLoading(true);
    getDatas()
      .then((res) => {
        setDepartments(res);
        getBatches(res).then((batch) => {
          setBatches(batch);
          console.log("Batches: ", batch);
        });
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <>
      <Box
        sx={{
          bgcolor: "black",
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography
          color={"white"}
          sx={{ typography: { xs: "h5", lg: "h3", p: 2 } }}
        >
          Dashboard
        </Typography>
      </Box>
    </>
  );
};

export default Dashboard;
