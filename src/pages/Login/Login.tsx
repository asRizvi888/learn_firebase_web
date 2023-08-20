import { Box, Typography } from "@mui/material";
import C_TextField from "../../components/C_Textfield";
import { useEffect, useState } from "react";
import { nameValidator, passwordValidator } from "../../Utils/validator";
import CreateIcon from "@mui/icons-material/Create";
import KeyOutlinedIcon from "@mui/icons-material/KeyOutlined";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../../config/firestore";
import C_Button from "../../components/atoms/C_Button";
import { enqueueSnackbar } from "notistack";
import { useNavigate } from "react-router-dom";
import { IAuthdata } from "../../Utils/varificaiton";
import { rotues } from "../../constants/appStrings";

const Login = () => {
  /// Name Validation
  const [name, setName] = useState<string>("");
  const [errorName, setErrorName] = useState<string>("Invalid Credentials");
  const [validityName, setValidityName] = useState<boolean>(false);

  /// Pass Validaiton
  const [password, setPassword] = useState<string>("");
  const [errorPassword, setErrorPassword] = useState<string>(
    "Invalid Credentials"
  );
  const [validityPassword, setValidityPassword] = useState<boolean>(false);

  const navigate = useNavigate();
  let [resName, setResName] = useState<string>("");
  let [resKey, setResKey] = useState<string>("");

  const getAdmin = async () => {
    const querySnapshot = await getDocs(collection(db, rotues?.admin));
    const adminCredentials: any = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    console.log("Department Credentials : ", adminCredentials);

    setResName(adminCredentials[0]["username"]);
    setResKey(adminCredentials[0]["password"]);
  };

  const handleOnSubmit = (body: any) => {
    if (!body.username && !body.key) {
      return enqueueSnackbar("Fill the Input Values !", {
        variant: "error",
      });
    }
    const entryResponse = IAuthdata(body);

    entryResponse.status
      ? enqueueSnackbar(entryResponse.message, {
          variant: "success",
        })
      : enqueueSnackbar(entryResponse.message, {
          variant: "error",
        });
    entryResponse.status ? navigate("/dashboard") : null;
  };

  useEffect(() => {
    getAdmin();
  }, []);

  return (
    <>
      <Box
        sx={{
          justifyContent: "center",
          display: "flex",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <Typography variant="h2" fontWeight={500} fontFamily="Arial">
          Login
        </Typography>
        <Box
          sx={{
            width: {
              xs: "50vw",
              sm: "45vw",
              md: "40vw",
              lg: "35vw",
              xl: "30vw",
            },
            mt: 4,
          }}
        >
          <C_TextField
            fullwidth
            label="Admin"
            id="outlined-start-adornment1"
            required={true}
            type="text"
            value={name}
            helperText={errorName}
            isError={validityName}
            fieldOnChange={(data) => {
              setName(data);
              const res = nameValidator(data);
              const { status, message } = res;

              console.log("Name Status : ", status);
              setErrorName(message);
              setValidityName(!name?.length || status);
            }}
            prefixIcon={<CreateIcon />}
          />
        </Box>
        <Box
          sx={{
            width: {
              xs: "50vw",
              sm: "45vw",
              md: "40vw",
              lg: "35vw",
              xl: "30vw",
            },
            mt: 4,
          }}
        >
          <C_TextField
            fullwidth
            label="Password"
            id="outlined-start-adornment2"
            required={true}
            type="password"
            value={password}
            helperText={errorPassword}
            isError={validityPassword}
            fieldOnChange={(data) => {
              setPassword(data);
              const res = passwordValidator(data);
              const { status, message } = res;
              console.log("Pass Status : ", status);
              setErrorPassword(message);
              setValidityPassword(!password?.length || status);
            }}
            prefixIcon={<KeyOutlinedIcon />}
          />
        </Box>
        <Box>
          <C_Button
            height="30%"
            width="10vw"
            label="Login"
            variant="contained"
            size={"medium"}
            style={{ justifyContent: "center", alignSelf: "center" }}
            onSubmit={() =>
              handleOnSubmit({
                username: name,
                key: password,
                response: { r_name: resName, r_pass: resKey },
              })
            }
          />
        </Box>
      </Box>
    </>
  );
};

export default Login;
