import { useQuery } from "react-query";
import { MapData } from "./data-mapper";

export function useDataDetails() {
  return useQuery("bharatagri", async () => {
    const response = await fetch(
      "https://api-cache-test.leanagri.com/pop/pop_list/en/64/pop_list.json"
    );
    const responseData = await response.json();
    if (responseData.status === true && responseData.message === "Success") {
      const mapData = MapData(responseData.data);
      return mapData;
    } else {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
  });
}
