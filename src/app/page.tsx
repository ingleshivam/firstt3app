import { SignedIn, SignedOut } from "@clerk/nextjs";
import Link from "next/link";
import { db } from "~/server/db";
import { getMyImages } from "~/server/queries";

export const dynamic = "force-dynamic";

async function Image(){
  const images = await getMyImages();
  return(
    <div className="flex flex-wrap gap-4">
    {
      images.map((image)=>(
        <div key={image.id} className="flex w-48 flex-col">
          <img src={image.url}/>
          <div>{image.name}</div>
        </div>
      ))
    }
  </div>
  );
}

export default async function HomePage() {
  return (
    <main className="">
      <SignedOut>
        <div className="w-full h-full text-2xl text-center">
          Please SignIn Above...
        </div>
      </SignedOut>
      <SignedIn>
        <Image/>
      </SignedIn>
    </main>
  );  
}
