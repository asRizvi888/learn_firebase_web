import { collection, getDocs } from "firebase/firestore";
import { db } from "../../src/config/firestore";
import { rotues } from "../constants/appStrings";

export const getDatas = async () => {
  let depts: string[] = [];

  try {
    await getDocs(collection(db, rotues?.department)).then((snapshot) => {
      snapshot.docs.map((doc) => {
        depts.push(doc?.id);
      });
    });
    return depts;
  } catch (err) {
    console.error(err);
  }
};

export const getBatches = async (depts: any[]) => {
  let batches: any = [];
  try {
    depts.map(async (i: string | number) => {
      let batch: any = [];
      await getDocs(collection(db, `department/${i}/batch`)).then(
        (snapshot) => {
          snapshot.docs.map((doc) => {
            batch.push(doc.id);
          });
        }
      );
      batches.push({ [i]: batch });
    });
    return batches;
  } catch (err) {
    console.error(err);
  }
};
