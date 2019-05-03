import { Image } from './image';

export interface Article {
  section_name: string;
  subsection_name: string;
  headline: {};
  abstract: string;
  url: string;
  byline: string;
  item_type: string;
  updated_date: Date;
  created_date: Date;
  published_date: Date;
  material_type_facet: string;
  kicker: string;
  des_facet: string[];
  org_facet: string[];
  per_facet: string[];
  geo_facet: string[];
  multimedia: Image[];
  short_url: string;
}
