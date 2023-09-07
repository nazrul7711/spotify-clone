import React from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import styles from "@/styles/addSong.module.scss";
import { AiOutlineClose } from "react-icons/ai";
import { useAppDispatch } from "@/app/store/hook";
import { closeModal } from "@/app/store/spotifySlice";

type FormType = {
  title: string;
  author: string;
  song: string;
  image: string;
};

const AddSong = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>();
  function closeHandler() {
    dispatch(closeModal())
  }
  const submitHandler: SubmitHandler<FormType> = (data) => {

  };
  return (
    <div className={styles.wrapper}>
      <form className={styles.form} onSubmit={handleSubmit(submitHandler)}>
        <div className={styles.close} onClick={closeHandler}>
          <AiOutlineClose />
        </div>
        <div className={styles.addsong}>Add a Song</div>
        <div className={styles.upload}>Upload an mp3 file</div>
        <input type="text" placeholder="Song title" {...register("title")} />
        <input type="text" placeholder="Song author" {...register("author")} />
        <div className={styles.songselect}>
          <label htmlFor="songFile">Select a song file</label>
          <input type="file" {...register("song")} />
        </div>
        <div className={styles.songselect}>
          <label htmlFor="songImage">Select an image</label>
          <input type="file" {...register("image")} />
        </div>
        <button>Create</button>
      </form>
    </div>
  );
};

export default AddSong;
