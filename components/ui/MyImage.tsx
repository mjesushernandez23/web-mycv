import { sizeScreenAtom } from "@store/uiAtoms";
import { ImagesProps, ImageProps } from "@utils/interfaces/api";
import Image from "next/image";
import { useRecoilValue } from "recoil";

const API_BUCKET = process.env.API_BUCKET;

interface Props {
  className: string;
  image: ImagesProps;
}

const myLoader = ({ hash, ext, width }: ImageProps) =>
  `${API_BUCKET}${hash}${ext}?w=${width}&q=100`;

const MyImage = ({ image: { formats, name }, className }: Props) => {
  const mediaScreen = useRecoilValue(sizeScreenAtom);
  const imageMedia = formats[mediaScreen ?? "thumbnail"];

  return (
    <div style={{ position: "relative" }} className={className}>
      <Image
        loader={() => myLoader(imageMedia)}
        src={name}
        alt={name}
        layout="fill"
        objectFit="cover"
      />
    </div>
  );
};

export default MyImage;
