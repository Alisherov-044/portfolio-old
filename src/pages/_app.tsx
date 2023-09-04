import "@/assets/styles/main.scss";
import ProjectsProvider from "@/context/projectsContext";
import SkillsetProvider from "@/context/skillsetContext";
import SocialNetworksProvider from "@/context/socialContext";
import SpecificationsProvider from "@/context/specificationsContext";
import type { AppProps } from "next/app";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <SkillsetProvider>
      <ProjectsProvider>
        <SocialNetworksProvider>
          <SpecificationsProvider>
            <Component {...pageProps} />
          </SpecificationsProvider>
        </SocialNetworksProvider>
      </ProjectsProvider>
    </SkillsetProvider>
  );
}
