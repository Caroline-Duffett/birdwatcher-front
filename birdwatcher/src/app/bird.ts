// export interface Bird {
//   _id: String;
//   name: String;
//   scientificName: String;
//   image: String;
//   location: String;
//   status: string;
//   description: string;
//   //stats: [Stats.schema];
//   user: String;
// }


export interface Bird {
  _id: Any;
  name: String;
  scientificName: String;
  image: String;
  location: String;
  status: string;
  description: string;
  //stats: [Stats.schema];
  user: Any;
}
