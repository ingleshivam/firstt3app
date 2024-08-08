"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { SimpleUploadButton } from "./simple-upload-button";
import { useRouter } from "next/navigation";

export function TopNav(){

    const router = useRouter();

    return(
      <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
        <div>Gallary</div>
  
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                {/* <UploadButton endpoint="imageUploader" onClientUploadComplete={() => {
                  router.refresh();
                }}/> */}
                <SimpleUploadButton/>
                <UserButton/>
            </SignedIn>
        </div>
      </nav>
    );
  }