import { colleges } from "../college/colleges.json";

export const getColleges = (pageNo = 1, limit = 10) => {
  return new Promise((resolve, reject) => {
    const offset = (pageNo - 1) * limit;
    setTimeout(() => {
      try {
        resolve({
          hasValue: colleges.length > offset + limit,
          colleges: colleges.slice(offset, offset + limit),
        });
      } catch (err) {
        reject(err);
      }
    }, 1000);
  });
};
