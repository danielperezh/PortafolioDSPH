import { tags } from "./tags";

export interface proyect {
  id: number;
  name: string;
  summary: string;
  decription: string;
  proyectLinkDemo: string;
  proyectLinkCodigo: string;
  mainImage: string[];
  pictures: string[];
  tags: tags[];
}
