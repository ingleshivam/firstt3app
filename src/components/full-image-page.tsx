
import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";


export default async function FullPageImageView(props:{id:number}){
  const image =await getImage(props.id);

  const uploaderInfo = await clerkClient.users.getUser(image.userId);

  return (
    <div className="flex w-full bg-black/50 h-full min-w-0 justify-around">
      <div className="flex-shrink flex justify-center w-6/12 items-center">
        <img src={image.url} className="object-cover h-auto w-auto"/>
      </div>
      
    
      <div className="w-12/12 items-center p-6 items-center flex">
        <div className="">
          <div className="text-2xl mt-4 text-wrap"><span className="text-wrap">{image.name}</span></div>
          <div className="flex flex-col mt-4"><span>Uploaded By : {uploaderInfo.fullName}</span></div>
          <div className="flex flex-col mt-4"><span>Created On : {new Date(image.createdAt).toLocaleDateString ()}</span></div>
          <div className="flex flex-col mt-4">
            <form action={async () =>{
              "use server";
              await deleteImage(props.id);
            }}>
              <Button type="submit" variant={"destructive"}>DELETE</Button>  
            </form>
          </div>
        </div>
      </div> 
    </div> 
  );
} 