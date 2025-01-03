"use client"
import Image from "next/image";
import { StyledHeader } from "./sharedStyles";

export default function Header() {
  return (
    <StyledHeader>
      <Image 
        alt="evob-logo"
        src="https://evob-dev-upload.s3.amazonaws.com/rj9qh2w3zz8k983y4l7vv7cssabn?response-content-disposition=inline%3B%20filename%3D%22Logo.png%22%3B%20filename%2A%3DUTF-8%27%27Logo.png&response-content-type=image%2Fpng&X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIA4ZNCK5F4PZR2VLPI%2F20250103%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20250103T155407Z&X-Amz-Expires=604800&X-Amz-SignedHeaders=host&X-Amz-Signature=d82e3cd8e2a8d9d3ff5f6fd5e43306d9cec9f6e9c35a9457e8b82a8c97c1ff9e"
        height={120}
        width={120}
      />
    </StyledHeader>
  )
}
