export class Favorites {
  favoritesId: number = null;
  questionId: number = null;
  usersId: number = null;
  questions: string = null;
  answers: string = null;

  constructor(initialValues?: Partial<Favorites>) {
    if (initialValues) Object.assign(this, initialValues);
  }
}
