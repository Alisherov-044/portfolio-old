import { createContext, useContext, useEffect, useState } from "react";
import {
  ProjectsContextInterface,
  ProjectsProviderInterface,
} from "@/utils/types";
import { fetcher } from "@/utils";
import { useGetRequest } from "@/hooks";
import { ProjectsUrl } from "@/utils/urls";
import { ProjectScheme } from "@/utils/types.scheme";

const initialValue: ProjectsContextInterface = {
  projects: [],
};

const ProjectsContext = createContext<ProjectsContextInterface>(initialValue);

export function useProjectsContext() {
  return useContext(ProjectsContext);
}

function ProjectsProvider({ children }: ProjectsProviderInterface) {
  const [projects, setProjects] = useState<ProjectScheme[] | []>([]);

  const { data } = useGetRequest<ProjectScheme[]>(ProjectsUrl, fetcher);

  useEffect(() => {
    if (data) {
      setProjects(data);
    }
  }, [data]);

  return (
    <ProjectsContext.Provider value={{ projects }}>
      {children}
    </ProjectsContext.Provider>
  );
}

export default ProjectsProvider;
