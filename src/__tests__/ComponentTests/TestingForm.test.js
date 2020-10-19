import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { render, fireEvent, waitForElement, wait } from "@testing-library/react";
import SignupForm from "../../components/TestingForm";

describe("Testing Form", () => {
  it("submits values and fires", async () => {
    const handleSubmit = jest.fn();
    const { findByTestId, getByTestId } = render(
      <SignupForm onSubmit={handleSubmit} />
    );

    const firstNameInput = await waitForElement(() => findByTestId("firstName"));
    const lastNameInput = await waitForElement(() => findByTestId("lastName"));
    const emailInput = await waitForElement(() => findByTestId("email"));
    const button = await waitForElement(() => findByTestId("submit"));

    await wait(() => {
      //change input firsName
      fireEvent.change(firstNameInput, {
        target: {
          value: "Adil"
        }
      });

      //blur field without input
      fireEvent.blur(lastNameInput);

      //change input email
      fireEvent.change(emailInput, {
        target: {
          value: "adil@merribi"
        }
      });

      //submit form
      fireEvent.submit(button);
    });

    expect(firstNameInput.value).not.toBe(null);
    expect(firstNameInput.value.length).toBeLessThanOrEqual(15);
    expect(getByTestId("emailError")).toHaveTextContent("Invalid email address");
    expect(getByTestId("lastNameError")).toHaveTextContent("Required");



    await wait(() => {
      //change input lastName
      fireEvent.change(lastNameInput, {
        target: {
          value: "Merribi"
        }
      });

      //change input email
      fireEvent.change(emailInput, {
        target: {
          value: "adil@merribi.com"
        }
      });

      //submit form
      fireEvent.submit(button);
    });

    expect(lastNameInput.value).not.toBe(null);
    expect(lastNameInput.value.length).toBeLessThanOrEqual(20);
    expect(emailInput).toBeValid();

  });
});