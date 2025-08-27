import { TribeInformationContainer } from "./styles";

interface TribeInformationProps {
    imageUrl: string;
    children: React.ReactNode;
}

export function TribeInformation({ imageUrl, children }: TribeInformationProps) {
    return (
       <TribeInformationContainer>
            <div className="image">
                <img src={imageUrl} alt="Tribe" />
            </div>

            <div className="text">
                {children}
            </div>
       </TribeInformationContainer>
    )
}