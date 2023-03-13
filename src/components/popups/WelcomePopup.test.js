import { screen, render } from '@testing-library/react';
import user from '@testing-library/user-event';
import WelcomePopup from './WelcomePopup';

const userData = {
  name: 'Maciej',
};

describe('UserAccount component', () => {
  test('welcome popup gets closed on X button', () => {
    render(<WelcomePopup userData={userData} />);

    const closeButton = screen.getByRole('button', { name: /close button/i });
    const heading = screen.getByRole('heading', { name: /welcome to socialboom/i });
    expect(closeButton).toBeInTheDocument();
    expect(heading).toBeInTheDocument();

    user.click(closeButton);
    //expecting not to find the heading
    expect(heading).not.toBeInTheDocument();
    expect(closeButton).not.toBeInTheDocument();
  });
});
