import { useAppSelector } from "@/store";

export function useIsAuthorized() {
  const status = useAppSelector((s: any) => s.user.status);

  return status === "Authorized";
}
