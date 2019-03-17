import { useState } from 'react';

function useForm<S>(
  initialValues: S
): [S, React.Dispatch<React.SetStateAction<S>>] {
  const [values, setValues] = useState<S>(initialValues);

  return [values, setValues];
}

export default useForm;
