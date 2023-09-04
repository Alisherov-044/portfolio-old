import { createContext, useContext, useEffect, useState } from "react";
import {
  SkillsetContextInterface,
  SkillsetProviderInterface,
} from "@/utils/types";
import { fetcher } from "@/utils";
import { useGetRequest } from "@/hooks";
import { SkillsetUrl } from "@/utils/urls";
import { SkillSetScheme } from "@/utils/types.scheme";

const initialValue: SkillsetContextInterface = {
  skills: [],
};

const SkillsetContext = createContext<SkillsetContextInterface>(initialValue);

export function useSkillsetContext() {
  return useContext(SkillsetContext);
}

function SkillsetProvider({ children }: SkillsetProviderInterface) {
  const [skills, setSkills] = useState<SkillSetScheme[] | []>([]);

  const { data } = useGetRequest<SkillSetScheme[]>(SkillsetUrl, fetcher);

  useEffect(() => {
    if (data) {
      setSkills(data);
    }
  }, [data]);

  return (
    <SkillsetContext.Provider value={{ skills }}>
      {children}
    </SkillsetContext.Provider>
  );
}

export default SkillsetProvider;
