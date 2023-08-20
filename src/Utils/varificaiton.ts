export interface IAuthdata {
  status: boolean;
  message: string;
}

export const IAuthdata = (data: any) => {
  const condition: boolean =
    data.username === data["response"]["r_name"] &&
    data.key === data["response"]["r_pass"];
  //   const condition:boolean =

  return {
    status: condition,
    message: condition ? "Login Successfully" : "Invalid Credentials",
  };
};
