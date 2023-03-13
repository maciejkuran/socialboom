import { screen, render } from '@testing-library/react';
import UserPostList from './UserPostList';

const userData = {
  name: 'Maciej',
  lastName: 'Kuran-Janowski',
  profileImage: '',
};

const postList = [
  {
    content: 'description',
    date: '',
    id: 1,
    image: '',
    tags: '#tag',
  },
  {
    content: 'description2',
    date: '',
    id: 3,
    image: '',
    tags: '#tag',
  },
];

describe('UserPostList component', () => {
  test('posts list is rendered correctly', () => {
    render(<UserPostList userData={userData} postList={postList} />);
    screen.debug();

    const headings = screen.getAllByRole('heading', { name: new RegExp(userData.lastName, 'i') });

    //we expect 2 items to be rendered with 2 headings
    expect(headings).toHaveLength(2);
  });
});
