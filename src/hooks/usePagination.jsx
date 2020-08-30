import { useEffect, useState } from "react";

import { getColleges } from "../services";

export default function usePagination(pageNo) {
  const [loading, setLoading] = useState(true);
  const [colleges, setColleges] = useState([]);
  const [hasValue, setHasValue] = useState(true);

  useEffect(() => {
    setLoading(true);
    (async function fetchColleges() {
      try {
        const { colleges: respColleges, hasValue } = await getColleges(pageNo);
        setColleges((colleges) => [...colleges, ...respColleges]);
        setHasValue(hasValue);
      } 
      catch (err) {
        setColleges([])
        setHasValue(true)
      } 
      finally {
        setLoading(false);
      }
    })();
  }, [pageNo]);

  return { 
    loading, 
    hasValue, 
    colleges, 
    length: colleges.length };
}
