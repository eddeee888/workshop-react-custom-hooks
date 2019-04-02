// @ts-ignore
import { Dispatch, SetStateAction, useState } from 'react';

interface State {
  email: string;
  password: string;
}

// @ts-ignore
function useAuthenticationForm(): [State, Dispatch<SetStateAction<State>>] {

}

export default useAuthenticationForm;
