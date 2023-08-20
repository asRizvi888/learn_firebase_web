import { Box, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { getBatches, getDatas } from "../../Utils/firebaseFunctions";
import C_Button from "../../components/atoms/C_Button";

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
<<<<<<< HEAD

=======
  const cse = "CSE";
  const eee = "EEE";
>>>>>>> 3cf33a1 (UI Added)
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
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          bgcolor: "orange",
          left: 0,
          right: 0,
          top: 0,
          bottom: 0,
          mt: 3,
          border: 3,
          height: "400px",
          width: "700px",
          borderColor: "black",
          borderRadius: 4,
        }}
      >
        <Typography variant="h4" sx={{ m: 3 }}>
          Departments
        </Typography>
        <Box
          sx={{
            bgcolor: "white",
            height: "50px",
            mb: 3,
            ml: 3,
            mr: 3,
            border: 3,
            borderRadius: 4,
            borderColor: "black",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box>
            <C_Button
              label={cse}
              marginLeft={2}
              marginTop={1}
              variant="contained"
              btn_text_color="black"
              size={"small"}
              width="100px"
              onSubmit={() => console.log(`Clicked ${cse}`)}
            />
          </Box>
          <Box sx={{ mt: 1, mr: 1 }}>
            <C_Button
              label="Edit"
              variant="contained"
              size={"small"}
              btn_color="success"
              btn_text_color="white"
              width="100px"
              onSubmit={() => console.log(`Clicked ${eee}`)}
            />
            <C_Button
              label="Delete"
              variant="contained"
              size={"small"}
              style={{ fontSize: "24px" }}
              btn_color="error"
              marginLeft={2}
              btn_text_size="50px"
              btn_text_color="black"
              width="100px"
              onSubmit={() => console.log(`Clicked ${eee}`)}
            />
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default Dashboard;
