import Head from "next/head";
import AppLayout from "@/components/AppLayout/AppLayout";
import Hero from "@/components/Hero/Hero";
import Experiences from "@/components/Experince/Experiences";
import Services from "@/components/Services/Services";
import Portfolios from "@/components/Portfolios/Portfolios";
import Testimonials from "@/components/Testimonials/Testimonials";
import Image from "next/image";
import Clients from "@/components/Clients/Clients";
import Contact from "@/components/Contact/Contact";

export default function Home() {
    return (
        <>
            <Head>
                <title>Art Ronny</title>
                <meta name="description" content="Generated by create next app" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <AppLayout>
                <>
                    <Hero />
                    <Experiences />
                    <Services />
                    <Portfolios />
                    <Testimonials />
                    <Clients images={["mlife.svg", "soldo.png", "hollywood.png"]} />
                    <Contact />
                </>
            </AppLayout>
        </>
    );
}
