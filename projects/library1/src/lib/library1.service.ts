import { Injectable, Input } from '@angular/core';
import gql from 'graphql-tag';

import { ExampleFragment } from './__generated__/ExampleFragment';

export const query = gql`
  fragment ExampleFragment on ExampleType {
    id
    exampleEnum
  }
`;

@Injectable({
  providedIn: 'root'
})
export class Library1Service {
  @Input() exampleInput: ExampleFragment;

  constructor() { }
}
