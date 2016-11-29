
export class FormField<T> {
  value: T;
  errors: string[];

  constructor(initialValue: T) {
    this.value = initialValue;
    this.errors = [];
  }
}