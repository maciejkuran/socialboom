import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import AddPost from './AddPost';

describe('AddPost component', () => {
  test('form is submitted correctly', () => {
    const mock = jest.fn();
    render(<AddPost onSubmitGetPostData={mock} setAddPostForm={mock} />);

    //selecting form elements
    const descriptionInput = screen.getByRole('textbox', { name: /description/i });
    const hashInput = screen.getByPlaceholderText(/#seperate #tags/i);
    const imgInput = screen.getByPlaceholderText(/image/i);
    const submitButton = screen.getByRole('button', { name: /ready/i });

    //checking if elements exist in the doc.
    const elements = [descriptionInput, hashInput, imgInput, submitButton];
    elements.forEach(el => expect(el).toBeInTheDocument());

    //simulating form submission
    user.click(descriptionInput);
    user.keyboard('description');
    user.click(hashInput);
    user.keyboard('#tag');
    user.click(submitButton);
    expect(mock).toHaveBeenCalledWith({
      content: 'description',
      tags: '#tag',
      image: expect.anything(),
      id: expect.anything(),
      date: expect.anything(),
    });
  });
});
