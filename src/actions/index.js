export function selectBook(book) {
  //selectBook is action creation, and so must return an action - obj w/ type prop
  return {
    type: 'BOOK_SELECTED',
    payload: book
  };
}