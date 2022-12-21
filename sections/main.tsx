import { Image as LiveImage } from "$live/std/ui/types/Image.ts";
import Image from "$live/std/ui/components/Image.tsx";

export interface Props {
  img: LiveImage;
  profileImg: LiveImage;
  listaLink: {url: string; titulo: string}[];
  titulo: string;
  subtitulo?: string;
}
export default function main({ listaLink = [], img, titulo, subtitulo, profileImg}: Props) {
  return (
    <div class="min-h-screen">
      <div
        style={{ backgroundImage: `url(${img})` }}
        class="absolute inset-0 z-[-1]"
      />

      <div class="z-10 flex items-center justify-center">
        <div class="flex flex-col items-center gap-4 mt-10">
          <div><img  class="w-10 h-10 rounded-full" src={profileImg} alt="imagem-perfil" /></div>
          <div>{titulo}</div>
          <div>{subtitulo}</div>
          {listaLink.map(({url, titulo}) => <a class="bg-[white] text-center" href={url}>{titulo}</a>)}
        </div>
      </div>
    </div>
  );
}
