import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Articulos extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  iditem?: string;

  @property({
    type: 'string',
    required: true,
  })
  detalle: string;

  @property({
    type: 'string',
    required: true,
  })
  nombre: string;

  @property({
    type: 'number',
    required: true,
  })
  precio: number;

  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Articulos>) {
    super(data);
  }
}

export interface ArticulosRelations {
  // describe navigational properties here
}

export type ArticulosWithRelations = Articulos & ArticulosRelations;
