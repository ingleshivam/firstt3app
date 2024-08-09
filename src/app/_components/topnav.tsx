"use client";
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/nextjs";
import { UploadButton } from "../utils/uploadthing";
import { SimpleUploadButton } from "./simple-upload-button";
import { useRouter } from "next/navigation";

export function TopNav(){

    const router = useRouter();

    return(
      <nav className="flex items-center justify-between p-4 text-xl font-semibold border-b">
        <div>IMAGE GALLARY</div>
  
        <div className="flex flex-row">
            <SignedOut>
                <SignInButton/>
            </SignedOut>
            <SignedIn>
                <div className="flex items-center">
                  <div className="me-5">
                    <SimpleUploadButton/>
                  </div>
                  <div>
                    <UserButton/>
                  </div>
                </div>
            </SignedIn>
        </div>
      </nav>
    );
  }