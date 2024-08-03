import ListItem from "@/components/ListItem";
import Image from "next/image";

const wihy_list: string[]= [
  "Chaos Chat App",
  "Marathi Dictionary Website",
  "Plutao Game",
  "Wikitags Dashboard",
  "Bcast Website",
  "Game site for Nakama",
  "Anime streaming Website (Animeshon)",
  "Gakuzai",
  "Physics Engine",
  "After Life Project",
  "My Fantasy Novel"
]

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col  gap-4 p-24 text-left w-[700px] mx-auto bg-white">
      <h1 className="text-2xl font-bold text-left text-black">{'What I haven\'t finished yet: '}</h1>
      <ul className="gap-3 flex flex-col">
        {wihy_list.map((i, index) => <ListItem key={index}>{i}</ListItem>)}
      </ul>
      {/* <h1 className="text-2xl font-bold text-left text-black">Projects I did finish: </h1> */}
    </main>
  );
}
