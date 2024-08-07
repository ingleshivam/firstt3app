import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/aefc3193-9ed2-424f-b9e3-69dce91ead4e-dpcld1.png",
  "https://utfs.io/f/2da270b5-4b7a-463b-bb45-883e7578d73d-uo5qym.jpg",
  "https://utfs.io/f/5065535e-5bd1-42e7-957f-33489c3893fa-qfplyw.wine.png",
  "https://utfs.io/f/aac79120-15ca-4560-96fe-342c72efa85e-aaet3j.avif"
];

const mockImages =mockUrls.map((url,index)=>({
  id:index-1,
  url
})) 

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {
          [...mockImages, ...mockImages, ...mockImages].map((image)=>(
            <div key={image.id} className="w-48">
              <img src={image.url}/>
            </div>
          ))
        }
      </div>
      Hello (gallary in progress)
    </main>
  );  
}
