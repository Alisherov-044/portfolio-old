import { createContext, useContext, useEffect, useState } from "react";
import {
  SpecificationsContextInterface,
  SpecificationsProviderInterface,
} from "@/utils/types";
import { fetcher } from "@/utils";
import { useGetRequest } from "@/hooks";
import { SpecificationsUrl } from "@/utils/urls";
import { SpecificationScheme } from "@/utils/types.scheme";

const initialValue: SpecificationsContextInterface = {
  specifications: [],
};

const SpecificationsContext =
  createContext<SpecificationsContextInterface>(initialValue);

export function useSpecificationsContext() {
  return useContext(SpecificationsContext);
}

function SpecificationsProvider({ children }: SpecificationsProviderInterface) {
  const [specifications, setSpecifications] = useState<
    SpecificationScheme[] | []
  >([]);

  const { data } = useGetRequest<SpecificationScheme[]>(
    SpecificationsUrl,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setSpecifications(data);
    }
  }, [data]);

  return (
    <SpecificationsContext.Provider value={{ specifications }}>
      {children}
    </SpecificationsContext.Provider>
  );
}

export default SpecificationsProvider;
