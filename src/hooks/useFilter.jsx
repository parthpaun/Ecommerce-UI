import { useSearchParams } from "react-router";
import { getFilterList } from "../util/common";

export default function useFilter() {
  const [searchParams] = useSearchParams();
  const brand = getFilterList(searchParams.get("brand") ?? "");
  const viscosity = getFilterList(searchParams.get("viscosity") ?? "");
  const size = getFilterList(searchParams.get("size") ?? "");
  return { brand, viscosity, size };
}
