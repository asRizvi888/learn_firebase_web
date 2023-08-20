export interface IValidResponse {
  status: boolean;
  message: string;
}

export const nameValidator = (data: string): IValidResponse => {
  if (data?.length === 0) return { status: true, message: "Enter Admin Name" };

  const vaildCharRegex: RegExp = /^[0-9a-zA-Z ]+$/;
  const condition: boolean = !vaildCharRegex.test(data);

  return {
    status: condition,
    message: condition
      ? "Enter letter between a-z 0-9 A-Z"
      : "Admin not Registered",
  };
};

// export const registerValidator = (data: string): IValidResponse => {
//   /// Regex Setup
//   const vaildCharRegex: RegExp = /^[0-9a-zA-Z]+$/;
//   if (data.length >= 11)
//     return { status: true, message: "Key must be in 10 digit" };

//   const condition: boolean = !vaildCharRegex.test(data);

//   return {
//     status: condition,
//     message: condition ? "Enter key between a-z 0-9 A-Z" : "Invalid Auth Key",
//   };
// };
// export const emailValidator = (data: string): IValidResponse => {
//   /// Regex Setup
//   const vaildEmailRegex: RegExp =
//     /^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/;

//   const condition: boolean = !vaildEmailRegex.test(data);

//   return {
//     status: condition,
//     message: condition
//       ? "Enter a valid Email Address"
//       : "Invalid Email Address",
//   };
// };

export const passwordValidator = (data: string): IValidResponse => {
  /// Regex Setup
  const vaildCharRegex: RegExp = /^[0-9a-zA-Z]+$/;
  if (data.length >= 11)
    return { status: true, message: "Key must be in 10 digit" };

  const condition: boolean = !vaildCharRegex.test(data);

  return {
    status: condition,
    message: condition ? "Enter key between a-z 0-9 A-Z" : "Invalid Auth Key",
  };
};
