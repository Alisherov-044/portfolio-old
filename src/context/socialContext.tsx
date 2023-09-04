import { createContext, useContext, useEffect, useState } from "react";
import {
  SocialNetworksContextInterface,
  SocialNetworksProviderInterface,
} from "@/utils/types";
import { fetcher } from "@/utils";
import { useGetRequest } from "@/hooks";
import { SocialNetworksUrl } from "@/utils/urls";
import { SocialNetworkScheme } from "@/utils/types.scheme";

const initialValue: SocialNetworksContextInterface = {
  socialNetworks: [],
};

const SocialNetworksContext =
  createContext<SocialNetworksContextInterface>(initialValue);

export function useSocialNetworksContext() {
  return useContext(SocialNetworksContext);
}

function SocialNetworksProvider({ children }: SocialNetworksProviderInterface) {
  const [socialNetworks, setSocialNetworks] = useState<
    SocialNetworkScheme[] | []
  >([]);

  const { data } = useGetRequest<SocialNetworkScheme[]>(
    SocialNetworksUrl,
    fetcher
  );

  useEffect(() => {
    if (data) {
      setSocialNetworks(data);
    }
  }, [data]);

  return (
    <SocialNetworksContext.Provider value={{ socialNetworks }}>
      {children}
    </SocialNetworksContext.Provider>
  );
}

export default SocialNetworksProvider;
