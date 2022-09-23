export class AsyncError extends Error {
  constructor(public status: number, public message: string) {
    super(message);
    this.status = status;
  }
}

export default AsyncError;
