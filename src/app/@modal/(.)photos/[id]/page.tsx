
import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";
import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: {id:photoId},
}:{
  params: {id:string};
}){
  const idAsNumber = Number(photoId);
  if(Number.isNaN(idAsNumber)) throw Error("Invalid Photo ID");

  const image =await getImage(idAsNumber);
  return(
    <Modal>
      <FullPageImageView id={idAsNumber}/>
    </Modal>
  );
}