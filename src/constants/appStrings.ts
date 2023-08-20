export const appStrings = {
  appName: "Student Companion",
  admin: "admin",
};
export const rotues = {
  admin: "admin",
  department: "department",
  batch: "batch",
  section: "section",
  classDate: "class_date",
  classNumber: "class_number",
};
// const getAdmin = async () => {
//   const querySnapshot = await getDocs(collection(db, "department"));
//   const adminCredentials: any = querySnapshot.docs.map((doc) => ({
//     id: doc.id,
//     ...doc.data(),
//   }));
//   console.log("Department Credentials : ", adminCredentials);
//   adminCredentials.map(async (item: { id: any }) => {
//     const query2 = await getDocs(
//       collection(db, `department/${item.id}/batch`)
//     );
//     const data: any = query2.docs.map((doc) => ({
//       id: doc.id,
//       ...doc.data(),
//     }));
//     console.log("new data : ", data);
//   });
//   // setResName(adminCredentials[0]["username"]);
//   // setResKey(adminCredentials[0]["password"]);

//   // console.log(subjects);
// };
