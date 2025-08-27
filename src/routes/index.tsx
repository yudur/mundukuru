import { createFileRoute } from "@tanstack/react-router";
import { HomeContainer } from "./styles";

export const Route = createFileRoute("/")({
    component: Home,
})

function Home() {
    return <HomeContainer></HomeContainer>
}