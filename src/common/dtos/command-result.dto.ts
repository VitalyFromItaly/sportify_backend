export class CommandResult {
  public id?: number;
  
  public status?: 'success' | 'error' = 'success';

  constructor(id?: number, status?: 'success' | 'error') {
    this.id = id;
    this.status = status;
  }
}
