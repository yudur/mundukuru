import { LocInformationContainer } from "./styles";

import mapImage from '../../global/assets/map.svg';

export function LocInformation({ children }: { children: React.ReactNode }) {
  return (
    <>
        <LocInformationContainer>
            <img src={mapImage} alt="Mapa" />

            <div className="text">
                {children}
            </div>
        </LocInformationContainer>
    </>
  )
}