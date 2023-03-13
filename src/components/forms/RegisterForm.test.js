import { render, screen } from '@testing-library/react';
import user from '@testing-library/user-event';
import RegisterForm from './RegisterForm';

const renderComponent = () => {
  const mock = jest.fn();
  render(<RegisterForm onSubmitData={mock} />);
};

describe('RegisterForm component', () => {
  test('form is submitted with a proper data', () => {
    const mock = jest.fn();
    render(<RegisterForm onSubmitData={mock} />);

    //selecting submit btn & inputs
    const button = screen.getByRole('button', { name: /ready!/i });
    const nameInput = screen.getByPlaceholderText('Name');
    const lastNameInput = screen.getByPlaceholderText('Last Name');
    const countryInput = screen.getByPlaceholderText('Country');
    const imgInput = screen.getByPlaceholderText('image');

    //simulating user activity
    user.click(nameInput);
    user.keyboard('Maciej');
    user.click(lastNameInput);
    user.keyboard('Maciej Kuran-Janowski');
    user.click(countryInput);
    user.keyboard('Poland');
    const file = new File(['hello'], 'hello.png', { type: 'image/png' });
    user.upload(imgInput, file);

    user.click(button);
    expect(mock).toHaveBeenCalledWith({
      name: 'Maciej',
      lastName: 'Maciej Kuran-Janowski',
      country: 'Poland',
      profileImage: expect.anything(),
      username: expect.anything(),
    });
  });

  test('all text inputs are marked as required', () => {
    renderComponent();
    const inputs = screen.getAllByRole('textbox');
    inputs.forEach(input => expect(input).toHaveAttribute('required'));
  });
});
