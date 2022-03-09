import React from "react";

import { useForm } from 'react-hook-form';

export default function Form() {

  const { register, handleSubmit } = useForm();

  return (
    <form>
      <div>
        <input type="text" name="type" placeholder="Type" {...register('type')} />
      </div>
      <div>
        <input type="text" name="name" placeholder="name" {...register('name')} />
      </div>
      <div>
        <div>
          <input type="checkbox" name="blue" {...register('blue')} />
          <label htmlFor="blue">Blue</label>
        </div>
        <div>
          <input type="checkbox" name="white" {...register('white')} />
          <label htmlFor="white">White</label>
        </div>
        <div>
          <input type="checkbox" name="red" {...register('red')} />
          <label htmlFor="red">Red</label>
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  )
}