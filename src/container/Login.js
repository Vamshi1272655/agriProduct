import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import FormHelperText from "@mui/material/FormHelperText";
import { useState } from "react";

export const Login = () => {
  const [password, setPassword] = useState("");
  const [userName, setUserName] = useState("");
  const [hasError, setHasError] = useState(false);

  console.log(password, userName);
  const handleLogin = () => {
    console.log("cor");
    if (userName === "agri" && password === "1234") {
      window.location.href = "/dashboard";
      setHasError(false);
    } else {
      setPassword("");
      setHasError(true);
    }
  };
  return (
    <div>
      <Card
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          height: "300px",
          width: "400px",
          margin: "auto",
          marginTop: "50vh",
          transform: "translateY(-50%)",
          borderBottomColor: "green",
          borderBottomWidth: "10px",
          borderBottomStyle: "solid",
        }}
      >
        <TextField
          id="UserName"
          label="User Name"
          variant="outlined"
          sx={{ marginBottom: "20px", width: "350px" }}
          onChange={(e) => setUserName(e.target.value)}
        />
        <TextField
          id="Password"
          label="Password"
          value={password}
          variant="outlined"
          sx={{ marginBottom: "20px", width: "350px" }}
          onChange={(e) => setPassword(e.target.value)}
        />
        {hasError ? (
          <FormHelperText sx={{ color: "red" }}>
            Your UserName or Password is Incorrect
          </FormHelperText>
        ) : (
          ""
        )}

        <CardActions>
          <Button
            sx={{
              backgroundColor: "green",
              color: "white",
              "&:hover": {
                backgroundColor: "white",
                color: "green",
              },
            }}
            onClick={handleLogin}
          >
            Login
          </Button>
        </CardActions>
      </Card>
    </div>
  );
};
