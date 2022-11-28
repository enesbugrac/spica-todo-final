import * as Bucket from "@spica-devkit/bucket";

class TodoService {
  //ADD YOUR API_KEY AND BUCKET_ID HERE
  private API_KEY = "<YOUR_API_KEY>";
  public BUCKET_ID = "<YOUR_BUCKET_ID>";

  constructor() {
    Bucket.initialize({
      publicUrl: "<YOUR_API_URL>",
      apikey: this.API_KEY,
    });
  }
  getAll = (options?: {
    headers?: object | undefined;
    queryParams?:
      | {
          [key: string]: any;
          paginate?: false | undefined;
        }
      | undefined;
  }) => {
    return Bucket.data.getAll(this.BUCKET_ID, options);
  };
  get = (id: string) => {
    return Bucket.data.get(this.BUCKET_ID, id);
  };
  getAllRealtime = (options?: {
    headers?: object | undefined;
    queryParams?:
      | {
          [key: string]: any;
          paginate?: false | undefined;
        }
      | undefined;
  }) => {
    return Bucket.data.realtime.getAll(this.BUCKET_ID, options);
  };

  update = (_id: string, document: object) => {
    return Bucket.data.patch(this.BUCKET_ID, _id, document);
  };
  insert = (item: object) => {
    return Bucket.data.insert(this.BUCKET_ID, item);
  };
  remove = (_id: string) => {
    return Bucket.data.remove(this.BUCKET_ID, _id);
  };
}

export default new TodoService();
