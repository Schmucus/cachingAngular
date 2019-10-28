export class Cache {

  code: string;
  name: string;
  difficulty: number;
  terrain: number;
  location: string;
  status: string;
  type: string;
  distance: number;
  short_description: string;
  size2: string;
  last_found: string;

  logs: any[];


constructor(code: string, name: string, location: string, status: string, type: string) {
  this.code = code;
  this.name = name;
  this.location = location;
  this.status = status;
  this.type = type;
}



}