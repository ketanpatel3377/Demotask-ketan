import React from 'react';
import {render, fireEvent, act} from '@testing-library/react-native';
import SimpleForm from '../src/screen/Form/index';

describe('Basic Form Tests', () => {
  it('renders the input fields and no button initially', () => {
    const {queryByTestId} = render(<SimpleForm />);
    const button = queryByTestId('submitButton');
    expect(button).toBeTruthy(); // Button exists
    expect(button.props.accessibilityState.disabled).toBe(true); // Check disabled state
  });

  it('shows the button when both inputs have values', () => {
    const {getByTestId} = render(<SimpleForm />);
    const input1 = getByTestId('input1');
    const input2 = getByTestId('input2');
    const button = getByTestId('submitButton');

    act(() => {
      fireEvent.changeText(input1, 'Test1');
      fireEvent.changeText(input2, 'Test2');
    });

    expect(button.props.accessibilityState.disabled).toBe(false); // Enabled button
  });

  it('hides the button when one of the inputs is empty', () => {
    const {getByTestId, queryByTestId} = render(<SimpleForm />);
    const input1 = getByTestId('input1');
    const input2 = getByTestId('input2');
    const button = queryByTestId('submitButton');

    act(() => {
      fireEvent.changeText(input1, 'Test1');
      fireEvent.changeText(input2, '');
    });

    expect(button.props.accessibilityState.disabled).toBe(true); // Disabled button
  });

  it('outputs JSON when the button is pressed', () => {
    jest.spyOn(console, 'log').mockImplementation(() => {});

    const {getByTestId} = render(<SimpleForm />);
    const input1 = getByTestId('input1');
    const input2 = getByTestId('input2');
    const button = getByTestId('submitButton');

    act(() => {
      fireEvent.changeText(input1, 'Test1');
      fireEvent.changeText(input2, 'Test2');
      fireEvent.press(button);
    });

    // Expect a string
    expect(console.log).toHaveBeenCalledWith(
      '{"input1":"Test1","input2":"Test2"}',
    );

    jest.restoreAllMocks();
  });
});
