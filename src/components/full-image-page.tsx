
import { clerkClient } from "@clerk/nextjs/server";
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props:{id:number}){
  const image =await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex w-full bg-green-500 h-full min-w-0">
      <div className="flex-shrink flex justify-center items-center">
        <img src={image.url} className="object-contain flex-shrink"/>
      </div>
      
    
      <div className="w-48 flex gap-2 flex-col flex-shrink-0 border-l px-2">
        <div className="border-b text-center text-lg font-bold p-2">{image.name}</div>
        <div className="flex flex-col"><span>Uploaded By :</span> <span>{uploaderInfo.fullName}</span></div>
        <div className="flex flex-col"><span>Crated On :</span> <span>{new Date(image.createdAt).toLocaleDateString ()}</span></div>
      </div> 
    </div> 
  );
} 