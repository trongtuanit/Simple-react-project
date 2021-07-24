export const paginate = (users) => {
  const userPerPage = 10;
  const numberOfPages = Math.ceil(users.length / userPerPage);

  const newUsers = Array.from({ length: numberOfPages }, (_, index) => {
    const start = index * userPerPage;
    return users.slice(start, start + userPerPage);
  });

  return newUsers;
};
