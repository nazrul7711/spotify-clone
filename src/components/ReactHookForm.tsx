import { error } from "console";
import React from "react";
import { SubmitHandler, useForm } from "react-hook-form";
//useForm gives form mgr functionality and submithandler is type
//{...register('user')}here register is a function taking a string and gives values like ref, name and thats why we use spread operator onChange,onBlur,ref,name
//valueAsNumber:true
//const [firstname,lastname]=watch(['firstname','lastname'])
//useEffect(()=>const sub=watch((d)=>console.log(d)) return ()=>sub.unsubscribe())
//formState:{errors}
//forState:{isDirty},formState:{dirtyFields} for both dirty and dirty fields provide defaultValues
//touchFields touched and blurred,isSubmitted,isSubmittedSuccessfull
//isValid mode:'onChange"
type InputType = {
  example: string;
  exampleRequired: string;
};
const ReactHookForm = () => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<InputType>();
  const submithandler: SubmitHandler<InputType> = (data) => {
    console.log(data.example);
    console.log(data.exampleRequired);
    console.log(errors.exampleRequired?.message);
  };
  console.log(watch("example"));
  return (
    <div>
      <form onSubmit={handleSubmit(submithandler)}>
        <input
          type="text"
          {...register("example", { required: "this is required" })}
        />
        {errors.example && errors.example.message}
        <input
          type="text"
          {...register("exampleRequired", {
            required: "this field is required",
            minLength: {
              value: 4,
              message: "minimum length is 4",
            },
            // validate:async (data)=>{
            //   return data==="bill"
            // }
          })}
        />
        {errors.exampleRequired && (
          <span>{errors.exampleRequired.message}</span>
        )}
        <button>submit</button>
      </form>
    </div>
  );
};

export default ReactHookForm;
